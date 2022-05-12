$(function () {
    const link = $(".linkName");
    const box = $(".box")

    box.animate({
        width: "0%"
    }, 1000);
    $(".botbox").animate({
        width: "0%"
    }, 1000) 
    setTimeout(function () {
        box.css({
            width: "50%",
            height: "0px"
        });
        $(".botbox").css({
            width: "50%",
            height: "0px"
        });
    }, 1000);

    function transition () {
        box.animate({
            height: "100vh"
        }, 1000);
        $(".botbox").animate({
            height: "100vh"
        }, 1000);
        setTimeout(function () {
            location.href = "index.html"
        },1000);
    }

    $("#home").click(function () {
        transition();
        setTimeout(function () {
            location.href = "index.html"
        },1000);
    });
    $("#portfolio").click(function () {
        transition();
        setTimeout(function () {
            location.href = "portfolio/index.html"
        },1000);
    });
    $("#contact").click(function () {
        transition();
        setTimeout(function () {
            location.href = "contact/index.html"
        },1000);
    });
    $("#about").click(function () {
        transition();
        setTimeout(function () {
            location.href = "about/index.html"
        },1000);
    });
})