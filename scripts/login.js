import { navbar } from "../components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

let user_data = JSON.parse(localStorage.getItem("user_data")) || [];

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let userobj = { emailaddress: email, pass: password };
  let isSignedin = false;
  user_data.forEach(function (ele) {
    if (userobj.emailaddress == "" || userobj.pass == "") {
      alert("field is empty !");
      return;
    } else if (
      ele.email == userobj.emailaddress &&
      ele.password == userobj.pass
    ) {
      isSignedin = true;
      localStorage.setItem("login", JSON.stringify(ele));
      alert("You are successfully Logged in !");

      window.location.href = "./mens.html";
      window.location.href = "./index.html";

    } else if (user_data.length == 0) {
      alert("no user till now");
      return;
    }
  });
  if (isSignedin == false) {
    alert("user does not exist");
  }
});
