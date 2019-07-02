(function($) {

    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop() + ($w.height()/8),
            viewBottom    = viewTop + ($w.height()*.75),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);
  
var win = $(window);

var modsEnteringRight = $(".subHead");
var modsEnteringUp = $(".textBox");
var modsForAnimation = $("animElement")



modsForAnimation.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("alreadySeen");
  }
});

win.scroll(function(event) {
  
  modsForAnimation.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      // el.addClass("enter-right");
      // el.addClass("fade-in");
      // el.removeClass("to-enter-right");
      // el.removeClass("to-fade-in");
      if(!el.hasClass("alreadySeen")){
        el.addClass("alreadySeen").trigger("classChange");
      }
    } 
  });
  
});



// modsEnteringRight.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-enter-right");
//     el.addClass("already-fade-in");
//   }
//   else {
//     el.addClass("to-enter-right");
//     el.addClass("to-fade-in");
//   }
// });

// win.scroll(function(event) {
  
//   modsEnteringRight.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("enter-right");
//       el.addClass("fade-in");
//       el.removeClass("to-enter-right");
//       el.removeClass("to-fade-in");
//     } 
//   });
  
// });


// modsEnteringUp.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-enter-up"); 
//     el.addClass("already-fade-in");
//   }
//   else {
//     el.addClass("to-enter-up");
//     el.addClass("to-fade-in");
//   }
// });

// win.scroll(function(event) {
  
//   modsEnteringUp.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("enter-up");
//       el.addClass("fade-in");
//       el.removeClass("to-enter-up");
//       el.removeClass("to-fade-in");
//     } 
//   });
  
// 
