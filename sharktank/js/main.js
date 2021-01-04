$(document).ready(function () {
	$("#clientOne").on("mouseover", function () {
		$("#content").load("content.txt #clientOneContentDiv");
	});

	$("#clientOne").on("click", function () {
		location.href = "clients/csscholars/"
	});

	$("#clientTwo").on("mouseover", function () {
		$("#content").load("content.txt #clientTwoContentDiv")
	})

	$("#clientTwo").on("click", function () {
		location.href = "clients/sandwich/"
	});

	$("#clientOne").on("mouseleave", function () {
		$("#content").empty();
	});

	$("#clientTwo").on("mouseleave", function () {
		$("#content").empty();
	});

	$("#product").on("click", function () {
		location.href = "product.html";
	});
});
