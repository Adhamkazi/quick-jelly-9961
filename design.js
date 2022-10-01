import { navbar } from "./components/navbar.js";
// console.log(navbar);

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();



let slidesContainer = document.getElementById("slides-container");
let slide = document.querySelector(".slide");
let prevButton = document.getElementById("slide-arrow-prev");
let nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    let slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    let slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});
