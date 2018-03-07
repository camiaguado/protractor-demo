describe("Demo login APP", function(){

	var email, password, btnSignin;
	beforeEach(function(){
		browser.get('http://ornatejewels.com/login');
		email = element(by.css('body > div.signup-main > div > div.in.sign-in.clearfix > form > div:nth-child(1) > input'));
		password = element(by.css('body > div.signup-main > div > div.in.sign-in.clearfix > form > div:nth-child(2) > input'));
		btnSignin = element(by.css('body > div.signup-main > div > div.in.sign-in.clearfix > form > button'));
	});

	it('should display a popUp for an unsuccessful login', function(){
		browser.setLocation('#/login');
		email.sendKeys('exaple1');
		password.sendKeys('fail');
		btnSignin.click().then(function(){
			var error = element(by.css('body > div.signup-main > div > div.alert.alert-danger'));
			expect(error.isDisplayed()).toBeTruthy();
		});
	});

});