(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  const closeMenuOnLargeScreens = (mediaQuery) => {
    if (mediaQuery.matches) {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
    }
  };

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  mediaQuery.addEventListener('change', closeMenuOnLargeScreens);
  closeMenuOnLargeScreens(mediaQuery);

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
})();
