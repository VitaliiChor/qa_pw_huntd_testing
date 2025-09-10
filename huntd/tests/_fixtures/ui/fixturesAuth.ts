import { test as base } from "@playwright/test";
import { SignUpPage } from "../../../src/ui/pages/auth/SignUpPage";
import { UserBuilder } from "../../../src/data/UserBuilder";

export const test = base.extend<{
  signUpPage: SignUpPage;
  user: { email: string; password: string; repeatPassword: string };
  homePage: any;
}>({
  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);
    await signUpPage.open();
    await use(signUpPage);
  },

  user: async ({ signUpPage }, use) => {
    const user = new UserBuilder()
      .withPassword("Password123")
      .withRandomEmail()
      .build();

    await signUpPage.signUpNewUser(user);
    await use(user);
  },

  homePage: async ({}, use) => {
    await use(undefined);
  },
});
