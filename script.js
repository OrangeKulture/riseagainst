$(document).ready(function() {
  $('.mainButton').click(function() {
    $('.middle-cont').css("visibility", "visible");
    $('.middle-cont').addClass('animated bounceInDown');
    $('.mainButton').css("visibility", "hidden");
  });

  //Slider Options
  var speed = 500; //fade speed for images
  var autoslider = true; //autoslider option
  var autospeed = 10000; //autoslider speed

  $('.slide').first().addClass('active');

  //Hide all slides
  $('.slide').hide();

  //Show first slide
  $('.active').show();

  // AutoSlide properties
  if (autoslider) {
    setInterval(function() {
      $('.active').removeClass('active').addClass('lastActive');
      if ($('.lastActive').is(':last-child')) {
        $('.slide').first().addClass('active');
      } else {
        $('.lastActive').next().addClass('active');
      }
      $('.lastActive').removeClass('lastActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    }, autospeed);
  }
});