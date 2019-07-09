var colorfulContent = $(".mainGradient");
var colorfulSVG = $(".svgGradient");
var stop1 = $("#stop1");
var stop2 = $("#stop2");
var cc1 = colorfulContent[0];
var cc2 = colorfulSVG[0];

var gradientContentUnit = $(".contentUnit");
var gc1 = gradientContentUnit[0];
var gc2 = gradientContentUnit[1];
var gc3 = gradientContentUnit[2];

var gradientSubhead = $(".contentUnit .subHead");
var gs1a = 0;
var gs1b = 0;
var gs2a = 0;
var gs2b = 0;
var gs3a = 0;
var gs3b = 0;
var gs1aHeight = 0;
var gs1bHeight = 0;
var gs2aHeight = 0;
var gs2bHight = 0;
var gs3aHeight = 0;
var gs3bHeight = 0;


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
var progressTop7 = 0;
var progressBottom7 = 0;
var progressTop8 = 0;
var progressBottom8 = 0;
var progressTop9 = 0;
var progressBottom9 = 0;
var progressTop10 = 0;
var progressBottom10 = 0;
var progressTop11 = 0;
var progressBottom11 = 0;


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
var nProgTop7 = 0;
var nProgBottom7 = 0;
var nProgTop8 = 0;
var nProgBottom8 = 0;
var nProgTop9 = 0;
var nProgBottom9 = 0;
var nProgTop10 = 0;
var nProgBottom10 = 0;
var nProgTop11 = 0;
var nProgBottom11 = 0;


$(window).scroll(function(event) {
    $w = $(window);
    topEdge = $w.scrollTop();
    bottomEdge = topEdge + $w.height();


    gs1aPos = getPosition(gradientSubhead[0]).y;
    gs1bPos = getPosition(gradientSubhead[1]).y;
    gs2aPos = getPosition(gradientSubhead[2]).y;
    gs2bPos = getPosition(gradientSubhead[3]).y;
    gs3aPos = getPosition(gradientSubhead[4]).y;
    gs3bPos = getPosition(gradientSubhead[5]).y;

    gs1aHeight = gradientSubhead[0].offsetHeight;
    gs1aHeight = gradientSubhead[1].offsetHeight;
    gs2aHeight = gradientSubhead[2].offsetHeight;
    gs2bHeight = gradientSubhead[3].offsetHeight;
    gs3aHeight = gradientSubhead[4].offsetHeight;
    gs3bHeight = gradientSubhead[5].offsetHeight;

    // ---------------------------------------------------------
    // position of top element amd top svg

    progressTop1 = (topEdge - cc1.offsetTop)/ (topEdge - bottomEdge);
    progressBottom1 = (topEdge - (cc1.offsetTop + cc1.offsetHeight ))/ (topEdge - bottomEdge);
    nProgTop1 = Math.min(Math.max(progressTop1, 0), 1);
    nProgBottom1 = Math.min(Math.max(progressBottom1, 0), 1);
    
    progressTop2 = (topEdge - cc2.scrollTop)/ (topEdge - bottomEdge);
    progressBottom2 = (topEdge - (cc2.scrollTop + cc2.scrollHeight ))/ (topEdge - bottomEdge);
    nProgTop2 = Math.min(Math.max(progressTop2, 0), 1);
    nProgBottom2 = Math.min(Math.max(progressBottom2, 0), 1);
    

    //positions of gradient content units

    progressTop3 = (topEdge - gc1.offsetTop)/ (topEdge - bottomEdge);
    progressBottom3 = (topEdge - (gc1.offsetTop + gc1.offsetHeight ))/ (topEdge - bottomEdge);
    nProgTop3 = Math.min(Math.max(progressTop3, 0), 1);
    nProgBottom3 = Math.min(Math.max(progressBottom3, 0), 1);
    
    progressTop4 = (topEdge - gc2.offsetTop)/ (topEdge - bottomEdge);
    progressBottom4 = (topEdge - (gc2.offsetTop + gc2.scrollHeight ))/ (topEdge - bottomEdge);
    nProgTop4 = Math.min(Math.max(progressTop4, 0), 1);
    nProgBottom4 = Math.min(Math.max(progressBottom4, 0), 1);
    
    progressTop5 = (topEdge - gc3.offsetTop)/ (topEdge - bottomEdge);
    progressBottom5 = (topEdge - (gc3.offsetTop + gc3.scrollHeight ))/ (topEdge - bottomEdge);
    nProgTop5 = Math.min(Math.max(progressTop5, 0), 1);
    nProgBottom5 = Math.min(Math.max(progressBottom5, 0), 1);

    // positions of gradient subhead elements

    progressTop6 = (topEdge - gs1aPos)/ (topEdge - bottomEdge);
    progressBottom6 = (topEdge - (gs1aPos + gs1aHeight ))/ (topEdge - bottomEdge);
    nProgTop6 = Math.min(Math.max(progressTop6, 0), 1);
    nProgBottom6 = Math.min(Math.max(progressBottom6, 0), 1);

    progressTop7 = (topEdge - gs1bPos)/ (topEdge - bottomEdge);
    progressBottom7 = (topEdge - (gs1bPos + gs1bHeight ))/ (topEdge - bottomEdge);
    nProgTop7 = Math.min(Math.max(progressTop7, 0), 1);
    nProgBottom7 = Math.min(Math.max(progressBottom7, 0), 1);

    progressTop8 = (topEdge - gs2aPos)/ (topEdge - bottomEdge);
    progressBottom8 = (topEdge - (gs2aPos + gs2aHeight ))/ (topEdge - bottomEdge);
    nProgTop8 = Math.min(Math.max(progressTop8, 0), 1);
    nProgBottom8 = Math.min(Math.max(progressBottom8, 0), 1);

    progressTop9 = (topEdge - gs2bPos)/ (topEdge - bottomEdge);
    progressBottom9 = (topEdge - (gs2bPos + gs2bHeight ))/ (topEdge - bottomEdge);
    nProgTop9 = Math.min(Math.max(progressTop9, 0), 1);
    nProgBottom9 = Math.min(Math.max(progressBottom9, 0), 1);
    
    progressTop10 = (topEdge - gs3aPos)/ (topEdge - bottomEdge);
    progressBottom10 = (topEdge - (gs3aPos + gs3aHeight ))/ (topEdge - bottomEdge);
    nProgTop10 = Math.min(Math.max(progressTop10, 0), 1);
    nProgBottom10 = Math.min(Math.max(progressBottom10, 0), 1);

    progressTop11 = (topEdge - gs3bPos)/ (topEdge - bottomEdge);
    progressBottom11 = (topEdge - (gs3bPos + gs3bHeight ))/ (topEdge - bottomEdge);
    nProgTop11 = Math.min(Math.max(progressTop11, 0), 1);
    nProgBottom11 = Math.min(Math.max(progressBottom11, 0), 1);

    // ---------------------------------------------------------
    // Determine Color

    // Head BG
    colorfulContent[0].style.background = "linear-gradient(340deg,rgb(" + (0 + (nProgBottom1*255)) + ", " + (255 - (nProgBottom1*255)) + ", " + "255), rgb(" + (0 + (nProgTop1*255)) + ", " + (255 - (nProgTop1*255)) + ", " + "255))";
    
    // SVG
    stop1[0].style.stopColor = "rgb(" + (0 + (nProgTop2*255)) + ", " + (255 - (nProgTop2*255)) + ", " + "255)"
    stop2[0].style.stopColor = "rgb(" + (0 + (nProgBottom2*255)) + ", " + (255 - (nProgBottom2*255)) + ", " + "255)"

    // Content Units
    gradientContentUnit[0].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom3*28)) + ", " + (59 - (nProgBottom3*28)) + ", " + (59 - (nProgBottom3*28)) + "), rgb(" + (59 - (nProgTop3*28)) + ", " + (59 - (nProgTop3*28)) + ", " + (59 - (nProgTop3*28)) + "))";
    gradientContentUnit[1].style.background = "linear-gradient(340deg,rgb(" + (0 + (nProgBottom4*255)) + ", " + (255 - (nProgBottom4*255)) + ", " + "255), rgb(" + (0 + (nProgTop4*255)) + ", " + (255 - (nProgTop4*255)) + ", " + "255))";
    gradientContentUnit[2].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom5*28)) + ", " + (59 - (nProgBottom5*28)) + ", " + (59 - (nProgBottom5*28)) + "), rgb(" + (59 - (nProgTop5*28)) + ", " + (59 - (nProgTop5*28)) + ", " + (59 - (nProgTop5*28)) + "))";
    



    // Content Subheads
    // 1a
    if ($(window).width() >= 751) {
        gradientSubhead[0].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom6*28)) + ", " + (59 - (nProgBottom6*28)) + ", " + (59 - (nProgBottom6*28)) + "), rgb(" + (59 - (nProgTop6*28)) + ", " + (59 - (nProgTop6*28)) + ", " + (59 - (nProgTop6*28)) + "))";
    }
    else {
        gradientSubhead[0].style.background = "rgb(255, 255, 255)";
    }
    // 1b
    gradientSubhead[1].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom7*28)) + ", " + (59 - (nProgBottom7*28)) + ", " + (59 - (nProgBottom7*28)) + "), rgb(" + (59 - (nProgTop7*28)) + ", " + (59 - (nProgTop7*28)) + ", " + (59 - (nProgTop7*28)) + "))";
    
    
    // 2a
    if ($(window).width() >= 751) {
        gradientSubhead[2].style.background = "linear-gradient(340deg,rgb(" + (0 + (nProgBottom8*255)) + ", " + (255 - (nProgBottom8*255)) + ", " + "255), rgb(" + (0 + (nProgTop8*255)) + ", " + (255 - (nProgTop8*255)) + ", " + "255))";
    }
    else {
        gradientSubhead[2].style.background = "rgb(255, 255, 255)";
    }
    // 2b
    gradientSubhead[3].style.background = "linear-gradient(340deg,rgb(" + (0 + (nProgBottom9*255)) + ", " + (255 - (nProgBottom9*255)) + ", " + "255), rgb(" + (0 + (nProgTop9*255)) + ", " + (255 - (nProgTop9*255)) + ", " + "255))";
    
    
    // 3a
    if ($(window).width() >= 751) {
        gradientSubhead[4].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom10*28)) + ", " + (59 - (nProgBottom10*28)) + ", " + (59 - (nProgBottom10*28)) + "), rgb(" + (59 - (nProgTop10*28)) + ", " + (59 - (nProgTop10*28)) + ", " + (59 - (nProgTop10*28)) + "))";
    }
    else {
        gradientSubhead[4].style.background = "rgb(255, 255, 255)";
    }
    // 3b
    gradientSubhead[5].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom11*28)) + ", " + (59 - (nProgBottom11*28)) + ", " + (59 - (nProgBottom11*28)) + "), rgb(" + (59 - (nProgTop11*28)) + ", " + (59 - (nProgTop11*28)) + ", " + (59 - (nProgTop11*28)) + "))";


});

$(window).on("resize", function () {
    $w = $(window);
    topEdge = $w.scrollTop();
    bottomEdge = topEdge + $w.height();


    gs1aPos = getPosition(gradientSubhead[0]).y;
    gs1bPos = getPosition(gradientSubhead[1]).y;
    gs2aPos = getPosition(gradientSubhead[2]).y;
    gs2bPos = getPosition(gradientSubhead[3]).y;
    gs3aPos = getPosition(gradientSubhead[4]).y;
    gs3bPos = getPosition(gradientSubhead[5]).y;

    gs1aHeight = gradientSubhead[0].offsetHeight;
    gs1aHeight = gradientSubhead[1].offsetHeight;
    gs2aHeight = gradientSubhead[2].offsetHeight;
    gs2bHeight = gradientSubhead[3].offsetHeight;
    gs3aHeight = gradientSubhead[4].offsetHeight;
    gs3bHeight = gradientSubhead[5].offsetHeight;

    // ---------------------------------------------------------
    // position of top element amd top svg

    progressTop1 = (topEdge - cc1.offsetTop)/ (topEdge - bottomEdge);
    progressBottom1 = (topEdge - (cc1.offsetTop + cc1.offsetHeight ))/ (topEdge - bottomEdge);
    nProgTop1 = Math.min(Math.max(progressTop1, 0), 1);
    nProgBottom1 = Math.min(Math.max(progressBottom1, 0), 1);
    
    progressTop2 = (topEdge - cc2.scrollTop)/ (topEdge - bottomEdge);
    progressBottom2 = (topEdge - (cc2.scrollTop + cc2.scrollHeight ))/ (topEdge - bottomEdge);
    nProgTop2 = Math.min(Math.max(progressTop2, 0), 1);
    nProgBottom2 = Math.min(Math.max(progressBottom2, 0), 1);
    

    //positions of gradient content units

    progressTop3 = (topEdge - gc1.offsetTop)/ (topEdge - bottomEdge);
    progressBottom3 = (topEdge - (gc1.offsetTop + gc1.offsetHeight ))/ (topEdge - bottomEdge);
    nProgTop3 = Math.min(Math.max(progressTop3, 0), 1);
    nProgBottom3 = Math.min(Math.max(progressBottom3, 0), 1);
    
    progressTop4 = (topEdge - gc2.offsetTop)/ (topEdge - bottomEdge);
    progressBottom4 = (topEdge - (gc2.offsetTop + gc2.scrollHeight ))/ (topEdge - bottomEdge);
    nProgTop4 = Math.min(Math.max(progressTop4, 0), 1);
    nProgBottom4 = Math.min(Math.max(progressBottom4, 0), 1);
    
    progressTop5 = (topEdge - gc3.offsetTop)/ (topEdge - bottomEdge);
    progressBottom5 = (topEdge - (gc3.offsetTop + gc3.scrollHeight ))/ (topEdge - bottomEdge);
    nProgTop5 = Math.min(Math.max(progressTop5, 0), 1);
    nProgBottom5 = Math.min(Math.max(progressBottom5, 0), 1);

    // positions of gradient subhead elements

    progressTop6 = (topEdge - gs1aPos)/ (topEdge - bottomEdge);
    progressBottom6 = (topEdge - (gs1aPos + gs1aHeight ))/ (topEdge - bottomEdge);
    nProgTop6 = Math.min(Math.max(progressTop6, 0), 1);
    nProgBottom6 = Math.min(Math.max(progressBottom6, 0), 1);

    progressTop7 = (topEdge - gs1bPos)/ (topEdge - bottomEdge);
    progressBottom7 = (topEdge - (gs1bPos + gs1bHeight ))/ (topEdge - bottomEdge);
    nProgTop7 = Math.min(Math.max(progressTop7, 0), 1);
    nProgBottom7 = Math.min(Math.max(progressBottom7, 0), 1);

    progressTop8 = (topEdge - gs2aPos)/ (topEdge - bottomEdge);
    progressBottom8 = (topEdge - (gs2aPos + gs2aHeight ))/ (topEdge - bottomEdge);
    nProgTop8 = Math.min(Math.max(progressTop8, 0), 1);
    nProgBottom8 = Math.min(Math.max(progressBottom8, 0), 1);

    progressTop9 = (topEdge - gs2bPos)/ (topEdge - bottomEdge);
    progressBottom9 = (topEdge - (gs2bPos + gs2bHeight ))/ (topEdge - bottomEdge);
    nProgTop9 = Math.min(Math.max(progressTop9, 0), 1);
    nProgBottom9 = Math.min(Math.max(progressBottom9, 0), 1);
    
    progressTop10 = (topEdge - gs3aPos)/ (topEdge - bottomEdge);
    progressBottom10 = (topEdge - (gs3aPos + gs3aHeight ))/ (topEdge - bottomEdge);
    nProgTop10 = Math.min(Math.max(progressTop10, 0), 1);
    nProgBottom10 = Math.min(Math.max(progressBottom10, 0), 1);

    progressTop11 = (topEdge - gs3bPos)/ (topEdge - bottomEdge);
    progressBottom11 = (topEdge - (gs3bPos + gs3bHeight ))/ (topEdge - bottomEdge);
    nProgTop11 = Math.min(Math.max(progressTop11, 0), 1);
    nProgBottom11 = Math.min(Math.max(progressBottom11, 0), 1);

    // ---------------------------------------------------------
    // Determine Color

        // Head BG
        colorfulContent[0].style.background = "linear-gradient(340deg,rgb(" + (0 + (nProgBottom1*255)) + ", " + (255 - (nProgBottom1*255)) + ", " + "255), rgb(" + (0 + (nProgTop1*255)) + ", " + (255 - (nProgTop1*255)) + ", " + "255))";
    
        // SVG
        stop1[0].style.stopColor = "rgb(" + (0 + (nProgTop2*255)) + ", " + (255 - (nProgTop2*255)) + ", " + "255)"
        stop2[0].style.stopColor = "rgb(" + (0 + (nProgBottom2*255)) + ", " + (255 - (nProgBottom2*255)) + ", " + "255)"
    
        // Content Units
        gradientContentUnit[0].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom3*28)) + ", " + (59 - (nProgBottom3*28)) + ", " + (59 - (nProgBottom3*28)) + "), rgb(" + (59 - (nProgTop3*28)) + ", " + (59 - (nProgTop3*28)) + ", " + (59 - (nProgTop3*28)) + "))";
        gradientContentUnit[1].style.background = "linear-gradient(340deg,rgb(" + (0 + (nProgBottom4*255)) + ", " + (255 - (nProgBottom4*255)) + ", " + "255), rgb(" + (0 + (nProgTop4*255)) + ", " + (255 - (nProgTop4*255)) + ", " + "255))";
        gradientContentUnit[2].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom5*28)) + ", " + (59 - (nProgBottom5*28)) + ", " + (59 - (nProgBottom5*28)) + "), rgb(" + (59 - (nProgTop5*28)) + ", " + (59 - (nProgTop5*28)) + ", " + (59 - (nProgTop5*28)) + "))";
        
    
    
    
        // Content Subheads
        // 1a
        if ($(window).width() >= 751) {
            gradientSubhead[0].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom6*28)) + ", " + (59 - (nProgBottom6*28)) + ", " + (59 - (nProgBottom6*28)) + "), rgb(" + (59 - (nProgTop6*28)) + ", " + (59 - (nProgTop6*28)) + ", " + (59 - (nProgTop6*28)) + "))";
        }
        else {
            gradientSubhead[0].style.background = "rgb(255, 255, 255)";
        }
        // 1b
        gradientSubhead[1].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom7*28)) + ", " + (59 - (nProgBottom7*28)) + ", " + (59 - (nProgBottom7*28)) + "), rgb(" + (59 - (nProgTop7*28)) + ", " + (59 - (nProgTop7*28)) + ", " + (59 - (nProgTop7*28)) + "))";
        
        
        // 2a
        if ($(window).width() >= 751) {
            gradientSubhead[2].style.background = "linear-gradient(340deg,rgb(" + (0 + (nProgBottom8*255)) + ", " + (255 - (nProgBottom8*255)) + ", " + "255), rgb(" + (0 + (nProgTop8*255)) + ", " + (255 - (nProgTop8*255)) + ", " + "255))";
        }
        else {
            gradientSubhead[2].style.background = "rgb(255, 255, 255)";
        }
        // 2b
        gradientSubhead[3].style.background = "linear-gradient(340deg,rgb(" + (0 + (nProgBottom9*255)) + ", " + (255 - (nProgBottom9*255)) + ", " + "255), rgb(" + (0 + (nProgTop9*255)) + ", " + (255 - (nProgTop9*255)) + ", " + "255))";
        
        
        // 3a
        if ($(window).width() >= 751) {
            gradientSubhead[4].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom10*28)) + ", " + (59 - (nProgBottom10*28)) + ", " + (59 - (nProgBottom10*28)) + "), rgb(" + (59 - (nProgTop10*28)) + ", " + (59 - (nProgTop10*28)) + ", " + (59 - (nProgTop10*28)) + "))";
        }
        else {
            gradientSubhead[4].style.background = "rgb(255, 255, 255)";
        }
        // 3b
        gradientSubhead[5].style.background = "linear-gradient(0deg,rgb(" + (59 - (nProgBottom11*28)) + ", " + (59 - (nProgBottom11*28)) + ", " + (59 - (nProgBottom11*28)) + "), rgb(" + (59 - (nProgTop11*28)) + ", " + (59 - (nProgTop11*28)) + ", " + (59 - (nProgTop11*28)) + "))";


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