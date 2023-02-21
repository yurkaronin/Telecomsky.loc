// Get references to the necessary elements
const overlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.modal');
const buttons = document.querySelectorAll('[data-dialog-button]');
const closeButtons = document.querySelectorAll('.close-btn');

// Show a modal when its corresponding button is clicked
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const dialogId = button.getAttribute('data-dialog-button');
    const dialog = document.querySelector(`[data-dialog-modal='${dialogId}']`);
    document.body.style.overflow = 'hidden';
    dialog.classList.add('modal-show');
    overlay.classList.add('overlay-show');
  });
});

// Hide a modal when the overlay or close button is clicked
overlay.addEventListener('click', () => {
  modals.forEach(modal => {
    modal.classList.remove('modal-show');
  });
  overlay.classList.remove('overlay-show');
  document.body.style.overflow = 'auto';
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    document.body.style.overflow = 'auto';
    modal.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
  });
});
