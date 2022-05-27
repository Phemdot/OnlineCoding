const Base = require('./baseTest');

class SignUp extends Base{
// getter method for browser prop

    get signUpLink() {
        return $('[class="button login-signup-link"]');
    }

    get selectBusinessOption() {
        return $('[class="MuiButtonBase-root MuiToggleButton-root Mui-selected MuiToggleButton-sizeLarge MuiToggleButton-success MuiToggleButtonGroup-grouped MuiToggleButtonGroup-groupedHorizontal css-1q6gkrd"]');
    }

    get nextButton(){
        return $('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root  css-1je55d8"]');
    }

    get firstName(){
        return $('[name="firstName"]');
    }

    get lastName(){
        return $('[name="lastName"]');
    }

    get email(){
        return $('[name="email"]');
    }

    get password(){
        return $('[name="new-password"]');
    }

    get referralSource(){
        return $('[class="MuiFormControl-root MuiFormControl-fullWidth css-jxqpv3"]');
    }


    get submitButton(){
        return $('[class="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root  css-1je55d8"]');
    }


    open(){
        super.open('/');
    }

    async clickSignUpButton(){
        await this.signUpLink.click();
        await expect(browser).toHaveUrl('https://app.deel.training/signup'); //verify user is on signup page
    }

    async selectBusiness(){
        await this.selectBusinessOption.click();
    }

    async clickNextButton(){
        await this.nextButton.click();
    }

    async fillInFirstName(firstname){
        await this.firstName.setValue(firstname);
    }

    async fillInLastName(lastname){
        await this.lastName.setValue(lastname);
    }

    async fillInEmailAddress(email){
        await this.email.setValue(email);
    }

    async fillInPassword(password){
        await this.password.setValue(password);
        
    }

    async indicateReferralSource(){
        await this.referralSource.click();
        await browser.keys("Enter");
        await expect(this.submitButton).toBeClickable(); //verify user can click sign up button
    }




}

module.exports = new SignUp();