var sprite = document.getElementsByClassName("animatedSprite")[0];
var offsetInterval = 0;
var offsetDist = 0;
var additionalOffset = 0;
var animVar;
var animationFullImage = new Image();
var imgSrc = $(".animatedSprite").css("background-image");
imgSrc = imgSrc.replace(/(url\(|\)|")/g, '');
var animSteps = getComputedStyle($(".animatedSprite")[0]).getPropertyValue("--animSteps");
var spriteScaleString = getComputedStyle($(".animatedSprite")[0]).getPropertyValue("transform");
var spriteScale = spriteScaleString.slice((spriteScaleString.indexOf("(") + 1), spriteScaleString.indexOf(","));
animationFullImage.src = imgSrc;
var timerStart = Date.now();
var win = $(window);
var spriteWidth = animationFullImage.width / animSteps;
win.on("resize", function () {
    var screenWidth = win.width();
    sprite.style.width = (screenWidth/spriteScale)+"px";
    
    if (spriteWidth <= screenWidth){
        additionalOffset = 0;
    }
    else{
        additionalOffset = ((spriteWidth-screenWidth)/2);
    }
   
    
    
    // console.log(spriteWidth.style.backgroundPosition);
    console.log(offsetInterval);
    



}).resize();

setInterval(spriteAnimation, 2000/animSteps);

function spriteAnimation(){
    bgOffset();
    sprite.style.backgroundPosition = "-" + (offsetDist + additionalOffset) + "px 0px";
    offsetInterval++
    console.log(sprite.style.backgroundPosition);
}

function bgOffset(){
    offsetDist = (offsetInterval % animSteps) * (spriteWidth);
}