jQuery(document).ready(function($){
  // Services Link
  var mobile = 650;
  var screenSize = $( window ).width();

  $('.link-services').click(function(){
    if( $('.contactWrap').hasClass('active')) {
      $('.contactWrap').removeClass('active');
      $('.servicesWrap').addClass('active');
      $('.contactWrap').css({top: "2000px"});
      if ( screenSize > mobile) {
        $('.servicesWrap').animate({top: "160px"}, 750);
      }
      else if ( screenSize < mobile) {
        $('.servicesWrap').animate({top: "60px"}, 750);
      }
    }
    $('.servicesWrap').addClass('active');
    $('.bodyCopy').slideUp('slow');
    if ( screenSize > mobile) {
        $('.servicesWrap').animate({top: "160px"}, 750);
      }
      else if ( screenSize < mobile) {
        $('.servicesWrap').animate({top: "60px"}, 750);
      }
  });
  $('.home').hover(function(){
    $('.fa-arrow-right').effect('shake', { direction: 'right', times: 10, distance: 5}, 5000);
  });

  $('.services-to-contact').click(function(){
    $('.servicesWrap').removeClass('active');
    $('.contactWrap').addClass('active');
    $('.servicesWrap').css({top: "2000px"});
    if ( screenSize > mobile) {
      $('.contactWrap').animate({top: "-160px"}, 750);
    }
    else if ( screenSize < mobile) {
      $('.contactWrap').animate({top: "-260px"}, 750);
    }
  });

  //Contact Link
  $('.link-contact').click(function(){
    if( $('.servicesWrap').hasClass('active')) {
      $('.servicesWrap').removeClass('active');
      $('.contactWrap').addClass('active');
      $('.servicesWrap').css({top: "2000px"});
      if ( screenSize > mobile) {
        $('.contactWrap').animate({top: "-160px"}, 750);
      }
      else if ( screenSize < mobile) {
        $('.contactWrap').animate({top: "-260px"}, 750);
      }
    }
    $('.contactWrap').addClass('active');
    $('servicesWrap').removeClass('active');
    $('.bodyCopy').slideUp('slow');
    if ( screenSize > mobile) {
      $('.contactWrap').animate({top: "-160px"}, 750);
      }
      else if ( screenSize < mobile) {
        $('.contactWrap').animate({top: "-260px"}, 750);
      }
  });
});