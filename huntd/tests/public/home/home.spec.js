import { test, expect } from "../../_fixtures/fixtures";

test.describe("Public Smoke", () => {
  test("Home page loads", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Huntd/i);
  });
});
