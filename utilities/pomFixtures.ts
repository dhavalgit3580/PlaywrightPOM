import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';
import { ProductsPage } from '../pages/Products.page';
import { ShoppingCartPage } from '../pages/ShoppingCart.page';
import { CheckoutPage } from '../pages/Checkout.page';
import { CheckoutOverviewPage } from '../pages/CheckoutOverview.page';

// Declare the types of your fixtures.
type MyFixtures = {
    LoginObj: LoginPage;
    ProductsObj: ProductsPage;
    ShoppingCartObj: ShoppingCartPage;
    CheckoutObj: CheckoutPage;
    CheckoutOverviewObj: CheckoutOverviewPage;

  };

export const test = base.extend<MyFixtures>({
    
  
    LoginObj: async ({ page }, use) => {
      await use(new LoginPage(page));
    },

    ProductsObj: async ({ page }, use) => {
        await use(new ProductsPage(page));
      },

      ShoppingCartObj: async ({ page }, use) => {
        await use(new ShoppingCartPage(page));
      },

      CheckoutObj: async ({ page }, use) => {
        await use(new CheckoutPage(page));
      },

      CheckoutOverviewObj: async ({ page }, use) => {
        await use(new CheckoutOverviewPage(page));
      },


  });


  export { expect } from '@playwright/test';