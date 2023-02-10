const buttonMenu = document.querySelector('.button--menu');
const headerMobile = document.querySelector('.header__mobile');
const headerMobileNavigation = document.querySelector('.header__mobile-navigation');
const headerMobileSupport = document.querySelector('.header__mobile-support');
const headerNavigationList = document.querySelector('.header__navigation-list');
const headerSupportList = document.querySelector('.header__support-list');

buttonMenu.addEventListener('click', function() {
  buttonMenu.classList.toggle('isActive');
  headerMobile.classList.toggle('isActive');

  if (headerMobileNavigation.children.length === 0) {
    headerMobileNavigation.appendChild(headerNavigationList.cloneNode(true));
  }

  if (headerMobileSupport.children.length === 0) {
    headerMobileSupport.appendChild(headerSupportList.cloneNode(true));
  }
});