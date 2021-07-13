


//Navbar Opacity on scroll
$(function() {
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 10) {
      $('.navbar').addClass('active');

    } else {
      $('.navbar').removeClass('active');
      $('.navbar').addClass('navbar');

    }
  });
});


  //Clock

  let date = new Date();
  let d = date.getDate();
  let dayNum = date.getDay();
  let dayName = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let time = date.getHours();


$(".clock").html(dayName[dayNum] + " " + d + "-" + month + "-" + year);

if(time < 12 ){
  $(".time-greeting").html("Good Morning");
} else if (time >= 12 && time < 18){
  $(".time-greeting").html("Good Afternoon");
} else if (time >= 18 && time <= 24){
  $(".time-greeting").html("Good Evening");
};




//Fade out background image
let introImage = $(".bg-image");

$(window).on('scroll', function(){
  var st = $(this).scrollTop();
  introImage.css({
    'opacity': 1 - st/1000
  });
});


//Fade in/out panels

$(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();



//Carousel
//Add bootstrap class to logo images
$(".logo-pic").addClass("border-left-0 border-info");
