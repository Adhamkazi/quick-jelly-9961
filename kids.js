import { navbar } from "./components/navbar.js";
console.log(navbar);

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





let slidesContainerMain = document.getElementById("slides-container-a");
let slideDiv = document.querySelector(".slide");
let forPrevButton = document.getElementById("slide-arrow-prev-a");
let ForNextButton = document.getElementById("slide-arrow-next-a");

ForNextButton.addEventListener("click", () => {
    let slideWidth = slideDiv.clientWidth;
    slidesContainerMain.scrollLeft += slideWidth;
});

forPrevButton.addEventListener("click", () => {
    let slideWidth = slideDiv.clientWidth;
    slidesContainerMain.scrollLeft -= slideWidth;
});