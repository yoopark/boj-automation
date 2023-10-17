const BOJ_BASE_URL = 'https://www.acmicpc.net';

const getBOJURL = (path: string) => {
  if (path.startsWith('/')) {
    return `${BOJ_BASE_URL}${path}`;
  }
  return `${BOJ_BASE_URL}/${path}`;
};

export const BOJ_URL = {
  LOGIN: getBOJURL('/login'),
  PROBLEM: (problemId: number) => getBOJURL(`/problem/${problemId}`),
  PROBLEM_SUBMIT: (problemId: number) => getBOJURL(`/submit/${problemId}`),
} as const;
