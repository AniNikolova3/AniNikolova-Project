import { test, expect } from "@playwright/test";

test.describe("Playwright home page testing", () => {
  test.beforeEach("Open the URL", async ({ page }) => {
    await page.goto(
    "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
     );
  });

  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Test username field", async ({ page }) => {
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill("testUser");
    await expect(usernameInput).toHaveValue("testUser");
  });

  test("Test checkbox selection", async ({ page }) => {
    const checkboxEl = page.locator("xpath=//input[@value='cb2']");
    await expect(checkboxEl).toBeVisible();
    await checkboxEl.check();
    await expect(checkboxEl).toBeChecked();
  });

  test("Select dropdown option", async ({ page }) => {
    const dropdown = page.locator("xpath=//select[@name='dropdown']");
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption("dd2");
    await expect(dropdown).toHaveValue("dd2");
  });

  test("Test password field", async ({ page }) => {
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("testPass");
    await expect(passwordInput).toHaveValue("testPass");
  });

  test("Test Text Area field", async ({ page }) => {
    const TextAreaInput = page.locator("xpath=//textarea[@name='comments']");
    await expect(TextAreaInput).toBeVisible();
    await TextAreaInput.fill("Test Text Area field");
    await expect(TextAreaInput).toHaveValue("Test Text Area field");
  });

  test("Test radio items selection", async ({ page }) => {
    const radioItem = page.locator("xpath=//input[@value='rd2']");
    await expect(radioItem).toBeVisible();
    await radioItem.check();
    await expect(radioItem).toBeChecked();
  });

  test("Submit the form", async ({ page }) => {
    const submitButton = page.locator("xpath=//input[@value='submit']");
    await expect(submitButton).toBeVisible();
    await submitButton.click();
  });

});
