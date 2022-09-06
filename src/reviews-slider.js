const btns = document.querySelectorAll('.reviews__slide__nav__indicator');

const imageContainer = document.querySelector('.reviews__slide__item__image');
const commentContainer = document.querySelector('.reviews__slide__item__content__comment');

const image1 = '/customer1.355e57bc.png';
const image1_2x = '/customer1@2x.cca792ec.png 2x';
const image2 = '/customer2.55b4c133.png';
const image2_2x = '/customer2@2x.e5254b95.png 2x';
const image3 = '/customer3.d9a4f070.png';
const image3_2x = '/customer3@2x.682257be.png 2x';

const comment1 =
  'Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus.';
const comment2 =
  'Donec nec placerat tellus, vel pharetra lorem. Suspendisse et rutrum enim, et finibus nisi. In aliquam urna dui, a rhoncus mauris tincidunt eget. Sed lacinia in risus id lobortis. Quisque ut velit vel augue tincidunt tincidunt.';
const comment3 =
  'Ut eu dui urna. Vestibulum eu orci non orci blandit pharetra pretium nec nulla. Ut non enim sit. ';

btn1.addEventListener('click', changeCommentTo1);
btn2.addEventListener('click', changeCommentTo2);
btn3.addEventListener('click', changeCommentTo3);

function changeCommentTo1() {
  imageContainer.setAttribute('src', image1);
  imageContainer.setAttribute('srcset', image1_2x);
  commentContainer.innerHTML = comment1;
}
function changeCommentTo2() {
  imageContainer.setAttribute('src', image2);
  imageContainer.setAttribute('srcset', image2_2x);
  commentContainer.innerHTML = comment2;
}
function changeCommentTo3() {
  imageContainer.setAttribute('src', image3);
  imageContainer.setAttribute('srcset', image3_2x);
  commentContainer.innerHTML = comment3;
}
