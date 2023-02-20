const faqList = document.querySelector('.faq__list');
const faqItems = document.querySelectorAll('.faq__item');

// Expand the first accordion by default
faqItems[0].classList.add('isActive');

faqList.addEventListener('click', (event) => {
  const item = event.target.closest('.faq__item');
  const answer = item.querySelector('.faq__answer');

  // Collapse all other accordions
  faqItems.forEach(faqItem => {
    if (faqItem !== item && faqItem.classList.contains('isActive')) {
      faqItem.classList.remove('isActive');
      faqItem.querySelector('.faq__answer').style.paddingBottom = '0';
    }
  });

  // Expand/collapse the clicked accordion
  if (item.classList.contains('isActive')) {
    item.classList.remove('isActive');
    answer.style.paddingBottom = '0';
  } else {
    item.classList.add('isActive');
    answer.style.paddingBottom = '33px';
  }
});
