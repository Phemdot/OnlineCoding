//This navigate to base




module.exports = class Base{
    open (path) {
        browser.maximizeWindow();
        return browser.url(`https://app.deel.training${path}`);
        
    }
}