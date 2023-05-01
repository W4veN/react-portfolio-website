class LandingPage {
  constructor() {
    this.navbarSelector = ".nav";
  }
  open() {
    return browser.url(`https://localhost:3001/`);
  }
}

module.exports = new LandingPage();
