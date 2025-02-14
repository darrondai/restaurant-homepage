import { aboutPageSetup } from "./aboutPage.js";
import { menuPageSetup } from "./menuPage.js";
import { homePageSetup } from "./homePage.js";

homePageSetup();

// tab switching logic
// when button clicked, clear content and fill with other tab
const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", homePageSetup);

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", menuPageSetup);

const aboutBtn = document.querySelector("#about-btn");
aboutBtn.addEventListener("click", aboutPageSetup);
