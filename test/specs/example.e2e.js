const LandingPage = require('../pageobjects/landing-page')

describe('My Portfolio application', () => {
    beforeEach( () => {
        LandingPage.open()
    })
    it('should have navbar available', async () => {
        expect($(LandingPage.navbarSelector)).toBeDisplayed();
    })
})


