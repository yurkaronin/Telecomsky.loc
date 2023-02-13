var swiper = new Swiper(".slider-promo .swiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".slider-promo .button--slider.next",
    prevEl: ".slider-promo .button--slider.prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
    }
  }
});