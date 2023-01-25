// @ts-check
const { test, expect, webkit } = require('@playwright/test');


const mochidukoUrl = 'https://motttey.github.io/'
test('has title', async ({ page }) => {
  await page.goto(mochidukoUrl);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/モチヅ庫/);
});

test('screenshot', async () => {
  const browser = await webkit.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('http://localhost:3000/')

  // Expect a title "to contain" a substring.
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot()
});
