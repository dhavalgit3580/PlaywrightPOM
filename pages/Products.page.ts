import { Locator, Page } from "playwright";
import { LoginPage } from "./Login.page";

export class ProductsPage extends LoginPage {
    
readonly page: Page;
readonly addToCartBikeLight: Locator;
readonly shoppingCart: Locator;


constructor(page: Page){

    super(page);
    this.page = page;
    this.addToCartBikeLight=page.locator('#add-to-cart-sauce-labs-bike-light');
    this.shoppingCart=page.locator('#shopping_cart_container');
}

async addBikeLightToCart(){

   await this.addToCartBikeLight.click();
}

async goToShoppingCart(){

    await this.shoppingCart.click();
 }
 


}