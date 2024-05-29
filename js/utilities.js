// // VALUE LENGTH CHECKER
// function checkLength(value, len) {
//   if (value.length > len) {
//     return true;
//   } else {
//     return false;
//   }
// }
// export { checkLength };

// // FORM VALIDATION
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const subjInput = document.querySelector("#subj");
// const messageInput = document.querySelector("#message");

// function formErrorHander(event) {
//   nameInput.addEventListener("input", function () {
//     if (checkLength(nameInput.value, 3)) {
//       nameInput.style.borderBottom = "5px solid lightgreen";
//     } else {
//       nameInput.style.borderBottom = "5px solid red";
//     }

//     emailInput.addEventListener("input", function () {
//       if (validateEmail(emailInput.value)) {
//         emailInput.style.borderBottom = "5px solid lightgreen";
//       } else {
//         emailInput.style.borderBottom = "5px solid red";
//       }
//     });

//     subjInput.addEventListener("input", function () {
//       if (checkLength(subjInput.value, 5)) {
//         subjInput.style.borderBottom = "5px solid lightgreen";
//       } else {
//         subjInput.style.borderBottom = "5px solid red";
//       }
//     });

//     messageInput.addEventListener("input", function () {
//       if (checkLength(messageInput.value, 9)) {
//         messageInput.style.borderBottom = "5px solid lightgreen";
//       } else {
//         messageInput.style.borderBottom = "5px solid red";
//       }
//     });
//   });
// }
// export { formErrorHander };

// // VALIDATES FORM
// function validateForm() {
//   if (
//     checkLength(nameInput.value, 3) &&
//     validateEmail(emailInput.value) &&
//     checkLength(subjInput.value, 5) &&
//     checkLength(messageInput.value, 9)
//   ) {
//     //   showHideMessage();
//     return true;
//   } else {
//     return false;
//   }
// }
// export { validateForm };

// //  VALIDATE EMAIL FORMAT
// function validateEmail(email) {
//   const regEx = /\S+@\S+\.\S+/;
//   const patternMatches = regEx.test(email);
//   return patternMatches;
// }
// export { validateEmail };

// // POST connect FORMDATA
// function postFormData(cont) {
//   const formId = "4";
//   const url = `https://codewithspooks.com/portfolio1/wp-json/connect-form-7/v1/connect-forms/${formId}/feedback`;

//   const formData = new FormData(cont);

//   fetch(url, {
//     method: "POST",
//     body: formData,
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log("Form saved:", data);
//     })
//     .catch(function (error) {
//       console.error(("Error:", error));
//     });
// }
// export { postFormData };

// // SHOW FORM SUCCESS MESSAGE
// function showSuccessDialog() {
//   const dialog = document.querySelector(".thankYouForm");
//   const btn = document.querySelector(".formCta");

//   dialog.style.display = "flex";
//   document.addEventListener("click", function (event) {
//     if (!btn.contains(event.target) && !dialog.contains(event.target)) {
//       dialog.style.display = "none";
//       btn.style.boxShadow = "0px 0px 25px red";
//       clearFormInputs();
//     }
//   });
// }
// export { showSuccessDialog };

// // CLEAR FORM INPUTS
// function clearFormInputs() {
//   const form = document.querySelector("form");
//   const elements = form.elements;

//   for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];
//     element.value = "";
//   }
// }
