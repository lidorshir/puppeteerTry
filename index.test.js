const puppeteer = require('puppeteer');

describe('Google', () => {
  let page
  let browser
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 10,
      devtools: false
    })
    page = await browser.newPage();
    await page.setDefaultTimeout(40000);
    await page.setDefaultNavigationTimeout(40000);
    await page.goto('https://www.defendsys.com/');
  });

  test('should be titled "title"', async () => {
    const pageTitle = await page.title();
    console.log(pageTitle);
    await expect(page.title()).resolves.toMatch('שירותי מחשוב לעסקים עושים עם Defendsys | שירותי ענן, IT ופתרונות מחשוב לעסק');
  });

  afterAll(async function () {
    await browser.close();
  });
});