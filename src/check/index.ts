import fs from 'fs';

import { compareOutputs } from '@/check/compareOutputs';
import { executeSourceWithTestCaseInputs } from '@/check/executeSourceWithTestCaseInputs';
import { fetchTestCases } from '@/check/fetchTestCases';
import { printResult } from '@/check/printResult';
import { ERROR } from '@/shared/constants/error';
import { BYE } from '@/shared/utils/bye';

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

const testCases = await fetchTestCases(problemId);
const testCaseInputs = testCases.map((testCase) => testCase.input);
const testCaseOutputs = testCases.map((testCase) => testCase.output);

const outputs = await executeSourceWithTestCaseInputs(source, testCaseInputs);

const compareResults = compareOutputs(outputs, testCaseOutputs);

printResult(problemId, compareResults, testCaseInputs);
