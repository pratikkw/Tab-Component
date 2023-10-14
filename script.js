"use strict";

const btns = document.querySelectorAll(".btn");
const contents = document.querySelectorAll(".content");
const btnContainer = document.querySelector(".btn__container");
const contentContainer = document.querySelector(".content__container");

function activeContent(num) {
  contents.forEach((item) => item.classList.remove("content--active"));
  document.querySelector(`.content-${num}`).classList.add("content--active");
}

btnContainer.addEventListener("click", function (e) {
  const target = e.target;
  if (e.target.className === "btn__container") return;

  btns.forEach((item) => item.classList.remove("btn--active"));
  target.classList.add("btn--active");

  activeContent(e.target.dataset.btn);
});
