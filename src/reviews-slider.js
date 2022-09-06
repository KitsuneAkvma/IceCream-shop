//elementy nawigacji
const navbar = document.querySelector('.reviews__slide__nav__indicator');
const dots = Array.from(navbar.children);
const icons = [
  document.querySelector('.icon--home'),
  document.querySelector('.icon--elipse'),
  document.querySelector('.icon--elipse2'),
];

//elementy slideru
const track = document.querySelector('.reviews__slide__track');
const comments = Array.from(track.children);

//default styles
comments[1].style.opacity = '0';
comments[2].style.opacity = '0';

//event listeners dla kropek nawigacyjnych
dots[0].addEventListener('click', showComment1);
dots[1].addEventListener('click', showComment2);
dots[2].addEventListener('click', showComment3);

//prosty kod nadpisujący style (toporny)
function showComment1() {
  //chowanie pozostałych elementów
  comments[0].style.opacity = '1';
  comments[1].style.opacity = '0';
  comments[2].style.opacity = '0';
  //wskazanie slide na indicatorze (zmiana koloru)
  icons[0].style.fill = '#d41443';
  icons[1].style.fill = '#d9d9d9';
  icons[2].style.fill = '#d9d9d9';
}
function showComment2() {
  //chowanie pozostałych elementów
  comments[0].style.opacity = '0';
  comments[1].style.opacity = '1';
  comments[2].style.opacity = '0';
  //wskazanie slide na indicatorze (zmiana koloru)
  icons[0].style.fill = '#d9d9d9';
  icons[1].style.fill = '#d41443';
  icons[2].style.fill = '#d9d9d9';
}
function showComment3() {
  //chowanie pozostałych elementów
  comments[0].style.opacity = '0';
  comments[1].style.opacity = '0';
  comments[2].style.opacity = '1';
  //wskazanie slide na indicatorze (zmiana koloru)
  icons[0].style.fill = '#d9d9d9';
  icons[1].style.fill = '#d9d9d9';
  icons[2].style.fill = '#d41443';
}
