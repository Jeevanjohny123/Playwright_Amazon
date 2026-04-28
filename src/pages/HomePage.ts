import { Page, Locator } from 'playwright';

export class HomePage {
    private searchBox:Locator;
    private searchBtn:Locator;
  constructor(private page: Page) {
    this.searchBox = page.locator('xpath=//input[@id="twotabsearchtextbox"]');
    this.searchBtn = page.locator('//input[@id="nav-search-submit-button"]');
  }

  async searchProduct(product:string){
    await this.searchBox.fill(product);
    await this.searchBtn.click();
  }

}