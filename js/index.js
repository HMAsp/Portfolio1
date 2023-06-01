import { postFormData } from "./utilities.js";
import { showSuccessDialog } from "./utilities.js";
import { formErrorHander } from "./utilities.js";
import { validateForm } from "./utilities.js";
formErrorHander();
validateForm();

const scrollPort = document.querySelector("#portF");
scrollPort.addEventListener("click", function () {
  const portfolio = document.querySelector(".portfolio");
  portfolio.scrollIntoView({ behavior: "smooth" });
});

const about = document.querySelector("#about");
about.addEventListener("click", function () {
  const about = document.querySelector(".spookyBanner");
  about.scrollIntoView({ behavior: "smooth" });
});

const contact = document.querySelector("#contact");
contact.addEventListener("click", function () {
  const contact = document.querySelector(".contact");
  contact.scrollIntoView({ behavior: "smooth" });
});

const toTop = document.querySelector("#spookyScrollTop");
toTop.addEventListener("click", function () {
  const home = document.querySelector(".indexWindow");
  home.scrollIntoView({ behavior: "smooth" });
});

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    showSuccessDialog();
    postFormData();
  }
});
