(() => {
  const refs = {
    
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
closeHomeMenuBtn: document.querySelector('[data-home-menu-close]'),
closeAboutMenuBtn: document.querySelector('[data-about-menu-close]'),
closeHowMenuBtn: document.querySelector('[data-how-menu-close]'),
closeOurMenuBtn: document.querySelector('[data-our-menu-close]'),
    closeContMenuBtn: document.querySelector('[data-cont-menu-close]'),
    closeMobileMenuBtn: document.querySelector('[data-mobile-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
 
  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeHomeMenuBtn.addEventListener('click', toggleModal);
  refs.closeAboutMenuBtn.addEventListener('click', toggleModal);
refs.closeHowMenuBtn.addEventListener('click', toggleModal);
refs.closeOurMenuBtn.addEventListener('click', toggleModal);
  refs.closeContMenuBtn.addEventListener('click', toggleModal);
   refs.closeMobileMenuBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();