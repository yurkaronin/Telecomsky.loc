// слайдер со спец предложениями 
if (document.querySelector('.slider-promo .swiper')) {
  const swiper = new Swiper(".slider-promo .swiper", {
    slidesPerView: 3,
    spaceBetween: 32,
    grabCursor: true,
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
};

// Наши тарифы 
if (document.querySelector('.rates .swiper')) {
  const swiper2 = new Swiper(".rates .swiper", {
    slidesPerView: 4,
    spaceBetween: 32,
    grabCursor: true,
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
};

// Оборудование
if (document.querySelector('.equips .swiper')) {
  const swiper3 = new Swiper(".equips .swiper", {
    slidesPerView: 4,
    spaceBetween: 32,
    grabCursor: true,
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
};

// мелкий слайдер 
if (document.querySelector('.mySwiper2')) {
  const swiper4 = new Swiper(".mySwiper2", {
    slidesPerView: 12,
    // loop: true,
    spaceBetween: 8,
    clickable: true,
    direction: 'vertical',
    freeMode: true,
    watchSlidesProgress: true,

  });
};

// большой слайдер 
if (document.querySelector('.mySwiper1')) {
  const swiper5 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 32,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ".mySwiper1 .button--slider.next",
      prevEl: ".mySwiper1 .button--slider.prev",
    },
    thumbs: {
      swiper: swiper4,
    },
  });
};
