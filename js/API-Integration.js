var name;
var bio;
var photoURL;
var pageURL;
var profileImage;

$.getJSON('https://api.unsplash.com/users/jmoody90/likes/?client_id=960a806858843a96a8d49fa31eaf03bda0dbf332763519c85b92c35125dbdbeb', function(data) {
console.log(data);
 for(i=0; i<data.length; i++){
     
     console.log(data[i].user.name);
 }

});











//     $.each(data, function(index, value) {
//     //console.log(value);

//         var name = value.user.name;
//         var bio = value.user.bio;
//         photoURL = value.urls.regular;
//         var pageURL = value.user.links.html;
//         var profileImage = value.user.profile_image.medium;
//         document.getElementById("imagePlacement01").src = "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80";
//         //document.getElementsByClassName("image01")[0].style.background = "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80";
//         console.log(name);
//         console.log(bio);
//         console.log(photoURL);
//         console.log(pageURL);
//         console.log(profileImage);
//         console.log(photoURL[0])
//  });
// for(i=0, i<2, i++){

// pic1 = photoURL[0];

