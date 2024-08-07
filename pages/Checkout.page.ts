import { Locator, Page } from "playwright";
import { ShoppingCartPage } from "./ShoppingCart.page";

export class CheckoutPage extends ShoppingCartPage {

readonly page: Page;
readonly firstName: Locator;
readonly lastName: Locator;
readonly postalCode: Locator;
readonly continueButton: Locator;


constructor(page: Page){

    super(page);
    this.page = page;
    this.firstName=page.locator('#first-name');
    this.lastName=page.locator('#last-name');
    this.postalCode=page.locator('#postal-code');
    this.continueButton=page.locator('#continue');

}

async fillCheckoutInformationAndContinue(firstname: string,lastname: string, postalcode: string){

    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.postalCode.fill(postalcode);
      
    await this.continueButton.click();
}


}