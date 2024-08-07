import { type Locator, type Page } from '@playwright/test';


export class LoginPage{

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator; 
    
  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.locator('#password');
    this.loginButton = page.locator('//*[@id="login-button"]');

  }

async openApplication(baseURL) {

await this.page.goto(baseURL);

}

async enterUsername(Username:string) {

  await this.username.waitFor({state: 'visible'});
  await this.username.fill(Username);
  
  }

  async enterPassword(Password: string) {

    await this.password.fill(Password);
    
  }

    async clickLoginButton() {

      await this.loginButton.click();
      
      }

async login(username:string, password: string){

  await this.enterUsername(username)
  await this.enterPassword(password)
  await this.clickLoginButton();
  
}

}