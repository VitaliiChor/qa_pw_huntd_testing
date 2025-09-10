import { expect } from "allure-playwright";
import { BasePage } from "../BasePage";

export class OnboardingProfilePage extends BasePage {
  constructor(page) {
    super(page);
    this._url = "/choose-profile";
    this._title = "Choose-profile";
    this.chooseProfileTitle = page.getByRole("heading", { name: "I am..." });
    this.candidateBtn = page.getByRole("link", {
      name: "Candidate hunting for",
    });
    this.recruiterBtn = page.getByRole("link", {
      name: "Recruiter hiring talent",
    });
    this.feedbackBtn = page.getByRole("button", { name: "?" });
    this.feedbackPopup = page.getByText("Question / feedback?Got a");
    this.feedbackField = page.getByRole("textbox", {
      name: "Your question / honest",
    });
    this.sendFeedBackBtn = page.getByRole("button", { name: "Send" });
  }

  async clickCandidateBtn() {
    await this.candidateBtn.click();
  }

  async clickRecruiterBtn() {
    await this.recruiterBtn.click();
  }

  async clickFeedbackBtn() {
    await expect(this.chooseProfileTitle).toBeVisible();
    await this.feedbackBtn.click();
    expect(this.feedbackPopup).toBeVisible();
  }

  async userCanLeaveFeedback(feedback) {
    await expect(this.chooseProfileTitle).toBeVisible();
    await this.feedbackBtn.click();
    await expect(this.feedbackPopup).toBeVisible();
    await this.feedbackField.fill(feedback);
    await Promise.all([
      this.page.waitForResponse(
        (resp) => resp.url().includes("/graphql") && resp.status() === 200
      ),
      this.sendFeedBackBtn.click(),
    ]);
    await expect(this.feedbackPopup).toBeHidden();
  }

  async;
}
