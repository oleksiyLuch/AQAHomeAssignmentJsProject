import { expect, test } from '../fixtures/baseFixture'
import { credentials } from '../lib/credentions'

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.closeOverLayModal()
  })

  test.only(`Check that the user can be login [WISESTAMP-1]`, async ({ loginPage, baseURL }) => {
    await loginPage.clickOnLoginButton()
    await loginPage.fillLoginForm(credentials.email, credentials.password)
    await loginPage.clickSubmitLoginFormButton()

    await expect(loginPage.successNotification).toBeVisible()
    await expect(loginPage.page).toHaveURL(`${baseURL}my-signatures`)
  })

  test(`Check that the can't be registered with the alredy registered credentions [WISESTAMP-1]`, async ({
    loginPage,
    baseURL
  }) => {
    await loginPage.clickOnLoginButton()
    await loginPage.fillLoginForm(credentials.email, credentials.password)
    await loginPage.clickSubmitLoginFormButton()

    await expect(loginPage.successNotification).toBeVisible()
    await expect(loginPage.page).toHaveURL(`${baseURL}my-signatures`)
  })
})
