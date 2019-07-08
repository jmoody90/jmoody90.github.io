var photoAspectRatio = 1.7777;
var photoHolder = $(".leadDivPic")[0];
var pic = $(".pic")[0];
var picTop = $(".pic")[1];
var parent = $("#leadDiv")[0];
// var img = $("#topPic")[0];
var photoHolderHeight;
var photoHolderWidth;

var pHeight;
var pWidth;
var pAspectRatio;

var aspRatioComp;


$(window).on("resize", function () {

    pHeight = parent.offsetHeight;
    pWidth = parent.offsetWidth;
    pAspectRatio = pWidth/pHeight;
    
    aspRatioComp = pAspectRatio/photoAspectRatio;
    
    

    if (aspRatioComp < 0.5){
        photoHolderWidth = (pWidth * 2);
        photoHolderHeight = (photoHolderWidth / photoAspectRatio);
    }
    else if (aspRatioComp >= 0.5 && aspRatioComp < 1.0){
        photoHolderWidth = (pWidth * (2 - ((aspRatioComp - 0.5) * 2)));
        photoHolderHeight = (photoHolderWidth / photoAspectRatio);
    }
    else if (aspRatioComp >= 1.0 && aspRatioComp < 1.25){
        photoHolderHeight = (pHeight * aspRatioComp);
        photoHolderWidth = (photoHolderHeight * photoAspectRatio);
    }
    else {
        photoHolderHeight = (pHeight * 1.25);
        photoHolderWidth = (photoHolderHeight * photoAspectRatio);
    }

    // photoHolder.style.height = photoHolderHeight;
    // photoHolder.style.width = photoHolderWidth;
    // photoHolder.height = photoHolderHeight;
    // photoHolder.width = photoHolderWidth;
    pic.height = photoHolderHeight;
    pic.width = photoHolderWidth;
    picTop.height = photoHolderHeight;
    picTop.width = photoHolderWidth;
    var myPic = document.getElementById("topPic")
    myPic.style.marginBottom = "-" + photoHolderHeight+150 + "px";

}).resize();


// console.log(aspectRatio);


