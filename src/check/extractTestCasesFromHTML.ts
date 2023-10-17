import { load } from 'cheerio';

import { SELECTOR } from '@/shared/constants/selector';
import type { TestCase } from '@/check/types/TestCase';

export const extractTestCasesFromHTML = (html: string) => {
  const $ = load(html);

  const testCases: TestCase[] = [];

  let i = 1;

  while (true) {
    const $sampleInput = $(SELECTOR.SAMPLE_INPUT(i));
    const $sampleOutput = $(SELECTOR.SAMPLE_OUTPUT(i));

    if ($sampleInput.length === 0 || $sampleOutput.length === 0) {
      break;
    }

    testCases.push({
      input: $sampleInput.text(),
      output: $sampleOutput.text(),
    });

    i += 1;
  }

  return testCases;
};
