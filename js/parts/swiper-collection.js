// слайдер со спец предложениями 
const swiper = new Swiper(".slider-promo .swiper", {
  slidesPerView: 3,
  spaceBetween: 32,
  // autoHeight: true,
  navigation: {
    nextEl: ".slider-promo .button--slider.next",
    prevEl: ".slider-promo .button--slider.prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});
// Наши тарифы 
const swiper2 = new Swiper(".rates .swiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  // calculateHeight:true,
  // autoHeight: true,
  navigation: {
    nextEl: ".rates .button--slider.next",
    prevEl: ".rates .button--slider.prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    }
  }
});
// Оборудование
const swiper3 = new Swiper(".equip .swiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  // calculateHeight:true,
  // autoHeight: true,
  navigation: {
    nextEl: ".equip .button--slider.next",
    prevEl: ".equip .button--slider.prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  }
});