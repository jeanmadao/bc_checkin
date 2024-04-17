import puppeteer from 'puppeteer';
import 'dotenv/config'

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    // Navigate the page to a URL
    // await page.goto('https://developer.chrome.com/');
    await page.goto('https://moodle.becode.org/mod/attendance/view.php?id=311');

    // Set screen size
    await page.setViewport({width: 1080, height: 1024});

    // Login, don't forget to setup your USERNAME and PASSWORD environment variables
    await page.type('#username', process.env.USERNAME);
    await page.type('#password', process.env.PASSWORD);
    await page.click('#loginbtn')

    //TODO: Click check-in/check-out button

    await browser.close();
})();
