import { test, expect, chromium } from "@playwright/test";

test("Search for galaxy samsung", async () => {
  // Create a browser instance
  const browser = await chromium.launch();

  // Create a new page
  const page = await browser.newPage();

  // Open URL in current page
  await page.goto("https://www.google.com");

  //Check if there is a consent
  if (await page.locator(".dbsFrd").isVisible()) {
    await page.locator("#L2AGLb").click();
  }

  await page
    .locator("xpath=(//textarea[@class='gLFyf'])")
    .fill("samsung galaxy");

  // Click on "Enter" to perform search
  await page.keyboard.press("Enter");

  // Check if the search results link has "samsung galaxy" value
  await expect(page).toHaveURL(/search\?q=samsung\+galaxy/);

  // Click on the first result
  await page.getByRole("link", { name: "Galaxy Smartphone & Handy" }).click();
  //await page.locator("xpath=(//div[@class='dURPMd']/div)[1]").click();

  //Check the URL
  await expect(page).toHaveURL("https://www.samsung.com/de/smartphones/");

  //
  await expect(page.locator("#component-id").first()).toBeVisible();

  // Close the browser instance
  await browser.close();
});
