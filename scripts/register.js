import { navbar } from "../components/navbar.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

//----------------------------------------

let form = document.getElementById("form");
let user_data = [];
form.addEventListener("submit", () => {
  event.preventDefault();

  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user_obj = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  };
  user_data.push(user_obj);
  //console.log(user_data);
  if (
    user_obj.firstname == "" ||
    user_obj.lastname == "" ||
    user_obj.email == "" ||
    user_obj.password == ""
  ) {
    alert("Field is Empty");
    return;
  }

  localStorage.setItem("user_data", JSON.stringify(user_data));
  alert("You are successfully registerd !");
  window.location.href = "login.html";
});
