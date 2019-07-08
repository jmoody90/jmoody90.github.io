var text = $("text");
var tspan = $("tspan");
var gradientTextContainer = $(".svgGradient");
var $w = $(window);



$(window).on("resize", function () {

    // tspan[0].style.fontSize = (gradientTextContainer[0].offsetWidth/100)+2 +"rem";
    // tspan[1].style.fontSize = (gradientTextContainer[0].offsetWidth/100)+2 +"rem";
    // tspan[3].style.fontSize = (gradientTextContainer[0].offsetWidth/100)-3 +"rem";
    // tspan[4].style.fontSize = (gradientTextContainer[0].offsetWidth/100)-3 +"rem";

    // tspan[0].setAttribute("dy", "-1rem");
    // tspan[1].setAttribute("dy", (gradientTextContainer[0].offsetWidth/100)+2 +"rem");
    // tspan[3].setAttribute("dy", (gradientTextContainer[0].offsetWidth/100)-3 +"rem");
    // tspan[4].setAttribute("dy", (gradientTextContainer[0].offsetWidth/100)-3 +"rem");

}) .resize();