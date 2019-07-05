$(document).ready(function () {
  
  // Header slider
  $('.header__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_prev"></div>',
    prevArrow: '<div class="arrow arrow_next"></div>',
    dotsClass: 'dots'
    // responsive: [
    //   {
    //     breakpoint: 1920,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   },
      // {
      //   breakpoint: 992,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   }
      // },
    // ]
  });
  // -----------------------------------------------------------



}); // End Document Ready