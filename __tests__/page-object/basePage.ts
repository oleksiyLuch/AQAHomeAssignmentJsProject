import { expect, Locator, Page } from "@playwright/test";
import { EditorPage } from "./editorPage";

export class BasePage {
  readonly page: Page;
  readonly editor: EditorPage;
  readonly overLayModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editor = new EditorPage(this.page);
    this.overLayModal = page.locator('[id="anon-overlay"]');
  }

  closeOverLayModal = async () => {
    await this.editor.nameField.fill("someText");
    await expect(this.overLayModal).toBeHidden();
  };
}
