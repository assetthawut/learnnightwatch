module.exports = {
    'Demo test Google': function(browser){
        browser
            .url('http://www.google.co.th')
            .waitForElementVisible('body',1000)
            .end();
    }
}