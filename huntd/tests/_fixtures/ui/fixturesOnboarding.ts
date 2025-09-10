import { test as base } from "@playwright/test";

import { OnboardingProfilePage } from "../../../src/ui/pages/onboarding/OnboardingProfilePage";

export const test = base.extend<{
  onboardingProfilePage: OnboardingProfilePage;
}>({
  onboardingProfilePage: async ({ page }, use) => {
    const onboardingProfilePage = new OnboardingProfilePage(page);
    await use(onboardingProfilePage);
  },
});
