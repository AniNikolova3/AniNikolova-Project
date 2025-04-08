import { test, expect, Page } from "@playwright/test";
import path from "path";

interface Results {
  username: string;
  password: string;
  comments: string;
  dropdownValue: string;
}
const results: Results = {
  username: "testUser",
  password: "testPass",
  comments: "Test Text Area field",
  dropdownValue: "dd2",
};

const fillFields = async (page: Page, resultsObj: Results) => {
  //locate and fill username
  await test.step("Enter username", async () => {
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill(resultsObj.username);
    await expect(usernameInput).toHaveValue(resultsObj.username);
  });

  //locate and fill password
  await test.step("Enter Password", async () => {
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill(resultsObj.password);
    await expect(passwordInput).toHaveValue(resultsObj.password);
  });

  //locate and chech checkbbox
  await test.step("Check Checkbox", async () => {
    const checkboxEl = page.locator("xpath=//input[@value='cb2']");
    await expect(checkboxEl).toBeVisible();
    await checkboxEl.check();
    await expect(checkboxEl).toBeChecked();
  });

  //locate and fill comments
  await test.step("Fill comments field", async () => {
    const TextAreaInput = page.locator("xpath=//textarea[@name='comments']");
    await expect(TextAreaInput).toBeVisible();
    await TextAreaInput.fill(resultsObj.comments);
    await expect(TextAreaInput).toHaveValue(resultsObj.comments);
  });

  //locate and check radio buttons
  await test.step("Check Radio button", async () => {
    const radioItem = page.locator("xpath=//input[@value='rd2']");
    await expect(radioItem).toBeVisible();
    await radioItem.check();
    await expect(radioItem).toBeChecked();
  });

  //locate and select dropdown
  await test.step("Select dropdown", async () => {
    const dropdown = page.locator("xpath=//select[@name='dropdown']");
    await expect(dropdown).toBeVisible();
    await dropdown.selectOption(resultsObj.dropdownValue);
    await expect(dropdown).toHaveValue(resultsObj.dropdownValue);
  });

  //locate and upload file
  await test.step("Upload file", async () => {
    const uploadBtn = page.locator("xpath=//input[@type='file']");
    const filePath = path.resolve(__dirname, "./test.txt");
    await expect(uploadBtn).toBeVisible();
    await uploadBtn.setInputFiles(filePath);
  });
};

test.describe("Test Basic HTML Form", () => {
  test.beforeEach("Open the URL", async ({ page }) => {
    const html_form_url = process.env.BASE_HTML_FORM_URL as string;
    await page.goto(html_form_url);
  });

  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Reset Form", async ({ page }) => {
    const cancelBtn = page.locator('xpath=//input[@type="reset"]');
    await expect(cancelBtn).toBeVisible();
    await fillFields(page, results);
    await cancelBtn.click();

    await expect(page.locator("xpath=//input[@name='username']")).toHaveValue(
      ""
    );
    await expect(page.locator("xpath=//input[@value='cb3']")).toBeChecked();
  });

  test("Submit Form", async ({ page }) => {
    const submitButton = page.locator("xpath=//input[@type='submit']");
    await expect(submitButton).toBeVisible();
    await fillFields(page, results);
    await submitButton.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );

    const usernameVal = page.locator('xpath=//li[@id="_valueusername"]');
    await expect(usernameVal).toHaveText(results.username);
    const dropdownVal = page.locator('xpath=//li[@id="_valuedropdown"]');
    await expect(dropdownVal).toHaveText(results.dropdownValue);
  });

  // test("Test username field", async ({ page }) => {
  //   const usernameInput = page.locator("xpath=//input[@name='username']");
  //   await expect(usernameInput).toBeVisible();
  //   await usernameInput.fill("testUser");
  //   await expect(usernameInput).toHaveValue("testUser");
  // });

  // test("Test checkbox selection", async ({ page }) => {
  //   const checkboxEl = page.locator("xpath=//input[@value='cb2']");
  //   await expect(checkboxEl).toBeVisible();
  //   await checkboxEl.check();
  //   await expect(checkboxEl).toBeChecked();
  // });

  // test("Select dropdown option", async ({ page }) => {
  //    const dropdown = page.locator("xpath=//select[@name='dropdown']");
  //   await expect(dropdown).toBeVisible();
  //    await dropdown.selectOption("dd2");
  //   await expect(dropdown).toHaveValue("dd2");
  // });

  // test("Test password field", async ({ page }) => {
  //   const passwordInput = page.locator("xpath=//input[@name='password']");
  //   await expect(passwordInput).toBeVisible();
  //   await passwordInput.fill("testPass");
  //   await expect(passwordInput).toHaveValue("testPass");
  // });

  // test("Test Text Area field", async ({ page }) => {
  //   const TextAreaInput = page.locator("xpath=//textarea[@name='comments']");
  //   await expect(TextAreaInput).toBeVisible();
  //   await TextAreaInput.fill("Test Text Area field");
  //   await expect(TextAreaInput).toHaveValue("Test Text Area field");
  // });

  // test("Test radio items selection", async ({ page }) => {
  //   const radioItem = page.locator("xpath=//input[@value='rd2']");
  //   await expect(radioItem).toBeVisible();
  //   await radioItem.check();
  //   await expect(radioItem).toBeChecked();
  // });

  // test("Submit the form", async ({ page }) => {
  //   const submitButton = page.locator("xpath=//input[@value='submit']");
  //   await expect(submitButton).toBeVisible();
  //   await submitButton.click();
  // });

  // test("Upload file", async ({ page }) => {
  //   const uploadBtn = page.locator("xpath=//input[@type='file']");
  //   const filePath = path.resolve(__dirname, "./test.txt");
  //   await expect(uploadBtn).toBeVisible();
  //   await uploadBtn.setInputFiles(filePath);
  // });
});
