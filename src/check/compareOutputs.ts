import type { CompareResult } from '@/check/types/CompareResult';
import { ERROR } from '@/shared/constants/error';

export const compareOutputs = (
  outputs: string[],
  expectedOutputs: string[],
): CompareResult[] => {
  if (outputs.length !== expectedOutputs.length) {
    throw new Error(ERROR.NUMBER_OF_OUTPUTS_NOT_MATCH);
  }

  return outputs.map((output, index) => {
    const expectedOutput = expectedOutputs[index];
    const isCorrect = output === expectedOutput;

    return {
      isCorrect,
      output,
      expectedOutput,
    };
  });
};
