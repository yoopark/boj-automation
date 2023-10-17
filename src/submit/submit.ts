import { Page } from 'puppeteer';

import { OPEN_BRACKETS } from '@/shared/constants/escapeLetter';
import { SELECTOR } from '@/shared/constants/selector';
import { BOJ_URL } from '@/shared/constants/url';

export const submit = async (
  page: Page,
  problemId: number,
  source: string,
): Promise<void> => {
  await page.goto(BOJ_URL.PROBLEM_SUBMIT(problemId));

  await page.waitForSelector(SELECTOR.PROBLEM_SUBMIT_SOURCE);

  // TODO: refactor to clipboard copy & paste source
  // FIXME: 따옴표도 열면 닫는 문자까지 함께 입력되는데, 이를 구분하여 처리해야 함. 지금은 얼떨결에 타이핑이 성공하는 느낌.
  for (const c of source) {
    await page.keyboard.type(c);

    if (OPEN_BRACKETS.some((target) => target === c)) {
      await page.keyboard.press('Delete');
    }
  }

  await page.waitForSelector(SELECTOR.PROBLEM_SUBMIT_BUTTON);
  await page.click(SELECTOR.PROBLEM_SUBMIT_BUTTON);
  await page.waitForNavigation();
};
