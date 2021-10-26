{
    const loading = $("#loading");
    const transitionDuration = bodyStyles.getPropertyValue("--loading-transition-duration").replace('s', '') * 1000;
    const main = $("#main")

    function endLoading() {
        loading.css("transform", "scale(0)").css("opacity", "0");
        setTimeout(function () {
            loading.remove()
            load()
        }, transitionDuration)

    }
    function load() {
        // todo must stop hovering when loading
        main.css("opacity", "1").css("transform", "scale(1)")
    }

    //debug purposes:
    setTimeout(function () {
        endLoading()
    },1000)
}
