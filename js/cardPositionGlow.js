$w = $(window);
var topEdge = 0;
var windowHeight = 0;

var card = $(".testGradient");
var cardPosition = [];
var focusCardIndex = card.length;
var prevFocusCardIndex = card.length;
var glowBackDiv = $(".glowBack");

$w.scroll(function(event) {
    topEdge = $w.scrollTop();
    windowHeight = $w.height();
    windowWidth = $w.width();
    
    if (!is_touch_device() && (windowWidth + getScrollBarWidth()) < 768){

        card.each(function(i,el){
            cardPosition[i]=distFromMidScreen(el).dFromMid;
        });
        focusCardIndex = indexOfSmallest(cardPosition);
        // if (focusCardIndex != prevFocusCardIndex){
        //     glowBackDiv[prevFocusCardIndex].style.opacity = 0;
        //     prevFocusCardIndex = focusCardIndex;
        // }
        if (focusCardIndex < card.length){
            console.log(focusCardIndex);
            if (focusCardIndex != prevFocusCardIndex){
                // console.log("changedIndex");
                if (prevFocusCardIndex != card.length){
                    glowBackDiv[prevFocusCardIndex].style.opacity = 0;
                }
                prevFocusCardIndex = focusCardIndex;
            }
            glowBackDiv[focusCardIndex].style.opacity = 1;
        }
    }

    else{
        glowBackDiv[focusCardIndex].style.opacity = 0;
    }
});

$w.on("resize", function () {
    topEdge = $w.scrollTop();
    windowHeight = $w.height();
    windowWidth = $w.width();
    
    if (!is_touch_device() && (windowWidth + getScrollBarWidth()) < 768){

        card.each(function(i,el){
            cardPosition[i]=distFromMidScreen(el).dFromMid;
        });
        focusCardIndex = indexOfSmallest(cardPosition);
        // if (focusCardIndex != prevFocusCardIndex){
        //     glowBackDiv[prevFocusCardIndex].style.opacity = 0;
        //     prevFocusCardIndex = focusCardIndex;
        // }
        if (focusCardIndex < card.length){
            console.log(focusCardIndex);
            if (focusCardIndex != prevFocusCardIndex){
                // console.log("changedIndex");
                if (prevFocusCardIndex != card.length){
                    glowBackDiv[prevFocusCardIndex].style.opacity = 0;
                }
                prevFocusCardIndex = focusCardIndex;
            }
            glowBackDiv[focusCardIndex].style.opacity = 1;
        }
    }

    else{
        glowBackDiv[focusCardIndex].style.opacity = 0;
    }
}) .resize();



function distFromMidScreen(element) {
    var posInWindow = (getMiddleHeight(element).mh-topEdge)/windowHeight;
    var distanceFromMid = Math.abs(posInWindow - 0.5);

    return {dFromMid: distanceFromMid};
}


function getMiddleHeight(element) {
    var yPosition = 0;
    var elementHeight = element.scrollHeight;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    
    var middleHeight = (yPosition + (elementHeight/2));


    return {mh: middleHeight};
}

function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < a[lowest]){
            lowest = i;
        }
    }
    if (a[i] > 0.35){
        lowest = a.length;
    }

    return lowest;
}

function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function(query) {
      return window.matchMedia(query).matches;
    }
  
    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      return true;
    }
  
    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
  }

  function getScrollBarWidth () {
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
};