"use strict";
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const emailInvalid = document.querySelector(".invalidEmail");
const formArray = [firstName, lastName, email, password];

//Initial conditions
let firstNameErr,
  lastNameErr,
  emailErr,
  invalidEmail,
  passwordErr = false;

emailInvalid.style.display = "none";

//check email to see if it is a valid email or not
const checkEmail = function () {
  if (email.value.includes("@") && email.value.includes(".com")) {
    if (!invalidEmail) {
      console.log("Valid email");
    } else {
      emailInvalid.style.display = "none";
      invalidEmail = false;
    }
  } else if (email.value === "") {
    document.querySelector(`.error2-2`).style.display = "none";
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
    email.style.backgroundImage = "url('images/icon-error.svg')";
  }
};

//display invalid email message
const invalidEmailMsg = function () {
  email.style.backgroundImage = "url('images/icon-error.svg')";
  email.style.backgroundRepeat = "no-repeat";
  email.style.backgroundPosition = "right";
  emailInvalid.style.display = "block";
};

//Display error message for blank fields
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
    emailInvalid.style.display = "none";
  } else if (data.classList.contains("password") && !passwordErr) {
    let html = `<blockquote class="error${i}">Password cannot be empty</blockquote>`;
    data.insertAdjacentHTML("afterend", html);
    passwordErr = true;
  } else {
    console.log("Field is still blank");
  }
};

//Check if there are any inputs in each section of form
const valueCheck = function (data, i) {
  if (!data.classList.contains("-error")) {
    data.classList.toggle("-error");
    renderError(data, i);
  }
};

//Submit form
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
