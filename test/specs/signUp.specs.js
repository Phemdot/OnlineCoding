const signUp = require('../pageobjects/signUp');



describe('sign up with valid cred', ()=> {
    
    it('signUp', async ()=> {
        await signUp.open();
        await signUp.clickSignUpButton();
        await signUp.selectBusiness();
        await signUp.clickNextButton();
    }); 
       
    
        
})