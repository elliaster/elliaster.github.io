$(function () {
	var
		// Kitchen Arrows (Scene 1) //
		$first = $(".firstScene"),
			$kALeft = $(".kitchen-leftArrow"),
			$kARight = $(".kitchen-rightArrow"),
			$kABottom = $(".kitchen-bottomArrow"),
		$second = $(".secondScene"),
			$sARight = $(".scene2-rightArrow"),
		$third = $(".thirdScene"),
			$tALeft = $(".scene3-leftArrow"),
		$fourth = $(".fourthScene"),
			$fABottom = $(".scene4-bottomArrow")
	;

	// Kitchen
	$kALeft.click(function () {
		d("Left Kitchen Arrow");
		$first.hide();
		$second.show();
	});

	$kARight.click(function () {
		d("Right Kitchen Arrow");
		$first.hide();
		$third.show();
	});

	$kABottom.click(function () {
		d("Bottom Kitchen Arrow");
		$first.hide();
		$fourth.show();
	});

	// Scene 2
	$sARight.click(function () {
		d("Scene 2 Right Arrow");
		$second.hide();
		$first.show();
	});

	// Scene 3
	$tALeft.click(function () {
		d("Scene 3 Left Arrow");
		$third.hide();
		$first.show();
	});

	// Scene 4
	$fABottom.click(function () {
		d("Scene 4 Bottom Arrow");
		$fourth.hide();
		$first.show();
	});
});
