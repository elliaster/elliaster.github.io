$(document).ready(function () {
	$("#labHamburger").on("click", function () {
		$(".labSideNav").css('width', '10vw');
		$("#pp-nav").css('display', 'none');
	});
	$("#projectHamburger").on("click", function () {
		$(".projectSideNav").css('width', '10vw');
		$("#pp-nav").css('display', 'none');
	});
	$(".close").on("click", function () {
		$(".labSideNav").css('width', '0px');
		$(".projectSideNav").css('width', '0px');
		$("#pp-nav").css('display', 'block');
	});
});
