import { printCompareResults } from '@/check/printCompareResults';
import type { CompareResult } from '@/check/types/CompareResult';
import { printDivider } from '@/shared/printDivider';
import { printTitle } from '@/shared/printTitle';

export const printResult = (
  problemId: number,
  compareResults: CompareResult[],
  inputs: string[],
) => {
  printTitle(problemId);
  printDivider();
  printCompareResults(compareResults, inputs);
};
