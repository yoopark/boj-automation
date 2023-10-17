import dotenv from 'dotenv';

dotenv.config({
  path: '@/.env',
});

export const getOrThrow = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return value;
};
