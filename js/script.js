jQuery(document).ready(function($){
  // Services Link
  $('.link-services').click(function(){
    if( $('.contactWrap').hasClass('active')) {
      $('contactWrap').removeClass('active');
      $('.servicesWrap').addClass('active');
      $('.contactWrap').css({top: "2000px"});
      $('.servicesWrap').animate({top: "160px"}, 750);
    }
    $('.servicesWrap').addClass('active');
    $('.bodyCopy').slideUp('slow');
    $('.servicesWrap').animate({top: "160px"}, 750);
  });
  $('.home').hover(function(){
    $('.fa-arrow-right').effect('shake', { direction: 'right', times: 10, distance: 5}, 5000);
  });

  $('.services-to-contact').click(function(){
    $('.servicesWrap').removeClass('active');
    $('.contactWrap').addClass('active');
    $('.servicesWrap').css({top: "2000px"});
    $('.contactWrap').animate({top: "-160px"}, 750);
  });

  //Contact Link
  $('.link-contact').click(function(){
    if( $('.servicesWrap').hasClass('active')) {
      $('servicesWrap').removeClass('active');
      $('.contactWrap').addClass('active');
      $('.servicesWrap').css({top: "2000px"});
      $('.contactWrap').animate({top: "-160px"}, 750);
    }
    $('.contactWrap').addClass('active');
    $('.bodyCopy').slideUp('slow');
    $('.contactWrap').animate({top: "-160px"}, 750);
  });
});