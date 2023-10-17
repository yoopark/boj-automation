import type { CompareResult } from '@/check/types/CompareResult';

export const printCompareResults = (
  compareResults: CompareResult[],
  inputs: string[],
) => {
  compareResults.forEach(({ isCorrect, output, expectedOutput }, index) => {
    const no = index + 1;
    console.log(`#${no} ${isCorrect ? 'Correct ✅' : 'Wrong ❌'}`);

    if (isCorrect) {
      return;
    }

    console.log('Input:');
    console.log(inputs[index].trimEnd());
    console.log('Output:');
    console.log(output.trimEnd());
    console.log('Expected Output:');
    console.log(expectedOutput.trimEnd());
  });
};
