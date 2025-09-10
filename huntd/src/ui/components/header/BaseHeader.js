import { BaseComponent } from "../BaseComponent";

export class BaseHeader extends BaseComponent {
  #huntdLogo;

  constructor(page, userId = 0) {
    super(page, userId);
    this.#huntdLogo = this.page
      .getByRole("banner")
      .getByRole("link", { name: "Huntd" });
  }

  async clickHuntdLogo() {
    await this.step(`Click 'Huntd' logo in the page header`, async () => {
      await this.#huntdLogo.click();
    });
  }
}
