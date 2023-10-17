import { GRADING_STATUS } from '@/shared/constants/gradingStatus';
import { Page } from 'puppeteer';

import { SELECTOR } from '@/shared/constants/selector';
import { delay } from '@/shared/utils/delay';

export const waitForGrading = async (page: Page): Promise<void> => {
  await page.waitForSelector(SELECTOR.STATUS_TEXT);

  const element = await page.waitForSelector(SELECTOR.STATUS_TEXT);

  if (element === null) {
    throw new Error('element is null');
  }

  let isGraded = false;

  while (!isGraded) {
    const value = await element.evaluate((el) => el.textContent); // value is any

    if (value === null) {
      throw new Error('value is null');
    }

    console.log(value);

    if (!GRADING_STATUS.some((s) => value.includes(s))) {
      isGraded = true;
    } else {
      await delay(100);
    }
  }
};
