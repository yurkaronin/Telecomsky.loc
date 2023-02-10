// динамически подключаем глобальные стили и скрипты для слайдеров, 
// только на тех страницах, на которых есть слайды! 
if (document.querySelector('.swiper')) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './libs/swiper-bundle.min.css';
  document.querySelector('.connect-css-files').after(link);

  var scriptsJS = document.querySelector('script[src="./js/scripts.js"]');
  var swiperJS = document.createElement('script');
  swiperJS.src = './libs/swiper-bundle.min.js';
  scriptsJS.before(swiperJS);
}