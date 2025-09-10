import { test, expect } from "@playwright/test";

test.describe("Public Smoke", () => {
  test("Home page loads", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Huntd/i);
  });
});
