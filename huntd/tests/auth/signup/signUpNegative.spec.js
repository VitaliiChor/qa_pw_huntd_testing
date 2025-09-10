import { test } from "../../_fixtures/fixtures";
import {
  REQUIRED_EMAIL_MESSAGE,
  REQUIRED_PASSWORD_MESSAGE,
} from "../../../src/ui/constants/authErrorMessages";

test.describe("Sign up negative tests", () => {
  test("Sign up with empty email", async ({ user, signUpPage }) => {
    await signUpPage.open();
    await signUpPage.fillPassword(user.password);
    await signUpPage.fillRepeatPassword(user.password);
    await signUpPage.clickSignUpButton();

    await signUpPage.assertErrorMessageContainsText(
      signUpPage.requiredEmail,
      REQUIRED_EMAIL_MESSAGE
    );
  });

  test("Sign up with empty password", async ({ user, signUpPage }) => {
    await signUpPage.open();
    await signUpPage.fillEmail(user.email);
    await signUpPage.fillRepeatPassword(user.password);
    await signUpPage.clickSignUpButton();

    await signUpPage.assertErrorMessageContainsText(
      signUpPage.requiredPassword,
      REQUIRED_PASSWORD_MESSAGE
    );
  });
});
