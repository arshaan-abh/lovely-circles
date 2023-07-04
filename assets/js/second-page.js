{
    const home = $("#home")
    const button = $("#home .next")
    const animatedButton = $("#home .next-animated")
    const secondPage = $("#second-page")
    const alternativeSecondPage = $(".second-page-alternative")
    const sloganContainer = $("#second-page .content .slogan-container/*, .second-page-alternative .content .slogan-container*/")
    const slogans = $("#second-page .content .slogan/*, .second-page-alternative .content .slogan*/")
    const slogansBackButton = $("#second-page .content .slogan-container .back-button/*, .second-page-alternative .content .back-button*/")
    const sloganDetails = $("#second-page .content .slogan-detail/*, .second-page-alternative .content .slogan-detail*/")
    const sloganDetailDesigns = $("#second-page .content .slogan-detail-design/*, .second-page-alternative .content .slogan-detail-design*/")
    const initialContent = $("#second-page .content, #second-page .wave")
    const content = $("#second-page .content")
    const contentButton = $("#second-page .content .slogan-detail-design.first")
    const backButton = $("#second-page .content .back-button:not(#second-page .content .slogan-container .back-button)")
    const onclickJunk = $("#second-page .content .onclick-junk, #second-page .wave.second")

    function openTheSecondPage() {
        //todo remove the top padding of second-page later
        animatedButton.css("opacity", "1")
        animatedButton.css("z-index", "9999999999")
        animatedButton.css("--scale", "21")
        animatedButton.css("transform", "translateY(-16px)")
        alternativeSecondPage.css("transform", "translateY(calc(-50% + " + button.width() / 2 + "px + 16px)) translateX(calc(-72.5% + " + button.width() / 2 + "px))")
        button.css("overflow", "visible")
        setTimeout(function () {
            secondPage.css("z-index", "9999999999")
            secondPage.css("opacity", "1")

            animatedButton.css("opacity", "0")
            animatedButton.css("z-index", "-1")
            home.css("opacity", "0")
            // todo is this really necessary
            setTimeout(function () {
            }, transitionDuration)
        }, transitionDuration)
    }

    function closeTheSecondPage() {
        home.css("opacity", "")
        animatedButton.css("opacity", "1")
        animatedButton.css("z-index", "9999999999")
        secondPage.css("z-index", "")
        secondPage.css("opacity", "")
        animatedButton.css("--scale", "")
        animatedButton.css("--box-shadow-offset", "-64px")
        animatedButton.css("transform", "")
        button.css("box-shadow", "0 0 0 0px var(--COLOR0)")
        setTimeout(function () {
           animatedButton.css("opacity", "")
            animatedButton.css("z-index", "")
            alternativeSecondPage.css("transform", "")
            button.css("overflow", "")
            button.css("box-shadow", "")
        }, transitionDuration)
    }

    button.click(function () {
        openTheSecondPage()
    })
    backButton.click(function () {
        closeTheSecondPage()
    })


    slogans.click(function (e) {
        showSloganDetail(e.currentTarget)
    })

    contentButton.click(function (e) {
        nextContent(e.currentTarget)
    })


    function showSloganDetail(selectedSlogan) {
        const index = $(selectedSlogan).hasClass("first") ? 0 : $(selectedSlogan).hasClass("second") ? 1 : 2;
        const sloganTexts = $("#second-page .content .fa-container *")
        //todo this doesn't work:
        sloganTexts.css("color", "transparent")
        slogans.css("background", "#CCC")
        slogans.css("box-shadow", "0 0 0 0 #CCC")
        sloganContainer.css("transform", "scale(.8) translateX(-40%)")

        sloganDetails.eq(index).css("z-index", "0")
        sloganDetails.eq(index).css("opacity", "1")
        sloganDetailDesigns.css("z-index", "0")
        sloganDetailDesigns.css("opacity", "1")

        slogansBackButton.css("opacity", "1")
        slogansBackButton.css("z-index", "0")
        slogansBackButton.hover(
            () => {
                slogans.css("background", "#AAA")
                slogans.css("box-shadow", "0 0 0 0 #AAA")
            },
            () => {
                slogans.css("background", "#CCC")
                slogans.css("box-shadow", "0 0 0 0 #CCC")
            })
        setTimeout(function () {
            slogansBackButton.click(function () {
                hideSloganDetail()
            })
        }, transitionDuration)
    }

    function hideSloganDetail() {
        const sloganTexts = $("#second-page .content .fa-container *")
        sloganTexts.css("color", "")
        slogans.css("background", "")
        slogans.css("box-shadow", "")
        sloganContainer.css("transform", "")

        sloganDetails.css("z-index", "-1")
        sloganDetails.css("opacity", "0")
        sloganDetailDesigns.css("z-index", "-1")
        sloganDetailDesigns.css("opacity", "0")

        slogansBackButton.off("mouseenter mouseleave click");
        slogansBackButton.css("opacity", "0")
        setTimeout(function () {
            slogansBackButton.css("z-index", "-1")

        }, transitionDuration)
    }


    function nextContent(selectedContent) {
        r.style.setProperty("--second-page-next-content-left","calc(-50% - " + content.width() / 2 + "px)");
        secondPage.addClass("next-content")
        onclickJunk.click(function (e) {
            previousContent(e.currentTarget)
        })
    }

    function previousContent(selectedContent) {
        onclickJunk.css("background", "")
        secondPage.removeClass("next-content")
    }

}
