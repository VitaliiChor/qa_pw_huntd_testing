import { faker } from "@faker-js/faker";
import { test, expect } from "../_fixtures/fixtures";

test.describe("Huntd User on Choose-Profile screen", () => {
  test("User can click Candidate button", async ({
    onboardingProfilePage,
    user,
  }) => {
    await onboardingProfilePage.clickCandidateBtn();
  });

  test("User can click Recruiter button", async ({
    onboardingProfilePage,
    user,
  }) => {
    await onboardingProfilePage.clickRecruiterBtn();
  });

  test("User can click Feedback button", async ({
    onboardingProfilePage,
    user,
  }) => {
    await onboardingProfilePage.clickFeedbackBtn();
  });

  test("User can leave feedback on the Choose-profile screen", async ({
    onboardingProfilePage,
    user,
  }) => {
    await onboardingProfilePage.userCanLeaveFeedback(faker.lorem.sentence());
  });
});
