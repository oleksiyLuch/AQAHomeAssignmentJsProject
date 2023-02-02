import { expect, Locator, Page } from '@playwright/test'
import { EditorPage } from './editorPage'

export class BasePage {
  readonly page: Page
  readonly editor: EditorPage
  readonly overLayModal: Locator
  readonly closeNotificationButton: Locator

  constructor(page: Page) {
    this.page = page
    this.editor = new EditorPage(this.page)
    this.overLayModal = page.locator('[id="anon-overlay"]')
    this.closeNotificationButton = page.locator('[aid="details_rich_fields.div.close"]')
  }

  closeOverLayModal = async () => {
    await this.closeNotificationButton.click()
    await expect(this.overLayModal).toBeHidden()
  }
}
