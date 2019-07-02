$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight()
{
    var div = $('#dynamicHeight');
    var width = div.width();
    var height = (width*9)/16
    
    div.css('height', height);
}