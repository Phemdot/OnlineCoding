const signUp = require('../pageobjects/signUp');



describe('Sign Up', ()=> {
    
    it('signUp with valid cred', async ()=> {
        await signUp.open();
        await signUp.clickSignUpButton();
        await signUp.selectBusiness();
        await signUp.clickNextButton();
        await signUp.fillInFirstName("Mark");
        await signUp.fillInLastName("Jerry");
        await signUp.fillInEmailAddress("markjerry@yarn.org");
        await signUp.fillInPassword("markpasS#1");
        await signUp.indicateReferralSource();
    }); 
       
    
        
})