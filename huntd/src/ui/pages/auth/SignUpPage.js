import { expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SignUpPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this._url = "/sign-up";
    this._title = "Sign-up";

    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", {
      name: "Password",
      exact: true,
    });
    this.repeatPasswordInput = page.getByRole("textbox", {
      name: "Repeat password",
    });
    this.createAccountBtn = page.getByRole("button", {
      name: "Create account",
    });

    this.requiredEmailMessage = page.getByText("Email is required");
    this.requiredPasswordMessage = page.getByText("Password is required");
    this.requiredRepeatPasswordMessage = page.getByText(
      "Please repeat your password"
    );
    this.wrongEmailMessage = page.getByText("Wrong email");
    this.matchPasswordMessage = page.getByText("Please make sure your");
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async fillRepeatPassword(password) {
    await this.repeatPasswordInput.fill(password);
  }

  async fillSignUpForm(user) {
    await this.fillEmail(user.email);
    await this.fillPassword(user.password);
    await this.fillRepeatPassword(user.repeatPassword);
  }

  async clickSignUpButton() {
    await this.createAccountBtn.click();
  }

  async signUpNewUser(user) {
    await this.fillSignUpForm(user);
    await this.clickSignUpButton();
  }

  get requiredEmail() {
    return this.requiredEmailMessage;
  }

  get requiredPassword() {
    return this.requiredPasswordMessage;
  }

  get repeatPassword() {
    return this.requiredRepeatPasswordMessage;
  }

  get wrongEmail() {
    return this.wrongEmailMessage;
  }

  get matchPassword() {
    return this.matchPasswordMessage;
  }

  async assertErrorMessageContainsText(errorLocator, expectedText) {
    await expect(errorLocator).toContainText(expectedText);
  }

  async clearForm() {
    await this.emailInput.fill("");
    await this.passwordInput.fill("");
    await this.repeatPasswordInput.fill("");
  }
}
