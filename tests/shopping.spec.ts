import { test, expect } from '../utilities/pomFixtures';
const logindata= JSON.parse(JSON.stringify(require("../datafactory/login.json")));
const shoppingdata= JSON.parse(JSON.stringify(require("../datafactory/shopping.json")));



test.describe('Shopping Tests', () => {

test('Validate user can add selected item to shoppingCart', async ( {LoginObj, ProductsObj, ShoppingCartObj, page, baseURL} ) =>{
   
    await LoginObj.openApplication(baseURL);
    await LoginObj.login(logindata.username, logindata.password);

    // wait till dom is loaded
    await page.waitForLoadState('domcontentloaded');

    await ProductsObj.addBikeLightToCart();
    await ProductsObj.goToShoppingCart();

    await ShoppingCartObj.shoppingCartPageTitle.waitFor( {state : "visible"});
    await expect(ShoppingCartObj.shoppingCartPageTitle).toContainText("Your Cart");
    await expect(page.locator('//*[@id="item_0_title_link"]/div')).toContainText("Bike Light");

} )

test('Verify user canorder selected item successfully', async ( {ShoppingCartObj, CheckoutObj, CheckoutOverviewObj, page, baseURL} ) =>{

    //await Login_Page.OpenApplication(baseURL);
    //await Login_Page.Login(logindata.username, logindata.password);
    //await Products_Page.addBikeLightToCart();
    //await Products_Page.GoToShoppingCart();

    await ShoppingCartObj.navigateToShoppingCartAfterAddingItem(baseURL);

    await page.waitForLoadState('domcontentloaded');

    await ShoppingCartObj.shoppingCartPageTitle.waitFor( {state : "visible"});
    await expect(ShoppingCartObj.shoppingCartPageTitle).toContainText("Your Cart");
    await ShoppingCartObj.checkoutItem();

    await CheckoutObj.fillCheckoutInformationAndContinue(shoppingdata.checkoutFirstName, shoppingdata.checkoutLastName, shoppingdata.checkoutPostalcode);

    await CheckoutOverviewObj.clickFinishButton();

    await expect(page.locator('//*[@id="checkout_complete_container"]/h2')).toContainText("Thank you for your order!");

} )

});