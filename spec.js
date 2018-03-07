describe("Go to the homepage", function(){
	browser.ignoreSynchronization=true;

	it("Go to the homepage", function(){
		browser.get("http://www.abc.net.au/news/");
		console.log("Homepage open successfully");
	});

	it("Go to Pendants Page", function(){
		var necklaces = element(by.css('#header > ul > li:nth-child(3) > a'));
		necklaces.click();
		browser.sleep(5000);
		console.log("From the homepage go to the Necklaces page");

	});

});