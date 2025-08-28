import "dotenv/config";

export const getEnv = (key: string): string => {
  const value = process.env[key];
  // console.log(value);
  if (value === undefined) {
    throw new Error(`Environment variable ${value} not set`);
  }
  return value;
};
