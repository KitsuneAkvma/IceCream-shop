const refs = {
  openModalBtn: document.querySelector("[about-data-modal-open]"),
  closeModalBtn: document.querySelector("[about-data-modal-close]"),
  modal: document.querySelector("[about-data-modal]"),
};
function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}
if (refs.openModalBtn && refs.closeModalBtn && refs.modal) {
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
}
