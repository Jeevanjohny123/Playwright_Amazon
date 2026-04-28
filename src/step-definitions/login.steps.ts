import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from '../config/env';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

let loginPage: LoginPage;
let homePage:HomePage;
let searchResultsPage:SearchResultsPage;
let productPage:ProductPage;
let cartPage:CartPage;

Given('I open the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate(ENV.baseURL);
});

When('I login as {string} user', async function (userType: string) {
  console.log('User type:', userType);
  console.log('TestData:', this.testData);

  const user = this.testData?.users?.[userType];

  console.log('Resolved user:', user);

  if (!user) {
    throw new Error(`User type "${userType}" not found in YAML`);
  }

  await loginPage.login(user.username, user.password);
  homePage=new HomePage(this.page);

});

When('I search for {string}', async function (product: string) {
    await homePage.searchProduct(product);
    searchResultsPage=new SearchResultsPage(this.page);
});

When('I open the second product from search results', async function () {
    const newPage=await searchResultsPage.openClickSecondProduct();
    this.page=newPage;
    productPage=new ProductPage(this.page);
    // await this.page.waitForLoadState('domcontentloaded');
});

When('I add the product to the cart', async function () {
    await productPage.addToCart();
    cartPage=new CartPage(this.page);
});

When('I remove the product from cart page', async function(){
    await cartPage.deleteItem();
    console.log('Delete method is successful');
});

Then('the cart should be empty', async function(){
    const result=await cartPage.isRemoved();
    expect(result).toBeTruthy();
    console.log('Item removed from cart page');
});

Then('I should see the product in the cart', async function () {
    const result=await cartPage.isProductAdded();;
    // 
    expect(result).toBeTruthy();
    console.log('Product is added to the cart');
});


Then('I should see the inventory page', async function () {
  const result = await loginPage.isInventoryVisible();
//   
  expect(!result).toBeTruthy();
  console.log('Find Jeevan name');
});