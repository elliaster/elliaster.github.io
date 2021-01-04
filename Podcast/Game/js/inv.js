$(function () {
	var
		$inv = $(".inventory"),
		$box = $(".box"),
		$com = $("#playerCom"),

		$sel1 = $("#select1"),
		$sel2 = $("#select2"),
		$sel3 = $("#select3"),
		$key = $(".kitchen-key"),
		$keyset,
		$door = $(".third-door"),
		$paper = $(".second-paper"),
		$paperset,
		$enter = $(".third-door-enter"),
		$third = $(".thirdScene")
	;

	$(".kitchen-key").click(function () {
		$sel1.append("<img src='img/key.png' id='keyImg'>");
		$("#kitchen-kitchenScene").attr("src", "backdrops/kitchen_no_key.png");
		$key.remove();
		$keyset = true;
		$o("A Key, this could be useful.");
		setTimeout(function () {
			$o("");
		}, 2000);
	});

	$door.click(function () {
		$o("I need to find a key.");
		setTimeout(function () {
			$o("");
		}, 2000);
	});

	$sel1.click(function () {
		$o("I'll use the key on...");
		setTimeout(function () {
			$o("");
		}, 2000);
		$door.click(function () {
			if($keyset == true) {
				console.log("Entered");
				$o("The door opened!");
				setTimeout(function () {
					$o("");
				}, 2000);
				$("#hall").attr("src", "backdrops/hall_door_open.png");
				$door.remove();
				$("<div class='third-door-enter'></div>").appendTo(".thirdScene");
			} else {
				console.log("You need a key");
				$o("I need to find the key.");
				setTimeout(function () {
					$o("");
				}, 2000);
			}
		});
	});

	$enter.click(function () {
		$third.hide();
		this.remove();
	});

	$paper.click(function () {
		$sel2.append("<img src='img/key.png' id='paperImg'>");
		$("#backyardScene").attr("src", "backdrops/backyard_no_paper.png");
		$paper.remove();
		$paperset = true;
		$o("A piece of paper... out here?");
		setTimeout(function () {
			$o("");
		}, 2000);
	});

	$sel2.click(function () {
		if ($paperset == true) {
			$o("I have a paper");
			setTimeout(function () {
				$o("");
			}, 2000);
		}
	});

	$o = function (expression) {
		$com.text(expression)
	}
});


// $(".crowbar").on("click", function () {
// 		crowbar = true;
// 		$("<img src='img/crowbar.png' class='crowImage'>").appendTo("#select2");
// 		o("You got a Crowbar!");
// });
