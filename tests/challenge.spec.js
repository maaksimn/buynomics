import { test, expect } from "@playwright/test";

test("Search for galaxy samsung", async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.getByRole("button", { name: "Alle akzeptieren" }).click();
  await page.getByLabel("Suche", { exact: true }).fill("samsung galaxy");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/samsung\+galaxy/);
  await page.getByRole("link", { name: "Galaxy Smartphone & Handy" }).click();
  await expect(page).toHaveURL("https://www.samsung.com/de/smartphones/");
});
