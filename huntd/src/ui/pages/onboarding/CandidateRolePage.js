import { expect } from "allure-playwright";
import { BasePage } from "../BasePage";

export class CandidateRolePage extends BasePage {
  constructor(page) {
    super(page);
    this._url = "/profile/candidate";
    this._title = "Candidate";
    this.desiredPositionField = page.getByRole("textbox", {
      name: "Desired position",
    });
    this.positionError = page.getByText("Position is required");

    this.desiredRolesField = page.locator("form").getByRole("img").first();
    this.addRolesBtn = page.locator("form path").first();
    this.rolesError = page.getByText("Position is required");

    this.coreTechSkills = page.getByText("Type and select strongest");

    this.saveAndContinueBtn = page.getByRole("button", {
      name: "Save and continue",
    });
  }

  async fillPositionField(position) {
    expect(this.desiredPositionField).toBeVisible();
    await this.desiredPositionField.fill(position);
  }

  async selectRandomRole() {
    const roles = [
      "PM",
      "DEVOPS",
      "FULL STACK",
      "FRONTEND",
      "MOBILE",
      "BACKEND",
      "QA",
      "UI/UX DESIGN",
    ];

    const randomIndex = Math.floor(Math.random() * roles.length);
    const role = roles[randomIndex];

    await this.addRolesBtn.click();
    await this.page.getByText(role, { exact: true }).click();
    await this.page.click("body", { position: { x: 0, y: 0 } });

    return role;
  }

  async selectTechSkills(skills) {
    await this.coreTechSkills.click();

    for (const skill of skills) {
      await this.page.keyboard.type(skill, { delay: 100 });

      await this.page.waitForTimeout(200);
      await this.page.keyboard.press("Enter");
    }
  }

  async clickSaveAndContinueBtn() {
    await this.saveAndContinueBtn.click();
  }

  get requiredPosition() {
    return this.positionError;
  }

  get atListOneRole() {
    return this.rolesError;
  }

  get atListFiveSkills() {
    return this.techSkillsError;
  }
}
