import { test, expect } from "@playwright/test";
import { ExamplePage } from "../pages/example-page";

test.describe("Home Page Navigation", () => {
  let home: ExamplePage;

  test.beforeEach(async ({ page }) => {
    home = new ExamplePage(page);
    await home.goto();
  });

  test("homepage loads correctly", async ({ page }) => {

    await expect(page.getByText("portfolio.")).toBeVisible();
  });

  test("navigation scrolls to About section", async () => {
    await home.goToAbout();
    await home.expectAboutVisible();
  });

  test("navigation scrolls to Resume section", async () => {
    await home.goToResume();
    await home.expectResumeVisible();
  });

  test("navigation scrolls to Contact section", async () => {
    await home.goToContact();
    await home.expectContactVisible();
  });
});