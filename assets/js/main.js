const bodyStyles = window.getComputedStyle(document.body);
const transitionDuration = bodyStyles.getPropertyValue("--transition-duration").replace('s', '') * 1000;
//todo a system for getting css vars
////////////////////////////////// main
const button = $("#main .CIRCLE2");
const menu = $("#menu")
const circle = $("#menu .CIRCLE3")
const li = $("#menu li")
// todo vars should be in functions?
const isWidthBigger = menu.outerWidth() > menu.outerHeight();
const body = $("body");

function getScrollBarWidth () {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild (inner);

    document.body.appendChild (outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild (outer);

    return (w1 - w2);
};
// todo change style and remove border-radius: 8px
function openMenu() {
    button.off("click")
    button.css("transform", "rotate(180deg)")
    circle.css("width", isWidthBigger ? menu.outerWidth() * 1 : menu.outerHeight() * 1)/*.css("height", "100%")*/.css("border-radius", "8px")
    setTimeout(function () {
        menu.css("background", "var(--COLOR2)")
        circle.css("background", "transparent")
        circle.css("z-index", "-1")
        li.css("color", "var(--COLOR0)")
        // setTimeout(function () {

            button.click(function () {
                closeMenu()
            })
        // }, transitionDuration)
    }, transitionDuration)
}

// todo check the texts fading. its awful!
function closeMenu() {
    button.off("click")
    li.css("color", "transparent")
    setTimeout(function () {
        button.css("transform", "rotate(0deg)")
        circle.css("z-index", "0")
        circle.css("background", "var(--COLOR2)")
        menu.css("background", "transparent")
        circle.css("width", "0%")
        circle.css("border-radius", "50%")
        // circle.css("height", "0%")
        setTimeout(function () {
            button.click(function () {
                openMenu()
            })
        }, transitionDuration)
    }, transitionDuration)
}

button.click(function () {
    openMenu()
})
