$(document).ready(function () {
  
  // Header slider
  $('.header__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_prev"></div>',
    prevArrow: '<div class="arrow arrow_next"></div>',
    dotsClass: 'dots'
  });
  // -----------------------------------------------------------

  // Checking on empty filled inputs and Ajax send
  // $('#form').submit(function() { 
  //   if($('#email').val() == '') {
  //     return false;
  //   }
  //   $.ajax({
  //     type: "POST",
  //     url: "mail/mail.php",
  //     data: $(this).serialize()
  //   }).done(function() {
  //     $('.popup').fadeIn();
  //     $(this).find('input').val('');
  //     $('#form').trigger('reset');
  //   });
  //   return false;
  // });
  //------------------------------------------------
  


}); // End Document Ready