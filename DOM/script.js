"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const allButton = document.getElementsByTagName("button");
console.log(allButton);

const header = document.querySelector(".header");

const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class='btn btn--close-cookie'>Got it!</button>";

header.prepend(message);

message.style.backgroundColor = "#373a47";
message.style.padding = "10px";
message.style.width = "120%";

const twitterLink = document.querySelector(".twitter-link");
console.log(twitterLink.getAttribute("href"));

message.classList.add("slide-in");
message.classList.remove("slide-in");
message.classList.toggle("slide-in");
message.classList.contains("slide-in");

// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", function (e) {
//   alert("h1");
// });

// const alertH1 = function (e) {
//   alert("h1");
// };

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
