import { POSITION_IS_REQUIRED_MESSAGE } from "../../../src/ui/constants/onbProfileInfoErrorMessages";
import { DEFAULT_SKILLS } from "../../../src/ui/constants/skills";
import { test } from "../../_fixtures/fixtures";

test.describe("Negative tests for profile screen", () => {
  test("Try to continue without 'Desired position'", async ({
    user,
    candidateRolePage,
  }) => {
    await candidateRolePage.open();
    await candidateRolePage.selectRandomRole();
    await candidateRolePage.selectTechSkills(DEFAULT_SKILLS);
    await candidateRolePage.clickSaveAndContinueBtn();

    await candidateRolePage.assertErrorMessageContainsText(
      candidateRolePage.requiredPosition,
      POSITION_IS_REQUIRED_MESSAGE
    );
  });
});
