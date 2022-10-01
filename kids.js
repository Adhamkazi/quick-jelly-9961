import { navbar } from "./components/navbar.js";
console.log(navbar);

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();


let slidec = document.getElementById("slides-container");
let a = document.querySelector(".slide");
let prevbtn = document.getElementById("slide-arrow-prev");
let nextbtn = document.getElementById("slide-arrow-next");

nextbtn.addEventListener("click", () => {
    let slideWidth = a.clientWidth;
    slidec.scrollLeft += slideWidth;
});

prevbtn.addEventListener("click", () => {
    let slideWidth = a.clientWidth;
    slidec.scrollLeft -= slideWidth;
});