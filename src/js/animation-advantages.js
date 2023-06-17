const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
checkBoxes(); // Initial check on page load

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show'); // Fixed class name from 'undefined' to 'show'
    }
  });
}
