(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-read-open]'),
    closeModalBtn: document.querySelector('[data-modal-read-close]'),
    modal: document.querySelector('[data-read-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-read-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
