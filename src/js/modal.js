const refs = {
  modal1: {
    openBtn: document.querySelector("[data-modal-open]"),
    closeBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  },
  modal2: {
    openBtn: document.querySelector("[buy-open]"),
    closeBtn: document.querySelector("[buy-close]"),
    modal: document.querySelector("[data-modal]"),
  },
};

const toggleModal = (modalRef) => {
  modalRef.modal.classList.toggle("is-hidden");
};

if (refs.modal1.openBtn && refs.modal1.closeBtn.ref.modal.modal) {
  refs.modal1.openBtn.addEventListener("click", () => toggleModal(refs.modal1));
  refs.modal1.closeBtn.addEventListener("click", () =>
    toggleModal(refs.modal1),
  );
}
if (refs.modal2.openBtn && refs.modal2.closeBtn.ref.modal2.modal) {
  refs.modal2.openBtn.addEventListener("click", () => toggleModal(refs.modal2));
  refs.modal2.closeBtn.addEventListener("click", () =>
    toggleModal(refs.modal2),
  );
}
