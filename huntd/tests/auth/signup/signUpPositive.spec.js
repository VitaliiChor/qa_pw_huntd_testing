import { test } from "../../_fixtures/fixtures";

test("Successful `Sign Up` flow test", async ({
  user,
  signUpPage,
  onboardingProfilePage,
}) => {
  await signUpPage.open();
  await signUpPage.assertTitle();
  await signUpPage.signUpNewUser(user);
  await onboardingProfilePage.assertTitle();
});
