import { test as base } from "@playwright/test";
import { SignUpPage } from "../../../src/ui/pages/auth/SignUpPage";
import { UserBuilder } from "../../../src/data/UserBuilder";

export const test = base.extend<{
  signUpPage: SignUpPage;
  user: { email: string; password: string; repeatPassword: string } | null;
  homePage: any;
}>({
  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);
    await signUpPage.open();
    await use(signUpPage);
  },

  user: async ({ page, signUpPage }, use) => {
    const asAnonymous = false;

    if (asAnonymous) {
      await use(null);
      return;
    }

    const user = new UserBuilder()
      .withPassword("Password123")
      .withRandomEmail()
      .build();

    await signUpPage.signUpNewUser(user);

    await page.waitForResponse(
      (resp) => resp.url().includes("/graphql") && resp.status() === 200
    );

    await page.context().storageState({ path: "state.json" });

    await use(user);
  },

  homePage: async ({}, use) => {
    await use(undefined);
  },
});
