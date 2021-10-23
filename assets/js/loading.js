function endLoading() {
    const loading = $("#loading");
    const transitionDuration = bodyStyles.getPropertyValue("--loading-transition-duration").replace('s', '') * 1000;
    loading.css("transform", "scale(0)").css("opacity", "0");
    setTimeout(function () {
        loading.remove()
        load()
    }, transitionDuration)
}

function load() {
    // todo must stop hovering when loading
    const main = $("#main")
    main.css("opacity", "1").css("transform", "scale(1)")
}

//debug purposes:
endLoading()
