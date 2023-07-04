$(".text-alternative").width($("#home .content").width())
// $("#home .content .title").css("top","100px")
var r = document.querySelector(':root');
$("#home > .content.first .text").css("padding-top", $("#home .title").height() / 2 + "px")
$(".text-alternative").css("padding-top", $("#home .title").height() / 2 + "px")
// $("#home .next-animated").css("width", $("#home .next").width())
$(".second-page-alternative").css("width", $("#second-page").width() + "px")
$(".second-page-alternative").css("height", $("#second-page").height() + "px")
$(".second-page-alternative").css("transform", "translateY(calc(-50% + " + $("#home .next").width() / 2 + "px)) translateX(calc(-72.5% + " + $("#home .next").width() / 2 + "px))")
$("#junk").css("width", $("#home .next").width() + "px").css("height", $("#home .next").width() + "px")
$(window).resize(function () {
    $(".second-page-alternative").css("width", $("#second-page").width() + "px")
    $(".second-page-alternative").css("height", $("#second-page").height() + "px")
    $(".second-page-alternative").css("transform", "translateY(calc(-50% + " + $("#home .next").width() / 2 + "px + 16px)) translateX(calc(-72.5% + " + $("#home .next").width() / 2 + "px ))")
})
//todo disable zoom
//todo on scroll change
r.style.setProperty("--second-page-background-position-x", $("body").width() / 2 + "px");

$(document).ready(function () {
    const bgImg = $("#second-page .background-image");
    const hasScroll = bgImg[0].scrollHeight > bgImg[0].clientHeight;
    const sss = bgImg.width() + (hasScroll ? getScrollBarWidth() * 2 : 0);
    bgImg.css("--width", sss.toString().split(".")[0] + "px")
})

window.FontAwesomeConfig = {
    searchPseudoElements: true
}


$(window).on("load", function () {
    const inTitleWidth = $("#home .title").width() / 2
    r.style.setProperty("--title-container-right", "calc(50% - " + inTitleWidth + "px)");
});
