class LandingPage {
  constructor() {
    this.navbarSelector = ".nav";
  }
  open() {
    return browser.url(`http://localhost:3000`);
  }
}

module.exports = new LandingPage();
