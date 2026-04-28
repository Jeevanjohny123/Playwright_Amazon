import { Locator, Page } from 'playwright';

export class LoginPage {
    private signInHov:Locator;
    private signInBtn:Locator;  
    private usernameInput:Locator;
    private continueBtn:Locator;
    private passwordInput:Locator;
    private loginButton:Locator;
    private name:Locator;  
  constructor(private page: Page) {
    this.signInHov = page.locator('xpath=//button[@aria-label="Expand Account and Lists"]');
    this.signInBtn = page.locator('xpath=//span[text()="Sign in"]');
    this.usernameInput = page.locator('#ap_email_login');
    this.continueBtn = page.locator('.a-button-input');
    this.passwordInput = page.locator('#ap_password');
    this.loginButton = page.locator('#signInSubmit');
    this.name = page.locator('xpath=//span[text()="Hello, Jeevan"]');
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.signInHov.hover();
    await this.signInBtn.click();
    await this.page.waitForTimeout(3000);
    await this.usernameInput.fill(username);
    await this.continueBtn.click();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForTimeout(3000);

  }

  async isInventoryVisible(): Promise<boolean> {
    return await this.name.isVisible();
  }
}