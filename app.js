"use strict";
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const emailValid = document.querySelector(".error2-2");
const formArray = [firstName, lastName, email, password];

let firstNameErr,
  lastNameErr,
  emailErr,
  invalidEmail,
  passwordErr = false;

emailValid.style.display = "none";
// const invalidEmailMsg = function (entry, i) {
//   let html = `<blockquote class="error${i}-2">Looks like this is not an email.</blockquote>`;
//   entry.insertAdjacentHTML("afterend", html);
//   entry.style.backgroundImage = "url('images/icon-error.svg')";
//   entry.style.backgroundRepeat = "no-repeat";
//   entry.style.backgroundPosition = "right";
// };

const invalidEmailMsg = function () {
  // let html = `<blockquote class="error2-2">Looks like this is not an email.</blockquote>`;
  // email.insertAdjacentHTML("afterend", html);
  email.style.backgroundImage = "url('images/icon-error.svg')";
  email.style.backgroundRepeat = "no-repeat";
  email.style.backgroundPosition = "right";
  emailValid.style.display = "block";
};

// const checkEmail = function (entry, i) {
//   if (
//     entry.classList.contains("email") &&
//     entry.value.includes("@") &&
//     entry.value.includes(".com")
//   ) {
//     invalidEmail = false;
//     !invalidEmail
//       ? console.log("Valid email")
//       : (document.querySelector(`.error${i}-2`).style.display = "none");
//   } else if (
//     (entry.value.includes(".com") && !invalidEmail) ||
//     (entry.value.includes("@") && !invalidEmail)
//   ) {
//     invalidEmailMsg(entry, i);
//     invalidEmail = true;
//   } else if (
//     (entry.classList.contains("email") &&
//       !entry.value.includes(".com") &&
//       !invalidEmail) ||
//     (!entry.value.includes("@") && !invalidEmail)
//   ) {
//     invalidEmailMsg(entry, i);
//     invalidEmail = true;
//   } else {
//     console.log("Invalid email");
//   }
// };

const checkEmail = function () {
  if (email.value.includes("@") && email.value.includes(".com")) {
    if (!invalidEmail) {
      console.log("Valid email");
    } else {
      emailValid.style.display = "none";
      invalidEmail = false;
    }
  } else if (email.value === "") {
    document.querySelector(`.error2-2`).style.display = "none";
    // let html = `<blockquote class="error2">Email cannot be empty.</blockquote>`;
    // email.insertAdjacentHTML("afterend", html);
    // emailErr = true;
  } else if (
    (email.value.includes(".com") && !invalidEmail) ||
    (email.value.includes("@") && !invalidEmail)
  ) {
    invalidEmailMsg();
    invalidEmail = true;
  } else if (
    (!email.value.includes(".com") && !invalidEmail) ||
    (!email.value.includes("@") && !invalidEmail)
  ) {
    invalidEmailMsg();
    invalidEmail = true;
  } else {
    console.log("Invalid email");
  }
};

const renderError = function (data, i) {
  if (
    data.classList.contains("firstName") &&
    data.classList.contains("-error")
  ) {
    let html = `<blockquote class="error${i}">First name cannot be empty</blockquote>`;
    data.insertAdjacentHTML("afterend", html);
    firstNameErr = true;
  } else if (data.classList.contains("lastName") && !lastNameErr) {
    let html = `<blockquote class="error${i}">Last name cannot be empty</blockquote>`;
    data.insertAdjacentHTML("afterend", html);
    lastNameErr = true;
  } else if (data.classList.contains("email") && !emailErr) {
    let html = `<blockquote class="error${i}">Email cannot be empty.</blockquote>`;
    data.insertAdjacentHTML("afterend", html);
    emailErr = true;
    invalidEmail = false;
    document.querySelector(`.error2-2`).style.display = "none";
  } else if (data.classList.contains("password") && !passwordErr) {
    let html = `<blockquote class="error${i}">Password cannot be empty</blockquote>`;
    data.insertAdjacentHTML("afterend", html);
    passwordErr = true;
  } else {
    console.log("Field is still blank");
  }
};

// const renderError = function (data) {
//     if(data.)
//     let html1 = `<blockquote class="error0">First name cannot be empty</blockquote>`;
//     data.insertAdjacentHTML("afterend", html1);

//     let html2 = `<blockquote class="error1">Last name cannot be empty</blockquote>`;
//     data.insertAdjacentHTML("afterend", html2);

//     let html3 = `<blockquote class="error2">Email cannot be empty.</blockquote>`;
//     data.insertAdjacentHTML("afterend", html3);

//     let html4 = `<blockquote class="error3">Password cannot be empty</blockquote>`;
//     data.insertAdjacentHTML("afterend", html4);
// };

const valueCheck = function (data, i) {
  if (!data.classList.contains("-error")) {
    data.classList.toggle("-error");
    renderError(data, i);
  }
};

const submitValues = function () {
  formArray.forEach(function (entry, i) {
    if (!entry.value) {
      entry.setAttribute("placeholder", "");
      entry.style.backgroundImage = "url('images/icon-error.svg')";
      entry.style.backgroundRepeat = "no-repeat";
      entry.style.backgroundPosition = "right";

      valueCheck(entry, i);
    } else {
      entry.style.backgroundImage = "none";

      if (!entry.nextElementSibling) {
        console.log("Value present");
      } else if (entry.classList.contains("-error")) {
        entry.classList.toggle("-error");
        document.querySelector(`.error${i}`).style.display = "none";
        console.log(`Error class removed for ${entry.classList.value}.`);
      }

      checkEmail(entry, i);

      if (entry.classList.value === "firstName") firstNameErr = false;
      if (entry.classList.value === "lastName") lastNameErr = false;
      if (entry.classList.value === "email") emailErr = false;

      if (entry.classList.value === "password") passwordErr = false;
    }
  });
};
