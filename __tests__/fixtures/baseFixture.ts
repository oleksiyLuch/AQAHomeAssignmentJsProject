import { test as base, expect, chromium, Page } from '@playwright/test'
import { BasePage } from '../page-object/basePage'
import { EditorPage } from '../page-object/editorPage'
import { LoginPage } from '../page-object/loginPage'

type ixsFixtures = {
  loginPage: LoginPage
  editorPage: EditorPage
  basePage: BasePage
}

export const test = base.extend<ixsFixtures>({
  page: async ({ page, baseURL }, use) => {
    await page.goto('https://webapp.wisestamp.com/')
    await use(page)
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },

  basePage: async ({ page }, use) => {
    await use(new BasePage(page))
  },

  editorPage: async ({ page }, use) => {
    await use(new EditorPage(page))
  }
})
export { expect }
