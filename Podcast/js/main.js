$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true
	});
	$.fn.fullpage.setAllowScrolling(true);
	$('.beefup').beefup({
		openSingle: true,
		animation: 'fade',
		showSpeed: 5000,
		openSpeed: 100,
		closeSpeed: 000
	});

	$(".arrowMain").click(function () {
		$.fn.fullpage.moveSectionDown();
	});

	$("#arrowFourth").click(function () {
		$.fn.fullpage.moveTo(1);
	});

	$("#playBtn").click(function () {
		location.href = "Game/";
	});

});
