
import { Page } from 'playwright';
import { test } from '../utilities/pomFixtures';
import fs from 'fs';
import path from 'path';

export class Screenshot {

static async  takeAndAttchScreenshot (page: Page) {

    const screenshotsDir = './test-results/screenshots';
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const testName = test.info().title.replace(/\s+/g, '-').toLowerCase();
    const screenshotPath = path.join(screenshotsDir, `screenshot-${testName}-${timestamp}.png`);
    const screenshot = await page.screenshot({ path: screenshotPath });
    await test.info().attach('screenshot', { body: screenshot, contentType: 'image/png' });

}


}