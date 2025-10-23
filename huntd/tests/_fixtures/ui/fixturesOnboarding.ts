import { test as base } from "@playwright/test";

import { OnboardingProfilePage } from "../../../src/ui/pages/onboarding/OnboardingProfilePage";
import { CandidateRolePage } from "../../../src/ui/pages/onboarding/CandidateRolePage";

export const test = base.extend<{
  onboardingProfilePage: OnboardingProfilePage;
  candidateRolePage: CandidateRolePage;
}>({
  onboardingProfilePage: async ({ page }, use) => {
    const onboardingProfilePage = new OnboardingProfilePage(page);
    await use(onboardingProfilePage);
  },
  candidateRolePage: async ({ page }, use) => {
    const candidateRolePage = new CandidateRolePage(page);
    await use(candidateRolePage);
  },
});
