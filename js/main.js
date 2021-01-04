// variable declaration
const
	menu = $(".menu"),
	data = $(".menu").attr("data"),
	right = $(".right")
	;

function close() {
	if ($(".right").attr("data") === "load") {
		right.addClass("translate");
		$(".right").attr("data", "unload");
		$(".title").animate({ left: "1.5vw" }, 600)
		$(".title span").animate({ left: "1vw" }, 400);
		$(".right").animate({ transform: "translateX(40vw)" }, 800);
		$(".screen").css({ "visibility": "visible" }).animate({ opacity: 0.1 });
		$(".title h1").zIndex(5);
	} else if ($(".right").attr("data") === "unload") {
		right.removeClass("translate");
		$(".screen").animate({ opacity: 0 }, 300)
		setTimeout(function () { $(".screen").css({ "visibility": "hidden" }) }, 300);
		$(".right").attr("data", "load");
		$(".title").animate({ left: "20vw" }, 800);
		$(".title span").animate({ left: "15vw" }, 400);
	}
}

$(".screen").click(function () { close(); }); // Closes menu on click of screen
menu.click(function run() { close(); }); // Closes menu on click of menu icon

const links = {
	linkedin: "https://www.linkedin.com/in/mohammed-h-8043b913a/",
	github: "https://github.com/elliaster",
	twitter: "https://twitter.com/Elliaster_"
};

$(".links").click(function () {
	var index = $(".links").index(this);
	if (index == 0) {
		location.href = links.github
	} else if (index == 1) {
		location.href = links.linkedin
	} else if (index == 2) {
		location.href = links.twitter
	}
});

$(".links").hover(function () {
	var index = $(".links").index(this), text = $("#sample-text");
	if (index == 0) {
		text.text("GitHub")
	} else if (index == 1) {
		text.text("LinkedIn")
	} else if (index == 2) {
		text.text("Twitter")
	}
});

// Enables visibility of iframe for any of the buttons pressed
$("#pc").click(function () {
	$("#view").css({ "visibility": "visible" });
	close();
});

$("#tw").click(function () {
	$("#view").css({ "visibility": "visible" });
	close();
});

$("#gmc").click(function () {
	$("#view").css({ "visibility": "visible" });
	close();
});

$("#anim").click(function () {
	$("#view").css({ "visibility": "visible" });
	close();
});

$("#vd").click(function () {
	$("#view").css({ "visibility": "visible" });
	close();
});

$("#ld").click(function () {
	$("#view").css({ "visibility": "visible" });
	close();
});

$(".view-cont h1").click(function () {
	$("#view").css({ "visibility": "hidden" });
});