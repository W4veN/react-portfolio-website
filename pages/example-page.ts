import { Page, type Locator, expect } from "@playwright/test";

export class ExamplePage {
    readonly page: Page;

    readonly aboutLink: Locator;
    readonly resumeLink: Locator;
    readonly contactLink: Locator;

    readonly aboutSection: Locator;
    readonly resumeSection: Locator;
    readonly contactSection: Locator;

    constructor(page: Page) {
        this.page = page;

        this.aboutLink = page.getByRole("link", { name: "About" });
        this.resumeLink = page.getByRole("link", { name: "Resume" });
        this.contactLink = page.getByRole("link", { name: "Contact" });

        this.aboutSection = page.locator("#about");
        this.resumeSection = page.locator("#resume");
        this.contactSection = page.locator("#contact");
    }

    async goto() {
        await this.page.goto("/");
    }

    async goToAbout() {
        await this.aboutLink.click();
    }

    async goToResume() {
        await this.resumeLink.click();
    }

    async goToContact() {
        await this.contactLink.click();
    }

    async expectAboutVisible() {
        await expect(this.aboutSection).toBeVisible();
    }

    async expectResumeVisible() {
        await expect(this.resumeSection).toBeVisible();
    }

    async expectContactVisible() {
        await expect(this.contactSection).toBeVisible();
    }
}