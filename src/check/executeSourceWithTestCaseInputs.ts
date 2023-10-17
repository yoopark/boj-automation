import { exec } from 'child_process';

export const executeSourceWithTestCaseInputs = async (
  source: string,
  inputs: string[],
) => {
  const outputs = await Promise.all(
    inputs.map((input) => executeSourceWithTestCaseInput(source, input)),
  );

  return outputs;
};

/* execute and return output */
const executeSourceWithTestCaseInput = async (
  source: string,
  input: string,
) => {
  return new Promise<string>((resolve, reject) => {
    const child = exec(`node -e "${source}"`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else if (stderr) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });

    child.stdin?.write(input);
    child.stdin?.end();
  });
};
