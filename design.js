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

//-----------------FOOTER FORM--------------
document.getElementById("submit_footer").addEventListener("click", getformData);

let yooxUserArr = JSON.parse(localStorage.getItem("YooxUser")) || [];

function getformData() {
  //console.log("aaya")

  //   let email = document.getElementById("f_email").value;
  //   var validRegex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (validRegex.f_email(email)) {
  //   } else {
  //     alert("please Enter a valid");
  //   }

  var gender;

  if (document.getElementById("male").checked) {
    gender = document.getElementById("male").value;
  } else {
    gender = document.getElementById("female").value;
  }
  // console.log(gender);

  //  let ischecked = document.querySelector("#check").checked ? "yes" : "no";
  //console.log(ischecked);

  let userOBJ = {
    email,
    gender,
  };

  yooxUserArr.push(userOBJ);

  localStorage.setItem("YooxUser", JSON.stringify(yooxUserArr));
  alert("your details saved");
  document.getElementById("f_email").value = "";
}
