{
    const button = $("#main .CIRCLE1");
    const home = $("#home")
    const main = $("#main")

    function goHome() {
        home.css("top", "0").css("bottom", "0")
        main.css("top", "-100%")
    }

    button.click(function () {
        goHome()
    })
}
