module.exports = function() {
 
    this.Given(/I should work/, function(done) {
        browser.get('http://m.lafourchette.com/fr_FR')
	    .then(function() {
	        return browser.sleep(5000);
	    })
	    .then(function() {
                return element(by.model('search.term')).sendKeys('paris');
	    })
	    .then(function() {
	        return browser.sleep(5000);
	    })
	    .then(done);
    });


};

