import { test, expect, chromium } from "@playwright/test";

test("Search for galaxy samsung", async () => {
  // Create a browser instance
  const browser = await chromium.launch();

  // Create a new page
  const page = await browser.newPage();

  // Open URL in current page
  await page.goto("https://www.google.com");

  // Find a button with the name "Alle akzeptieren", click on it to accept terms
  await page.getByRole("button", { name: "Alle akzeptieren" }).click();

  // Find a search field, fill "samsung galaxy" in it.
  await page.getByLabel("Suche", { exact: true }).fill("samsung galaxy");

  // Click on "Enter" to perform search
  await page.keyboard.press("Enter");

  // Check if the search results link has "samsung galaxy" value
  await expect(page).toHaveURL(/search\?q=samsung\+galaxy/);

  // Click on the first result
  await page.getByRole("link", { name: "Galaxy Smartphone & Handy" }).click();

  //Check the URL
  await expect(page).toHaveURL("https://www.samsung.com/de/smartphones/");

  // Close the browser instance
  await browser.close();
});
