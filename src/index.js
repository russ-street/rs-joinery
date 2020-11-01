// JS Goes here - ES6 supported

import "./css/main.css";
import "./css/imports/swiper.css";
import Swiper from 'swiper';


$(document).ready(function() {
  console.log('jquery is here?');


  $(".scrollTo").on('click', function(e) {
     e.preventDefault();
     var target = $(this).attr('href');
     $('html, body').animate({
       scrollTop: ($(target).offset().top - 84)
     }, 250);
  });


  // swiper (swiper.js) used on the careers page
  var swiper = new Swiper('.swiper-container', {
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     // effect: 'coverflow',
     // coverflowEffect: {
     //    rotate: 50,
     //    stretch: 0,
     //    depth: 100,
     //    modifier: 1,
     //    slideShadows : false,
     //  },
     pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
     },
     breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          loopFillGroupWithBlank: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          loopFillGroupWithBlank: true,
        },
      }
   });
});
