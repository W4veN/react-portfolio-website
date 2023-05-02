class LandingPage {
  constructor() {
    this.navbarSelector = ".nav";
    this.aboutSelector = "#about";
    this.resumeSelector = "#resume";
    this.contactSelector = "#contact";
  }
  open() {
    return browser.url(`http://localhost:3000`);
  }
  clickAbout() {
    $(this.aboutSelector).click();
  }
  clickResume() {
    $(this.resumeSelector).click();
  }
  clickContact() {
    $(this.contactSelector).click();
  }
}

module.exports = new LandingPage();
