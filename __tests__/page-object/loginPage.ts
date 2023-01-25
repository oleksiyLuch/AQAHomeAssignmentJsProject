import { Locator, Page, BrowserContext } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  readonly page: Page;
  readonly emailAddressField: Locator;
  readonly passwordField: Locator;
  readonly submitLoginFormButton: Locator;
  readonly loginButton: Locator;
  readonly signUpButton: Locator;
  readonly successNotification: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.loginButton = page.locator('[aid="header.button.login"]');
    this.emailAddressField = page.locator('[id="login_email_input"]');
    this.passwordField = page.locator('[id="login_password_input"]');
    this.successNotification = page.locator('[class="success flex-row"]');
    this.submitLoginFormButton = page.locator(
      '[aid="modal.signin.button.submit"]'
    );
  }

  clickOnSignUpButton = async () => {
    await this.signUpButton.click();
  };

  clickOnLoginButton = async () => {
    await this.loginButton.click({ force: true });
  };

  enterEmail = async (email: string) => {
    await this.emailAddressField.fill(email);
  };

  enterPassword = async (password: string) => {
    await this.passwordField.fill(password);
  };

  clickSubmitLoginFormButton = async () => {
    await this.submitLoginFormButton.click();
  };

  fillLoginForm = async (userEmail: string, password: string) => {
    await this.enterEmail(userEmail);
    await this.enterPassword(password);
  };
}
