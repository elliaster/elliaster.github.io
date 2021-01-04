$(function () {
    var cover = $(".cover");
    const data = $("body").attr("data");
    cover.animate({
        width: "45vw"
    }, 1000);
    setTimeout(function () {
        cover.animate({
            width: "50vw"
        }, 700);
    }, 100);
    $("p").hide(0).delay(700).fadeIn(500);
});