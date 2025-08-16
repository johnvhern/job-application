import {
  animate,
  scroll,
} from "https://cdn.jsdelivr.net/npm/motion@12.23.12/+esm";

const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  if (i >= slideCount) index = 0;
  else if (i < 0) index = slideCount - 1;
  else index = i;

  slides.style.transform = `translateX(${-index * 100}%)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}

document
  .querySelector(".next")
  .addEventListener("click", () => showSlide(index + 1));
document
  .querySelector(".prev")
  .addEventListener("click", () => showSlide(index - 1));

dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => showSlide(idx));
});

document.querySelectorAll(".section-container > div").forEach((item) => {
  scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
    target: item,
    offset: ["start end", "end end", "start start", "end start"],
  });
});
