const faqList = document.querySelector('.faq__list');
if(faqList) {
  faqList.addEventListener('click', (event) => {
    const item = event.target.closest('.faq__item');
    const answer = item.querySelector('.faq__answer');
  
    if (item.classList.contains('isActive')) {
      item.classList.remove('isActive');
      answer.style.paddingBottom = '0';
    } else {
      item.classList.add('isActive');
      answer.style.paddingBottom = '33px';
    }
  });
}


