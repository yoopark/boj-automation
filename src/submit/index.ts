import fs from 'fs';
import puppeteer from 'puppeteer';

import { ERROR } from '@/shared/constants/error';
import { HUMANLIKE_USER_AGENT_VALUE } from '@/shared/constants/header';
import { printDivider } from '@/shared/printDivider';
import { printTitle } from '@/shared/printTitle';
import { BYE } from '@/shared/utils/bye';
import { login } from '@/submit/login';
import { submit } from '@/submit/submit';
import { waitForGrading } from '@/submit/waitForGrading';

if (process.argv.length != 4) {
  BYE(ERROR.USAGE('check'));
}

const problemId = parseInt(process.argv[2]);

if (isNaN(problemId)) {
  BYE(ERROR.PROBLEM_ID_NOT_NUMBER);
}

if (problemId < 1000 || problemId > 100000) {
  BYE(ERROR.PROBLEM_ID_NOT_IN_RANGE);
}

const sourcePath = process.argv[3];

if (!sourcePath.endsWith('.js')) {
  BYE(ERROR.SOURCE_NOT_JS);
}

if (!fs.existsSync(sourcePath)) {
  /* move to parent directory */
  process.chdir('..');

  if (!fs.existsSync(sourcePath)) {
    BYE(ERROR.SOURCE_NOT_EXIST);
  }
}

const source = fs.readFileSync(sourcePath, 'utf-8');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.setUserAgent(HUMANLIKE_USER_AGENT_VALUE);

  printTitle(problemId);
  printDivider();

  await login(page);
  console.log('login success');

  await submit(page, problemId, source);
  console.log('submit success');

  await waitForGrading(page);

  await browser.close();
})();
