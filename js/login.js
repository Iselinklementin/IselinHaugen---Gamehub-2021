const form = document.querySelector("form");
const button = document.querySelector(".button");

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const pswError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const buttonError = document.querySelector(".error-button")

function validate() {

    if (validateEmail(email.value)) {
        email.style.borderColor = "rgb(42, 179, 42)";
        emailError.style.display = "none";
    } else {
        email.style.borderColor = "red";
        emailError.style.display = "block";
    }

    if (checkLength(password.value, 7)) {
        password.style.borderColor = "rgb(42, 179, 42)";
        pswError.style.display = "none";
    } else {
        password.style.borderColor = "red";
        pswError.style.display = "block";
    }
    /* reqPassword(input); */

    if (checkLength(password.value, 7) && validateEmail(email.value)) {
        button.disabled = false;

    } else {
        button.disabled = true;
        buttonError.style.display = "block";
    }
}

function checkLength(value, len) {
    if (value.trim().length > len) {
    return true;
} else {
    return false;
}
};

 function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches
};

validateEmail();

function submitForm(event) {
    event.preventDefault();

    button.disabled = true;
    form.reset();
}

button.addEventListener("submit", submitForm);
email.addEventListener("keyup", validate);
password.addEventListener("keyup", validate);