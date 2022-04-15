const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".nav-bar");
const close = document.querySelector(".toggle-close");
const hamburger = document.querySelector(".toggle-hamburger");
var one = document.querySelector(".circle-one");
var two = document.querySelector(".circle-two");
var three = document.querySelector(".circle-three");
var four = document.querySelector(".circle-four");
var slide = document.querySelector(".slide-show");

toggle.addEventListener("click", () => {
  close.classList.toggle("show");
  navbar.classList.toggle("show");
  hamburger.classList.toggle("show");
});

// testominal slider for customer

const arrange = [one, two, three, four];

arrange[0].addEventListener("click", () => {
  slide.style.transform = "translate(0px)";
});

arrange[1].addEventListener("click", () => {
  slide.style.transform = "translate(-350px)";
});

arrange[2].addEventListener("click", () => {
  slide.style.transform = "translate(-700px)";
});

arrange[3].addEventListener("click", () => {
  slide.style.transform = "translate(-1050px)";
});
