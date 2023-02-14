const swiper = new Swiper(".slider-promo .swiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".slider-promo .button--slider.next",
    prevEl: ".slider-promo .button--slider.prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
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

const swiper2 = new Swiper(".rates__slider .swiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  calculateHeight:true,
  navigation: {
    nextEl: ".rates__slider .button--slider.next",
    prevEl: ".rates__slider .button--slider.prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    }
  }
});