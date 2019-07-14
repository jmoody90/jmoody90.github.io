var sprite1 = document.getElementById("buttonSpriteAR1");
var sprite2 = document.getElementById("buttonSpriteAR2");
var button1 = $("#pills-home-tab")[0];
var button2 = $("#pills-profile-tab")[0];
var offsetInterval1 = 0;
var offsetInterval2 = 0;
var offsetDist1 = 0;
var offsetDist2 = 0;
var additionalOffset1 = 0;
var additionalOffset2 = 0;
var animVar1;
var animVar2;
var animationFullImage1 = new Image();
var animationFullImage2 = new Image();
var imgSrc1 = 0;
var imgSrc2 = 0;

var animSteps1 = getComputedStyle($("#buttonSpriteAR1")[0]).getPropertyValue("--animSteps");
var animSteps2 = getComputedStyle($("#buttonSpriteAR2")[0]).getPropertyValue("--animSteps");
var spriteScaleString1 = getComputedStyle($("#buttonSpriteAR1")[0]).getPropertyValue("transform");
var spriteScaleString2 = getComputedStyle($("#buttonSpriteAR2")[0]).getPropertyValue("transform");
var spriteScale1 = spriteScaleString1.slice((spriteScaleString1.indexOf("(") + 1), spriteScaleString1.indexOf(","));
var spriteScale2 = spriteScaleString2.slice((spriteScaleString2.indexOf("(") + 1), spriteScaleString2.indexOf(","));


var timerStart = Date.now();
var win = $(window);
win.on("resize", function () {
    imgSrc1 = $("#buttonSpriteAR1").css("background-image");
    imgSrc2 = $("#buttonSpriteAR2").css("background-image");
    imgSrc1 = imgSrc1.replace(/(url\(|\)|")/g, '');
    imgSrc2 = imgSrc2.replace(/(url\(|\)|")/g, '');
    animationFullImage1.src = imgSrc1;
    animationFullImage2.src = imgSrc2;

    var screenWidth = win.width();
    sprite1.style.width = (screenWidth/spriteScale1)+"px";
    sprite2.style.width = (screenWidth/spriteScale2)+"px";
    
    if ((animationFullImage1.width / animSteps1) <= screenWidth){
        additionalOffset1 = 0;
    }
    else{
        additionalOffset1 = (((animationFullImage1.width / animSteps1)-screenWidth)/2);
    }

    if ((animationFullImage2.width / animSteps2) <= screenWidth){
        additionalOffset2 = 0;
    }
    else{
        additionalOffset2 = (((animationFullImage2.width / animSteps2)-screenWidth)/2);
    }
    if ($(button1).hasClass("active")) {
        direction1 = 1;
    }
    if ($(button2).hasClass("active")) {
        direction2 = 1;
    }

}).resize();

var direction1 = 1;
var direction2 = -1;



$(button1).on('mouseenter', function() {
    direction1 = 1;
})
$(button1).on('mouseleave', function() {
    if ($(button1).hasClass("active")) {
        direction1 = 1;
    }
    
    if (!$(button1).hasClass("active")) {
        direction1 = -1;
    }

})
$(button1).click(function() {
    direction2 = -1;
})


$(button2).on('mouseenter', function() {
    direction2 = 1;
})
$(button2).on('mouseleave', function() {
    if ($(button2).hasClass("active")) {
        direction2 = 1;
    }
    
    if (!$(button2).hasClass("active")) {
        direction2 = -1;
    }

})
$(button2).click(function() {
    direction1 = -1;
})




setInterval(spriteAnimation, 50);



function spriteAnimation(){
    if (direction1 == 1) {
        bgOffset();
        sprite1.style.backgroundPosition = "-" + (offsetDist1 + additionalOffset1) + "px 0px";
        if (offsetInterval1 < animSteps1-1){
            offsetInterval1++;
        }
        else {
            direction1 = 0;
        }
    }
    if (direction1 == -1) {
        bgOffset();
        sprite1.style.backgroundPosition = "-" + (offsetDist1 + additionalOffset1) + "px 0px";
        if (offsetInterval1 > 0){
            offsetInterval1--;
        }
        else {
            direction1 = 0;
        }
    }
    
    if (direction2 == 1) {
        bgOffset();
        sprite2.style.backgroundPosition = "-" + (offsetDist2 + additionalOffset2) + "px 0px";
        if (offsetInterval2 < animSteps2-1){
            offsetInterval2++;
        }
        else {
            direction2 = 0;
        }
    }
    if (direction2 == -1) {
        bgOffset();
        sprite2.style.backgroundPosition = "-" + (offsetDist2 + additionalOffset2) + "px 0px";
        if (offsetInterval2 > 0){
            offsetInterval2--;
        }
        else {
            direction2 = 0;
        }
    }
}


function bgOffset(){
    offsetDist1 = (offsetInterval1 % animSteps1) * (animationFullImage1.width / animSteps1);
    
    offsetDist2 = (offsetInterval2 % animSteps2) * (animationFullImage2.width / animSteps2);

    /* ****************************** */
}
