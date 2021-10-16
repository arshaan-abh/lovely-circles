function endLoading() {
    const loading = $("#loading");
    const transitionDuration = bodyStyles.getPropertyValue("--loading-transition-duration").replace('s', '') * 1000;
    loading.css("transform", "scale(0)").css("opacity", "0");
    setTimeout(function () {
        loading.remove()
        setTimeout(function () {
            load()
        },1000)
    }, transitionDuration)
}

function load() {
    const CIRCLE0 = $("#main > .CIRCLE0");
    CIRCLE0.css("width", "200%").css("border-radius","0")
}
