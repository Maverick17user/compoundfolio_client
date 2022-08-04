import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.LOCAL_BASE_URL,
  },
};
export default config;
