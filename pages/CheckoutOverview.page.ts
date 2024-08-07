import { Locator, Page } from "playwright";
import { CheckoutPage } from "./Checkout.page";

export class CheckoutOverviewPage extends CheckoutPage{

readonly page: Page;
readonly finishButton: Locator;


constructor(page: Page){

    super(page);
    this.page = page;
    this.finishButton=page.locator('#finish');
 

}

async clickFinishButton(){

    await this.finishButton.click();
}


}