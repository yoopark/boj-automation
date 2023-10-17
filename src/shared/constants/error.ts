export const ERROR = {
  USAGE: (command: string) =>
    `Usage: bun ${command} <problem-id> <source-path>`,
  PROBLEM_ID_NOT_NUMBER: 'Problem id must be a number',
  PROBLEM_ID_NOT_IN_RANGE: 'Problem id must be in range [1000, 100000)',
  SOURCE_NOT_JS: 'Source file must be a JS source file',
  SOURCE_NOT_EXIST: 'Source file does not exist',
  FAIL_TO_FETCH_TEST_CASES: 'Failed to fetch test cases',
  NUMBER_OF_OUTPUTS_NOT_MATCH: 'The number of outputs does not match',
} as const;
