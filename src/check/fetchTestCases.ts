import axios from 'axios';

import { HUMANLIKE_HEADER } from '@/shared/constants/header';
import { extractTestCasesFromHTML } from '@/check/extractTestCasesFromHTML';
import { ERROR } from '@/shared/constants/error';
import { BOJ_URL } from '@/shared/constants/url';

export const fetchTestCases = async (problemId: number) => {
  const response = await axios.get<string>(BOJ_URL.PROBLEM(problemId), {
    headers: HUMANLIKE_HEADER,
  });

  if (response.status !== 200) {
    throw new Error(ERROR.FAIL_TO_FETCH_TEST_CASES);
  }

  const { data } = response;

  return extractTestCasesFromHTML(data);
};
