$(function () {
	var
		$play = $("#play"),
		$htp = $("#howtoplay"),
		$cont = $(".container"),
		$start = $(".startScreen"),
		$com = $("#playerCom"),
		$inv = $(".inventory"),
		$player = $("#playerInfo"),
		$howtoplay = $(".howtoplay"),

		// Kitchen Arrows (Scene 1) //
		$first = $(".firstScene"),
		$second = $(".secondScene"),
		$third = $(".thirdScene"),
		$fourth = $(".fourthScene"),

		key = $(".kitchen-key"),
		windowObj = $(".kitchen-window"),
		sink = $(".kitchen-sink"),
		stove = $(".kitchen-stove"),
		plates = $(".kitchen-plates"),
		flowers = $(".kitchen-flowers"),
		clock = $(".kitchen-clock"),
		$back = $("#htpBack")
	;

	$first.hide();
	$second.hide();
	$third.hide();
	$fourth.hide();
	$howtoplay.hide();
	$inv.hide();
	$player.hide();

	windowObj.click(function () {
		d("The window was left open...wonder why","Window Clicked!");
		$o("The window was left open...wonder why");
		setTimeout(function () {
			$o("");
		}, 2000);
	});

	sink.click(function () {
		d("This sink is so full of plates.","Sink Clicked!");
		$o("This sink is so full of plates.");
		setTimeout(function () {
			$o("");
		}, 2000);
	});

	stove.click(function () {
		d("There is nothing in either this pot nor pan.", "Stove Clicked!");
		$o("There is nothing in either this pot nor pan.");
		setTimeout(function () {
			$o("");
		}, 2000);
	});

	plates.click(function () {
		d("Plates left empty.", "Plates Clicked!");
		$o("Plates left empty?");
		setTimeout(function () {
			$o("");
		}, 2000);
	});

	flowers.click(function () {
		d("Wilted Flowers, they haven't been watered in a long time it seems.","Flowers Clicked!");
		$o("Wilted Flowers, they haven't been watered in a long time it seems.");
		setTimeout(function () {
			$o("");
		}, 2000);
	});

	clock.click(function () {
		d("This clock is broken, the hands aren't moving.", "Clock Clicked!");
		$o("This clock is broken, the hands aren't moving.");
		setTimeout(function () {
			$o("");
		}, 2000);
	});

	$play.click(function () {
		d("Play Pressed!");
		$start.hide();
		$first.show();
		$player.show();
		$inv.show();
	});

	$htp.click(function () {
		d("How to Play Pressed!");
		$start.hide();
		$howtoplay.show();
	});

	$back.click(function () {
		$howtoplay.hide();
		$start.show();
	});

	d = function (expression) {
		console.log(expression);
	}

	$o = function (expression) {
		$com.text(expression)
	}
});
