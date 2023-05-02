const LandingPage = require('../pageobjects/landing-page')

describe('My Portfolio application', () => {
    beforeEach( () => {
        LandingPage.open()
    })
    it('should have navbar available', async () => {
        expect($(LandingPage.navbarSelector)).toBeDisplayed();
    });
    it('should navigate to about section', async () => {
        LandingPage.clickAbout();
        expect($('.container about__container')).toBeDisplayed();
    });
    it('should navigate to resume section', async () => {
        LandingPage.clickResume();
        expect($('.container resume__container')).toBeDisplayed();
    });
    it('should navigate to contact section', async () => {
        LandingPage.clickContact();
        expect($('.container contact__container')).toBeDisplayed();
    });
})


