import {footer} from "./components/footer.js"
let footer_div=document.getElementById("footer")
footer_div.innerHTML=footer();

import { navbar } from "./components/navbar.js";
// import { footer } from "./components/footer.js";
console.log(navbar);

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();