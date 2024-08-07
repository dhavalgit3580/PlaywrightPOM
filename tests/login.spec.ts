
import { test, expect } from '../utilities/pomFixtures';
import { Screenshot } from '../utilities/helper';
const logindata= JSON.parse(JSON.stringify(require("../datafactory/login.json")));


test('Successful user login', async ({ LoginObj, page , baseURL, }) => {

    await LoginObj.openApplication(baseURL);

    await LoginObj.login(logindata.username, logindata.password);

    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toContainText('Products');

    //take a screenshot and attach into HTML report
    await Screenshot.takeAndAttchScreenshot(page);    
    
});

test('Unsuccessful userlogin ', async ({ LoginObj, page, baseURL  }) => {

    await LoginObj.openApplication(baseURL);
    await LoginObj.login(logindata.username, '1234');

    await expect(page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toContainText('Epic sadface: Username and password do not match any user in this service');
    
});
