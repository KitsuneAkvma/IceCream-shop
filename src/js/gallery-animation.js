const scrollElements = document.querySelectorAll('.js-scroll');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return elementTop <= windowHeight / dividend;
};

const elementOutOfView = el => {
  const elementTop = el.getBoundingClientRect().top;
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return elementTop > windowHeight;
};

const displayScrollElement = element => {
  element.classList.add('scrolled');
};

const hideScrollElement = element => {
  element.classList.remove('scrolled'); // Fixed class name from 'undefined' to 'scrolled'
};

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutOfView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);
