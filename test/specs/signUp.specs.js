const signUp = require('../pageobjects/signUp');



describe('sign up with valid cred', ()=> {
    
    it('signUp', async ()=> {
        await signUp.open();
        await signUp.clickSignUpButton();
        await signUp.selectBusiness();
        await signUp.clickNextButton();
        await signUp.fillInFirstName("Mark");
        await signUp.fillInLastName("Jerry");
        await signUp.fillInEmailAddress("markjerry@yarn.org");
        await signUp.fillInPassword("markpasS#1");
    }); 
       
    
        
})