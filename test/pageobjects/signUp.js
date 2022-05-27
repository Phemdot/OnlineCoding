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


    get submitButton(){
        return $('[class="#root > div:nth-child(2) > div.sign-up-layout-content > main > div > form > div > button');
    }


    open(){
        super.open('/');
    }

    async clickSignUpButton(){
        await this.signUpLink.click();
    }

    async selectBusiness(){
        await this.selectBusinessOption.click();
    }

    async clickNextButton(){
        await this.nextButton.click();
    }


}

module.exports = new SignUp();