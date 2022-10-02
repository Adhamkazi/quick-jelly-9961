import { navbar } from "./components/navbar.js";
// console.log(navbar);
import { footer } from "./components/footer.js";

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

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
