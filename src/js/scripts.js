// // Web Font Loader - Prevent flashing when loading web-fonts
// $(window).on("load", function () {
//   window.WebFontConfig = {
//     custom: {
//       families: ["Inter:n3,n4,n5,n6,n7,n8"],
//       urls: ["/css/top.css"],
//     },
//   };
//   (function () {
//     var wf = document.createElement("script");
//     wf.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
//     wf.type = "text/javascript";
//     wf.async = "true";
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(wf, s);
//   })();
// });

// Slider Case Study
const swiper = new Swiper(".casestudy-content", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,

  navigation: {
    nextEl: ".slide-button-next",
    prevEl: ".slide-button-prev",
  },

  pagination: {
    el: ".casestudy-slide-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Slider Testimonial
const swiperTestimonial = new Swiper(".testimonial-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,

  navigation: {
    nextEl: ".testimnial-button-next",
    prevEl: ".testimnial-button-prev",
  },
});
