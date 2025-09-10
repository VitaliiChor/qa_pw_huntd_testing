import { mergeTests } from "@playwright/test";
import { test as authTest } from "./ui/fixturesAuth";
import { test as onboardingTest } from "./ui/fixturesOnboarding";

export const test = mergeTests(authTest, onboardingTest);
export { expect } from "@playwright/test";
