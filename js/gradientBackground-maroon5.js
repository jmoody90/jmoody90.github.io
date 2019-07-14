var colorfulContent = $(".contentUnit:nth-of-type(odd)");
var colorfulSubhead = $(".contentUnit:nth-of-type(odd) .subHead");
var cc1 = colorfulContent[0];
var cc2 = colorfulContent[1];
var cc3 = 0;
var cs4 = 0;
var cs5 = 0;
var cs6 = 0;
var cs3height = 0;
var cs4height = 0;
var cs5height = 0;
var cs6height = 0;

var progressTop1 = 0;
var progressBottom1 = 0;
var progressTop2 = 0;
var progressBottom2 = 0;
var progressTop3 = 0;
var progressBottom3 = 0;
var progressTop4 = 0;
var progressBottom4 = 0;
var progressTop5 = 0;
var progressBottom5 = 0;
var progressTop6 = 0;
var progressBottom6 = 0;

var topEdge = 0;
var bottomEdge = 0;

var nProgTop1 = 0;
var nProgBottom1 = 0;
var nProgTop2 = 0;
var nProgBottom2 = 0;
var nProgTop3 = 0;
var nProgBottom3 = 0;
var nProgTop4 = 0;
var nProgBottom4 = 0;
var nProgTop5 = 0;
var nProgBottom5 = 0;
var nProgTop6 = 0;
var nProgBottom6 = 0;

$(window).scroll(function(event) {
    $w = $(window);
    topEdge = $w.scrollTop();
    bottomEdge = topEdge + $w.height();

    
    cs3pos = getPosition(colorfulSubhead[0]).y;
    cs4pos = getPosition(colorfulSubhead[1]).y;
    cs5pos = getPosition(colorfulSubhead[2]).y;
    cs6pos = getPosition(colorfulSubhead[3]).y;

    cs3height = colorfulSubhead[0].offsetHeight;
    cs4height = colorfulSubhead[1].offsetHeight;
    cs5height = colorfulSubhead[2].offsetHeight;
    cs6height = colorfulSubhead[3].offsetHeight;
    

    progressTop1 = (topEdge - cc1.offsetTop)/ (topEdge - bottomEdge);
    progressBottom1 = (topEdge - (cc1.offsetTop + cc1.offsetHeight ))/ (topEdge - bottomEdge);
    nProgTop1 = Math.min(Math.max(progressTop1, 0), 1)
    nProgBottom1 = Math.min(Math.max(progressBottom1, 0), 1)
    progressTop2 = (topEdge - cc2.offsetTop)/ (topEdge - bottomEdge);
    progressBottom2 = (topEdge - (cc2.offsetTop + cc2.offsetHeight ))/ (topEdge - bottomEdge);
    nProgTop2 = Math.min(Math.max(progressTop2, 0), 1)
    nProgBottom2 = Math.min(Math.max(progressBottom2, 0), 1)
    progressTop3 = (topEdge - cs3pos)/ (topEdge - bottomEdge);
    progressBottom3 = (topEdge - (cs3pos + cs3height ))/ (topEdge - bottomEdge);
    nProgTop3 = Math.min(Math.max(progressTop3, 0), 1)
    nProgBottom3 = Math.min(Math.max(progressBottom3, 0), 1)
    progressTop4 = (topEdge - cs4pos)/ (topEdge - bottomEdge);
    progressBottom4 = (topEdge - (cs4pos + cs4height ))/ (topEdge - bottomEdge);
    nProgTop4 = Math.min(Math.max(progressTop4, 0), 1)
    nProgBottom4 = Math.min(Math.max(progressBottom4, 0), 1)
    progressTop5 = (topEdge - cs5pos)/ (topEdge - bottomEdge);
    progressBottom5 = (topEdge - (cs5pos + cs5height ))/ (topEdge - bottomEdge);
    nProgTop5 = Math.min(Math.max(progressTop5, 0), 1)
    nProgBottom5 = Math.min(Math.max(progressBottom5, 0), 1)
    progressTop6 = (topEdge - cs6pos)/ (topEdge - bottomEdge);
    progressBottom6 = (topEdge - (cs6pos + cs6height ))/ (topEdge - bottomEdge);
    nProgTop6 = Math.min(Math.max(progressTop6, 0), 1)
    nProgBottom6 = Math.min(Math.max(progressBottom6, 0), 1)



    
    

    // DEBUG*****************************
    // $("h2").replaceWith("<h2>3a = " + Math.round(nProgTop3*100) + "   3b = " + Math.round(nProgBottom3*100) + "</h2>");
    

    colorfulContent[0].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom1*255)) + ", " + (255 - (nProgBottom1*255)) + ", " + "255), rgb(" + (0 + (nProgTop1*255)) + ", " + (255 - (nProgTop1*255)) + ", " + "255))";
    colorfulContent[1].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom2*255)) + ", " + (255 - (nProgBottom2*255)) + ", " + "255), rgb(" + (0 + (nProgTop2*255)) + ", " + (255 - (nProgTop2*255)) + ", " + "255))";
    if ($(window).width() >= 752) {
        colorfulSubhead[0].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom3*255)) + ", " + (255 - (nProgBottom3*255)) + ", " + "255), rgb(" + (0 + (nProgTop3*255)) + ", " + (255 - (nProgTop3*255)) + ", " + "255))";
    }
    else {
        colorfulSubhead[0].style.background = "rgb(255, 255, 255)";
    }
    colorfulSubhead[1].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom4*255)) + ", " + (255 - (nProgBottom4*255)) + ", " + "255), rgb(" + (0 + (nProgTop4*255)) + ", " + (255 - (nProgTop4*255)) + ", " + "255))";
    if ($(window).width() >= 752) {
        colorfulSubhead[2].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom5*255)) + ", " + (255 - (nProgBottom5*255)) + ", " + "255), rgb(" + (0 + (nProgTop5*255)) + ", " + (255 - (nProgTop5*255)) + ", " + "255))";
    }
    else {
        colorfulSubhead[2].style.background = "rgb(255, 255, 255)";
    }
    colorfulSubhead[3].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom6*255)) + ", " + (255 - (nProgBottom6*255)) + ", " + "255), rgb(" + (0 + (nProgTop6*255)) + ", " + (255 - (nProgTop6*255)) + ", " + "255))";
});

$(window).on("resize", function () {
    $w = $(window);
    topEdge = $w.scrollTop();
    bottomEdge = topEdge + $w.height();

    cs3pos = getPosition(colorfulSubhead[0]).y;
    cs4pos = getPosition(colorfulSubhead[1]).y;
    cs5pos = getPosition(colorfulSubhead[2]).y;
    cs6pos = getPosition(colorfulSubhead[3]).y;

    cs3height = colorfulSubhead[0].offsetHeight;
    cs4height = colorfulSubhead[1].offsetHeight;
    cs5height = colorfulSubhead[2].offsetHeight;
    cs6height = colorfulSubhead[3].offsetHeight;
    

    progressTop1 = (topEdge - cc1.offsetTop)/ (topEdge - bottomEdge);
    progressBottom1 = (topEdge - (cc1.offsetTop + cc1.offsetHeight ))/ (topEdge - bottomEdge);
    nProgTop1 = Math.min(Math.max(progressTop1, 0), 1)
    nProgBottom1 = Math.min(Math.max(progressBottom1, 0), 1)
    progressTop2 = (topEdge - cc2.offsetTop)/ (topEdge - bottomEdge);
    progressBottom2 = (topEdge - (cc2.offsetTop + cc2.offsetHeight ))/ (topEdge - bottomEdge);
    nProgTop2 = Math.min(Math.max(progressTop2, 0), 1)
    nProgBottom2 = Math.min(Math.max(progressBottom2, 0), 1)
    progressTop3 = (topEdge - cs3pos)/ (topEdge - bottomEdge);
    progressBottom3 = (topEdge - (cs3pos + cs3height ))/ (topEdge - bottomEdge);
    nProgTop3 = Math.min(Math.max(progressTop3, 0), 1)
    nProgBottom3 = Math.min(Math.max(progressBottom3, 0), 1)
    progressTop4 = (topEdge - cs4pos)/ (topEdge - bottomEdge);
    progressBottom4 = (topEdge - (cs4pos + cs4height ))/ (topEdge - bottomEdge);
    nProgTop4 = Math.min(Math.max(progressTop4, 0), 1)
    nProgBottom4 = Math.min(Math.max(progressBottom4, 0), 1)
    progressTop5 = (topEdge - cs5pos)/ (topEdge - bottomEdge);
    progressBottom5 = (topEdge - (cs5pos + cs5height ))/ (topEdge - bottomEdge);
    nProgTop5 = Math.min(Math.max(progressTop5, 0), 1)
    nProgBottom5 = Math.min(Math.max(progressBottom5, 0), 1)
    progressTop6 = (topEdge - cs6pos)/ (topEdge - bottomEdge);
    progressBottom6 = (topEdge - (cs6pos + cs6height ))/ (topEdge - bottomEdge);
    nProgTop6 = Math.min(Math.max(progressTop6, 0), 1)
    nProgBottom6 = Math.min(Math.max(progressBottom6, 0), 1)

    colorfulContent[0].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom1*255)) + ", " + (255 - (nProgBottom1*255)) + ", " + "255), rgb(" + (0 + (nProgTop1*255)) + ", " + (255 - (nProgTop1*255)) + ", " + "255))";
    colorfulContent[1].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom2*255)) + ", " + (255 - (nProgBottom2*255)) + ", " + "255), rgb(" + (0 + (nProgTop2*255)) + ", " + (255 - (nProgTop2*255)) + ", " + "255))";
    if ($(window).width() >= 752) {
        colorfulSubhead[0].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom3*255)) + ", " + (255 - (nProgBottom3*255)) + ", " + "255), rgb(" + (0 + (nProgTop3*255)) + ", " + (255 - (nProgTop3*255)) + ", " + "255))";
    }
    else {
        colorfulSubhead[0].style.background = "rgb(255, 255, 255)";
    }
    colorfulSubhead[1].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom4*255)) + ", " + (255 - (nProgBottom4*255)) + ", " + "255), rgb(" + (0 + (nProgTop4*255)) + ", " + (255 - (nProgTop4*255)) + ", " + "255))";
    if ($(window).width() >= 752) {
        colorfulSubhead[2].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom5*255)) + ", " + (255 - (nProgBottom5*255)) + ", " + "255), rgb(" + (0 + (nProgTop5*255)) + ", " + (255 - (nProgTop5*255)) + ", " + "255))";
    }
    else {
        colorfulSubhead[2].style.background = "rgb(255, 255, 255)";
    }
    colorfulSubhead[3].style.background = "linear-gradient(0deg,rgb(" + (0 + (nProgBottom6*255)) + ", " + (255 - (nProgBottom6*255)) + ", " + "255), rgb(" + (0 + (nProgTop6*255)) + ", " + (255 - (nProgTop6*255)) + ", " + "255))";

}) .resize();


function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
}