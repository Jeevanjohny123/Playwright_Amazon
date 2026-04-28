import { Page, Locator } from 'playwright';

export class CartPage{
    private cartCount:Locator;
    private removeItem:Locator;
    private emptyCartMsg:Locator;
    constructor(private page: Page) {
        this.cartCount=page.locator('#sc-subtotal-label-buybox');
        this.removeItem=page.locator('xpath=//input[@value="Delete"]').first();
        this.emptyCartMsg=page.locator('//span[contains(text(),"(0 items)")]');
    }
    async isProductAdded():Promise<boolean>{
        console.log('Checking if product is added to cart');
        await this.page.waitForTimeout(3000);
        return await this.cartCount.isVisible();

    }
    
    async deleteItem(){
        await this.removeItem.waitFor({state:'visible'});
        console.log('Inside delete method');
        await this.removeItem.click();
        await this.page.waitForTimeout(3000);
    }
    
    async isRemoved():Promise<boolean>{
        return await this.emptyCartMsg.isVisible();
    }

}