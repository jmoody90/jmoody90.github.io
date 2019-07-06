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



    console.log("progress to the top = " + nProgTop1);

    // progressTop = $(window).scrollTop - 
    colorfulContent[0].style.background = "linear-gradient(0deg,hsl(" + ((43.83 - (nProgBottom1*56.65)) % 360) + ", 100%, " + (62.16 - (nProgBottom1*2.55) + (((-Math.abs((0.5-nProgBottom1)*2))+1)*6)) + "%), hsl(" + ((43.83 - (nProgTop1*56.65)) % 360) + ", 100%, " + (62.16 - (nProgTop1*2.55) + (((-Math.abs((0.5-nProgTop1)*2))+1)*6)) + "%))";
    colorfulContent[1].style.background = "linear-gradient(0deg,hsl(" + ((43.83 - (nProgBottom2*56.65)) % 360) + ", 100%, " + (62.16 - (nProgBottom2*2.55) + (((-Math.abs((0.5-nProgBottom2)*2))+1)*6)) + "%), hsl(" + ((43.83 - (nProgTop2*56.65)) % 360) + ", 100%, " + (62.16 - (nProgTop2*2.55) + (((-Math.abs((0.5-nProgTop2)*2))+1)*6)) + "%))";
    if ($(window).width() >= 768) {
        colorfulSubhead[0].style.background = "linear-gradient(0deg,hsl(" + ((43.83 - (nProgBottom3*56.65)) % 360) + ", 100%, " + (62.16 - (nProgBottom3*2.55) + (((-Math.abs((0.5-nProgBottom3)*2))+1)*6)) + "%), hsl(" + ((43.83 - (nProgTop3*56.65)) % 360) + ", 100%, " + (62.16 - (nProgTop3*2.55) + (((-Math.abs((0.5-nProgTop3)*2))+1)*6)) + "%))";
    }
    else {
        colorfulSubhead[0].style.background = "rgb(255, 255, 255)";

    }
    colorfulSubhead[1].style.background = "linear-gradient(0deg,hsl(" + ((43.83 - (nProgBottom4*56.65)) % 360) + ", 100%, " + (62.16 - (nProgBottom4*2.55) + (((-Math.abs((0.5-nProgBottom4)*2))+1)*6)) + "%), hsl(" + ((43.83 - (nProgTop4*56.65)) % 360) + ", 100%, " + (62.16 - (nProgTop4*2.55) + (((-Math.abs((0.5-nProgTop4)*2))+1)*6)) + "%))";
    if ($(window).width() >= 768) {
        colorfulSubhead[2].style.background = "linear-gradient(0deg,hsl(" + ((43.83 - (nProgBottom5*56.65)) % 360) + ", 100%, " + (62.16 - (nProgBottom5*2.55) + (((-Math.abs((0.5-nProgBottom5)*2))+1)*6)) + "%), hsl(" + ((43.83 - (nProgTop5*56.65)) % 360) + ", 100%, " + (62.16 - (nProgTop5*2.55) + (((-Math.abs((0.5-nProgTop5)*2))+1)*6)) + "%))";
    }
    else {
        colorfulSubhead[2].style.background = "rgb(255, 255, 255)";

    }
        colorfulSubhead[3].style.background = "linear-gradient(0deg,hsl(" + ((43.83 - (nProgBottom6*56.65)) % 360) + ", 100%, " + (62.16 - (nProgBottom6*2.55) + (((-Math.abs((0.5-nProgBottom6)*2))+1)*6)) + "%), hsl(" + ((43.83 - (nProgTop6*56.65)) % 360) + ", 100%, " + (62.16 - (nProgTop6*2.55) + (((-Math.abs((0.5-nProgTop6)*2))+1)*6)) + "%))";
});

$(window).on("resize", function () {
    if ($(window).width() >= 768) {
        colorfulSubhead[0].style.background = "linear-gradient(0deg,hsl(" + ((43.83 - (nProgBottom3*56.65)) % 360) + ", 100%, " + (62.16 - (nProgBottom3*2.55) + (((-Math.abs((0.5-nProgBottom3)*2))+1)*6)) + "%), hsl(" + ((43.83 - (nProgTop3*56.65)) % 360) + ", 100%, " + (62.16 - (nProgTop3*2.55) + (((-Math.abs((0.5-nProgTop3)*2))+1)*6)) + "%))";
    }
    else {
        colorfulSubhead[0].style.background = "rgb(255, 255, 255)";
    }
});


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