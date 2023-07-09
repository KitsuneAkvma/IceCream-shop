const navbar = document.querySelector(".reviews__slide__nav__indicator");

const dots = navbar && Array.from(navbar.children);
const icons = Array.from(
  document.querySelectorAll(".reviews__slide__nav__indicator .icon"),
);
const person = document.querySelector(".reviews__slide__nav__person");

const comments = Array.from(
  document.querySelectorAll(".reviews__slide__track > *"),
);

const slideData = [
  { commentIndex: 0, color: "#d41443", person: "Emily, Los Angeles" },
  { commentIndex: 1, color: "#d41443", person: "Ann, New York" },
  { commentIndex: 2, color: "#d41443", person: "Marry, Chicago" },
];

function showSlide(commentIndex) {
  comments.forEach((comment, index) => {
    comment.style.opacity = index === commentIndex ? "1" : "0";
  });

  icons.forEach((icon, index) => {
    icon.style.fill =
      index === commentIndex ? slideData[commentIndex].color : "#d9d9d9";
  });

  person && (person.innerHTML = slideData[commentIndex].person);
}

if (dots) {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });
}

// Set initial state
showSlide(0);
