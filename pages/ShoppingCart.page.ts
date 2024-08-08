import { Locator, Page } from "playwright";
import { ProductsPage } from "./Products.page";
const logindata= JSON.parse(JSON.stringify(require("../datafactory/login.json")));

export class ShoppingCartPage extends ProductsPage {

readonly page: Page;
readonly shoppingCartPageTitle: Locator;
readonly checkoutButton: Locator;


constructor(page: Page){

    super(page);
    this.page = page;
    this.shoppingCartPageTitle=page.getByText('Your Cart');
    this.checkoutButton=page.locator('#checkout');

}

async checkoutItem(){

await this.checkoutButton.click();
}

async navigateToShoppingCartAfterAddingItem(baseURL)
{

   // const Login_Page = new loginpage(this.page);
    //const Products_Page = new productspage(this.page);

    await this.openApplication(baseURL);
    await this.login(logindata.username, logindata.password);

    await this.page.waitForLoadState('domcontentloaded');

    await this.addBikeLightToCart();
    await this.goToShoppingCart();

}


}