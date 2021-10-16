"use strict";
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

// const firstNameErr = document.querySelector(".first-error");
// const lastNameErr = document.querySelector(".last-error");
// const emailErr = document.querySelector(".email-error");
// const passwordErr = document.querySelector(".password-error");

const formArray = [firstName, lastName, email, password];
// const errArray = [firstNameErr, lastNameErr, emailErr, passwordErr];

let firstNameErr,
  lastNameErr,
  emailErr,
  invalidEmail,
  passwordErr = false;

const checkEmail = function (entry, i) {
  if (
    entry.classList.contains("email") &&
    entry.value.includes("@") &&
    // invalidEmail &&
    // (entry.classList.contains("email") &&
    entry.value.includes(".com") //&&
    // !invalidEmail)
  ) {
    ///////
    if (entry.nextElementSibling) {
      document.querySelector(`.error${i}-2`).style.display = "none";
      invalidEmail = false;
    } else {
      invalidEmail = false;
    }

    ///////
  } else if (
    (entry.value.includes(".com") && !invalidEmail) ||
    (entry.value.includes("@") && !invalidEmail)
  ) {
    // if (entry.nextElementSibling) {
    let html = `<blockquote class="error${i}-2">Looks like an invalid email.</blockquote>`;
    entry.insertAdjacentHTML("afterend", html);
    entry.style.backgroundImage = "url('images/icon-error.svg')";
    entry.style.backgroundRepeat = "no-repeat";
    entry.style.backgroundPosition = "right";
    invalidEmail = true;
    // document.querySelector(`.error${i}-2`).style.display = "none";

    // entry.style.backgroundImage = "none";
  } else if (
    (!entry.value.includes(".com") && !invalidEmail) ||
    (!entry.value.includes("@") && !invalidEmail)
  ) {
    let html = `<blockquote class="error${i}-2">Looks like an invalid email.</blockquote>`;
    entry.insertAdjacentHTML("afterend", html);
    entry.style.backgroundImage = "url('images/icon-error.svg')";
    entry.style.backgroundRepeat = "no-repeat";
    entry.style.backgroundPosition = "right";
    invalidEmail = true;
  } else {
    console.log("no sibling element");
  }
};

const renderError = function (data, i) {
  if (
    data.classList.contains("firstName") &&
    !firstNameErr
    // !data.classList.contains("-error")
  ) {
    // data.classList.toggle("-error");
    let html = `<blockquote class="error${i}">First name cannot be empty</blockquote>`;
    data.insertAdjacentHTML("afterend", html);
    firstNameErr = true;
  } else if (
    data.classList.contains("lastName") &&
    !lastNameErr
    // !data.classList.contains("-error")
  ) {
    // data.classList.toggle("-error");
    let html = `<blockquote class="error${i}">Last name cannot be empty</blockquote>`;
    data.insertAdjacentHTML("afterend", html);
    lastNameErr = true;
  } else if (
    data.classList.contains("email") &&
    !emailErr
    // !data.classList.contains("-error")
  ) {
    // data.classList.toggle("-error");
    let html = `<blockquote class="error${i}">Email cannot be empty.</blockquote>`;
    data.insertAdjacentHTML("afterend", html);
    emailErr = true;
  } else if (
    data.classList.contains("password") &&
    !passwordErr
    // !data.classList.contains("-error")
  ) {
    // data.classList.toggle("-error");
    let html = `<blockquote class="error${i}">Password cannot be empty</blockquote>`;
    data.insertAdjacentHTML("afterend", html);
    passwordErr = true;
  } else {
    console.log("Field is still blank");
  }
};

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
      // !invalidEmail ? checkEmail(entry, i) : console.log("Valid email");
      checkEmail(entry, i);

      if (entry.classList.value === "firstName") firstNameErr = false;
      if (entry.classList.value === "lastName") lastNameErr = false;
      if (entry.classList.value === "email") emailErr = false;
      // if (
      //   entry.classList.value === "email" &&
      //   !entry.value.includes("@") &&
      //   !invalidEmail
      // ) {
      //   let html = `<blockquote class="error${i}">Looks like this is not a valid email</blockquote>`;
      //   entry.insertAdjacentHTML("afterend", html);
      //   invalidEmail = true;
      // } else if (
      //   entry.classList.value === "email" &&
      //   !entry.value &&
      //   invalidEmail
      // ) {
      //   invalidEmail = false;
      //   document.querySelector(`.error2-1`).style.display = "none";
      // } else {
      //   invalidEmail = false;
      //   document.querySelector(`.error${i}-1`).style.display = "none";
      // }
      if (entry.classList.value === "password") passwordErr = false;
    }
    // if (entry.classList.value === "email" && !entry.value.includes("@")) {
    //   let html = `<blockquote class="error${i}">Looks like this is not a valid email</blockquote>`;
    //   entry.insertAdjacentHTML("afterend", html);
    // } else {
    //   emailErr
    //     ? (document.querySelector(`.error${i}`).style.display = "none")
    //     : console.log("no email error");
  });
};
//   });
// };
