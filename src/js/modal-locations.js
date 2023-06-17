var modal = document.querySelector('.modal-locations-backdrop');
var trigger = document.querySelector('.open-modal');
var closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
