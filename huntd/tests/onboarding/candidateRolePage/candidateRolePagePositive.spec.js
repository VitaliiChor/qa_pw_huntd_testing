import { DEFAULT_SKILLS } from "../../../src/ui/constants/skills";
import { test } from "../../_fixtures/fixtures";

test("Positive flow to fill Profile information", async ({
  user,
  candidateRolePage,
}) => {
  await candidateRolePage.open();
  await candidateRolePage.fillPositionField("QA");
  await candidateRolePage.selectRandomRole();

  await candidateRolePage.selectTechSkills(DEFAULT_SKILLS);
  await candidateRolePage.clickSaveAndContinueBtn();
});
