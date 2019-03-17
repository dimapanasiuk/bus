

console.log("on");

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

$(document).ready(function(){
  $("#menu-mob").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});


const gamberger = $('#menuToggle');
const menuList =  $('.my-list');

gamberger.click(function(){
  menuList.toggle('none');
});