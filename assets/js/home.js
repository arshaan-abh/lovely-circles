{
    const button = $("#main .CIRCLE1");
    const home = $("#home")
    const main = $("#main")
    const backButton = $("#home .circle.back")
    const contentButton = $("#home .next-content")
    const firstContent = $("#home .content.first:not(.second-page-alternative *)")
    const secondContent = $("#home .content.second:not(.second-page-alternative *)")
    const profiles = $("#home .content.second .profile")

    function goHome() {
        home.css("top", "0").css("bottom", "0")
        main.css("top", "-100%")
    }

    function goBack() {
        home.css("top", "100%").css("bottom", "-100%")
        main.css("top", "0")
    }

    function nextContent() {
        contentButton.off("click")
        firstContent.css("opacity", "0");
        secondContent.css("right", "0")
        secondContent.css("opacity", "1")
        contentButton.css("transform", " translateX(50%) translateY(-50%) rotate(-180deg)")
        setTimeout(function () {
            contentButton.click(function () {
                previousContent()
            })
        }, transitionDuration)
    }

    function previousContent() {
        contentButton.off("click")
        firstContent.css("opacity", "1");
        secondContent.css("right", "-50%")
        secondContent.css("opacity", "0")
        contentButton.css("transform", " translateX(50%) translateY(-50%) rotate(0deg)")
        setTimeout(function () {
            contentButton.click(function () {
                nextContent()
            })
        }, transitionDuration)
    }


    function showProfileDetail(selectedProfile) {
        profiles.off("click")
        $(selectedProfile).children(".profile-button").css("background", "transparent")
        $(selectedProfile).children(".profile-button").css("color", "transparent")
        $(selectedProfile).css("transform", "translateX(calc(-" + $(secondContent).children(".profile").index(selectedProfile) + " * 100%))")
        $(selectedProfile).siblings(".profile").not(selectedProfile).css("opacity", "0")
        $(secondContent).find(".text").eq($(secondContent).children(".profile").index(selectedProfile)).css("opacity", "1")
        setTimeout(function () {
            $(selectedProfile).children(".profile-button").html("<i class=\"fas fa-eye-slash\"></i>")
            $(selectedProfile).children(".profile-button").css("background", "")
            $(selectedProfile).children(".profile-button").css("color", "")
            $(selectedProfile).siblings(".profile").not(selectedProfile).css("z-index", "0")
            $(selectedProfile).click(function (e) {
                hideProfileDetail(e.currentTarget)
            })
        }, transitionDuration)
    }

    //todo z-index when profiles are moving

    function hideProfileDetail(selectedProfile) {
        profiles.off("click")
        $(selectedProfile).children(".profile-button").css("background", "transparent")
        $(selectedProfile).children(".profile-button").css("color", "transparent")
        $(selectedProfile).css("transform", "")
        profiles.css("opacity", "1")
        profiles.css("z-index", "1")
        secondContent.find(".text").css("opacity", "0")
        setTimeout(function () {
            $(selectedProfile).children(".profile-button").html("<i class=\"fas fa-eye\"></i>")
            $(selectedProfile).children(".profile-button").css("background", "")
            $(selectedProfile).children(".profile-button").css("color", "")
            profiles.click(function (e) {
                showProfileDetail(e.currentTarget)
            })
        }, transitionDuration)
    }

    profiles.click(function (e) {
        showProfileDetail(e.currentTarget)
    })
    contentButton.click(function () {
        nextContent()
    })
    button.click(function () {
        goHome()
    })
    backButton.click(function () {
        goBack()
    })
}
