const bodyStyles = window.getComputedStyle(document.body);
const transitionDuration = bodyStyles.getPropertyValue("--transition-duration").replace('s', '') * 1000;
//todo a system for getting css vars
////////////////////////////////// main
const button = $("#main .CIRCLE2");
const menu = $("#menu")
const circle = $("#menu .CIRCLE3")
const li = $("#menu li")

function openMenu() {
    button.off("click")
    button.css("transform", "rotate(180deg)")
    circle.css("width", "100%").css("height", "100%").css("border-radius", "8px")
    setTimeout(function () {
        menu.css("background", "var(--COLOR2)")
        circle.css("background", "transparent")
        setTimeout(function () {
            circle.css("z-index", "-1")
        }, transitionDuration)
        li.css("color", "var(--COLOR0)")
        button.click(function () {
            closeMenu()
        })
    }, transitionDuration)
}

// todo check the texts fading. its awful!
function closeMenu() {
    button.off("click")
    button.css("transform", "rotate(0deg)")
    li.css("color", "transparent")
    circle.css("z-index", "0")
    circle.css("background", "var(--COLOR2)")
    menu.css("background", "transparent")
    circle.css("width", "0%")
    circle.css("height", "0%")
    setTimeout(function () {
        button.click(function () {
            openMenu()
        })
    }, transitionDuration)
}

button.click(function () {
    openMenu()
})
