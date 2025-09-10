import { BaseHeader } from "./BaseHeader";

export class ExternalHeader extends BaseHeader {
  #signUpLink;
  #signInLink;
  #forCompaniesLink;
  #forEngineersLink;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#signUpLink = this.page.getByRole("link", { name: "Sign up" });
    this.#signInLink = this.page.getByRole("link", { name: "Sign in" });
    this.#forCompaniesLink = this.page.getByRole("button", {
      name: "For companies",
    });
    this.#forEngineersLink = this.page.getByRole("button", {
      name: "For engineers",
    });
  }

  async clickSignUpLink() {
    await this.step(`Click 'Sign Up' link`, async () => {
      await this.#signUpLink.click();
    });
  }

  async clickSignInLink() {
    await this.step(`Click 'Sign In' link`, async () => {
      await this.#signInLink.click();
    });
  }

  async clickForCompaniesLink() {
    await this.step(`Click 'FOR COMPANIES' link`, async () => {
      await this.#forCompaniesLink.click();
    });
  }

  async clickForEngineersLink() {
    await this.step(`Click 'FOR ENGINEERS' link`, async () => {
      await this.#forEngineersLink.click();
    });
  }
}
