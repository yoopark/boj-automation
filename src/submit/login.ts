import { Page } from 'puppeteer';

import { SELECTOR } from '@/shared/constants/selector';
import { BOJ_URL } from '@/shared/constants/url';
import { getOrThrow } from '@/shared/utils/dot-env/getOrThrow';

const BOJUsername = getOrThrow('BOJ_USERNAME');
const BOJPassword = getOrThrow('BOJ_PASSWORD');

export const login = async (page: Page): Promise<void> => {
  await page.goto(BOJ_URL.LOGIN);

  await page.waitForSelector(SELECTOR.LOGIN_USERID);
  await page.waitForSelector(SELECTOR.LOGIN_PASSWORD);

  await page.type(SELECTOR.LOGIN_USERID, BOJUsername);
  await page.type(SELECTOR.LOGIN_PASSWORD, BOJPassword);

  await page.click(SELECTOR.LOGIN_SUBMIT_BUTTON);

  // TODO: recaptcha 나오면 해결
  await page.waitForNavigation();
};
