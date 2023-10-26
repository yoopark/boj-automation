import { Page } from 'puppeteer';

import { SELECTOR } from '@/shared/constants/selector';
import { BOJ_URL } from '@/shared/constants/url';

export const submit = async (
  page: Page,
  problemId: number,
  source: string,
): Promise<void> => {
  await page.goto(BOJ_URL.PROBLEM_SUBMIT(problemId));

  await page.waitForSelector(SELECTOR.PROBLEM_SUBMIT_SOURCE);

  await page.keyboard.sendCharacter(source);

  await page.waitForSelector(SELECTOR.PROBLEM_SUBMIT_BUTTON);
  await page.click(SELECTOR.PROBLEM_SUBMIT_BUTTON);
  await page.waitForNavigation();
};
