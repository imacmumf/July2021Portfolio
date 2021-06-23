

//Navbar Opacity on scroll
  $(window).on('scroll', function(){
    if ($(window).scrollTop()>10){
      $(".navbar").css("opacity", "0.5");
    } else{
      $(".navbar").css("opacity", "1.0");
    }

  });



//Fade out background image
let introImage = $(".bg-image");

$(window).on('scroll', function(){
  var st = $(this).scrollTop();
  introImage.css({
    'opacity': 1 - st/600
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
