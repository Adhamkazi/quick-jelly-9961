// const getCountry = async () => {
//   let con_div = document.getElementById("country");
//   try {
//     let url = await fetch("https://restcountries.eu/rest/v2/all");
//     console.log(url);
//     let res = res.json();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getCountry();

import { navbar } from "../components/navbar.js";

console.log(navbar);

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
