import { Page, Locator } from 'playwright';
export class ProductPage {
    private addToCartBtn:Locator;
    private cartBtn:Locator;
    constructor(private page: Page) {
        
        this.addToCartBtn=page.locator('#add-to-cart-button:visible');
        this.cartBtn=page.locator('//span[contains(text(),"Cart")]/preceding-sibling::input').first();

    }
    async addToCart(){
        // await this.page.waitForLoadState('domcontentloaded');
        // await this.addToCartBtn.waitFor({ state: 'visible' });
        // await this.addToCartBtn.scrollIntoViewIfNeeded();
        
    await this.addToCartBtn.click();
    await this.page.waitForTimeout(3000);
  await this.cartBtn.click();
        // await this.addToCartBtn.click();
    }
}