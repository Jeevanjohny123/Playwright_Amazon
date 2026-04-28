import { Page, Locator } from 'playwright';

export class SearchResultsPage {
    private secondProduct:Locator;
    constructor(private page: Page) {
        this.secondProduct=page.locator('xpath=(//div[contains(@class,"aok-relative s-image")])[2]');

    }
    async openClickSecondProduct(){
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.secondProduct.click()
        ]);
        await newPage.waitForLoadState();
        return newPage;
    }
    

}