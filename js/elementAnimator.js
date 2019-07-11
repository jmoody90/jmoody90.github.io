var anElem = $(".animElement")

anElem.on('classChange', function() {
    console.log(this);
    
    if($(this).hasClass("newlySeen")){
        if($(this).hasClass("fadeRight")){
            $(this).css("margin-left", -360);
            $(this).animate({
                opacity: 1,
                marginLeft: -96
            }, 600);
        }
        if($(this).hasClass("fadeUp")){
            var heightDisp = -160;
            $(this).animate({
                bottom: heightDisp
            }, 0);
            $(this).animate({
                opacity: 1,
                bottom: 0
            }, 600);
        }
    $(this).removeClass("newlySeen");
    $(this).addClass("alreadySeen");
    }
});

