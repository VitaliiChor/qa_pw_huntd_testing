import { testStep, expect } from "../../common/helpers/pw";

export class BasePage {
  _url;
  _title;

  constructor(page, userId = 0) {
    this.page = page;
    this.userId = userId;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun, this.userId);
  }

  _pageName() {
    return this.constructor.name.replace("Page", "");
  }

  url() {
    if (this._url) {
      return this._url;
    } else {
      throw Error(`The property '_url' must be implemented`);
    }
  }

  async open(directUrl = undefined) {
    await this.step(`Open ${this._pageName()} page`, async () => {
      const url = directUrl ? directUrl : this.url();
      await this.page.goto(url);
    });
  }

  getCurrentPageUrl() {
    return this.page.url();
  }

  async assertOpened() {
    await this.step(`Assert ${this._pageName()} page is opened`, async () => {
      await this.page.waitForURL(this.url());
      await expect(this.page).toHaveURL(this.url());
    });
  }

  async assertTitle(expectedTitle = this._title) {
    if (!expectedTitle) {
      throw Error(
        `Title is not provided. Define '_title' in the page class or pass it explicitly.`
      );
    }

    await this.step(
      `Assert ${this._pageName()} page title is "${expectedTitle}"`,
      async () => {
        await expect(this.page).toHaveTitle(expectedTitle);
      }
    );
  }

  async assertErrorMessageContainsText(errorLocator, expectedText) {
    await expect(errorLocator).toContainText(expectedText);
  }
}
