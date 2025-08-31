import { getEnv } from "../utils/get-env";

export const config = {
  PORT: getEnv("PORT"),
  DATABASE_URL: getEnv("MONGO_URL"),
  BASE_PATH: getEnv("BASE_PATH"),
};
