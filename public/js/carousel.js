$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 2,
          },
          1000: {
              items: 3,
          },
      },
  });
});