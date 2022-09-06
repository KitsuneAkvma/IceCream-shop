const navbar = document.querySelector('.reviews__slide__nav__indicator');
const dots = Array.from(navbar.children);

const track = document.querySelector('.reviews__slide__track');
const comments = Array.from(track.children);

comments[1].style.display = 'none';
comments[2].style.display = 'none';

array.forEach(dots => {
  dots.addEventListener('click', console.log('elo'));
});
