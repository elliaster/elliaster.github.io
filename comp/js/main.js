$(function () {
	var home = $(".navClick").eq(0), about = $(".navClick").eq(1), contact = $(".navClick").eq(2);

	home.click(function () {
		c("Home Clicked!");
	});

	about.click(function () {
		c("About Clicked!");
	});

	contact.click(function () {
		c("Contact Clicked!");
	});

	var c = function (expression) {
		console.log(expression);
	};
});
