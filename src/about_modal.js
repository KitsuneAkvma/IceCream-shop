(() => {
  const refs = {
    openModalBtn: document.querySelector('[about-data-modal-open]'),
    closeModalBtn: document.querySelector('[about-data-modal-close]'),
    modal: document.querySelector('[about-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
