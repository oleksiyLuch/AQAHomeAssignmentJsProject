import { Locator, Page, BrowserContext } from "@playwright/test";

export class EditorPage {
  readonly page: Page;
  readonly nameField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameField = page.locator('[id="details__name_input"]');
  }
}
