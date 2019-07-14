$.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
        var image = document.getElementById('topPic');
        if($window.scrollTop() < pos) {
            image.style.opacity = (($window.scrollTop())/pos);
        }
        else{
            image.style.opacity = 1;
        }
    });
};

$('#leadDiv').followTo(500);
$('#mainNavbar').followTo(500);
$('#leadDiv').css({
    position: 'fixed',
    top: 0
});
$(window).on("resize", function () {
    var container = document.getElementById('leadDivContainer');
    var lead = document.getElementById('leadDiv');
    container.style.height = lead.offsetHeight + 560 + "px";
}).resize();