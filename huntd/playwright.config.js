import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [["list"], ["allure-playwright"]],
  use: {
    baseURL: "https://huntd.tech",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
