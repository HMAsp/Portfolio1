import { checkLength, postFormData } from "./utilities.js";
import { validateEmail } from "./utilities.js";
import { showSuccessDialog } from "./utilities.js";
import { formErrorHander } from "./utilities.js";
import { validateForm } from "./utilities.js";
formErrorHander();
validateForm();

const scrollBtn = document.querySelector(".cta");
scrollBtn.addEventListener("click", function () {
  const portfolio = document.querySelector(".portfolio");
  portfolio.scrollIntoView({ behavior: "smooth" });
});

const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjInput = document.querySelector("#subj");
const messageInput = document.querySelector("#message");
const formBtn = document.querySelector(".formCta");

// formBtn.addEventListener("submit", function () {
//   if (formValidator()) {
//     // event.preventDefault();
//     showSuccessDialog();
//     // postFormData();
//   }
// });

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    showSuccessDialog();
    postFormData();
  }
});
