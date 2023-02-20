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
const swiper3 = new Swiper(".equips .swiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  // calculateHeight:true,
  // autoHeight: true,
  navigation: {
    nextEl: ".equips .button--slider.next",
    prevEl: ".equips .button--slider.prev",
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

// мелкий слайдер  
const swiper4 = new Swiper(".mySwiper2", {
  // slidesPerView: 6,
  // loop: true,
  spaceBetween: 8,
  clickable: true,
  direction: 'vertical',
  freeMode: true,
  watchSlidesProgress: true,

});

// большой слайдер  
const swiper5 = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 32,
  // loop: true,
  navigation: {
    nextEl: ".mySwiper1 .swiper-button-next",
    prevEl: ".mySwiper1 .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper4,
  },
});

// синхронизируем два слайдера между собой
// swiper4.controller.control = swiper5
// swiper5.controller.control = swiper4