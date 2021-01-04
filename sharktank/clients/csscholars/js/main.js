$(document).ready(function(){
	$("#ajax").load("ajax/login.txt");

	$("#loadLogin").click(function(){
		$("#ajax").load("ajax/login.txt");
	});

	$("#loadSignUp").click(function () {
		$("#ajax").load("ajax/signup.txt");
	});
});
