/* <i class="far fa-check-circle"></i> 
<i class="far fa-times-circle"></i> 
<i class="fas fa-exclamation-triangle"></i> */


// const check = document.createElement("i")
// check.className = "far fa-check-circle"

// const fail = document.createElement("i");
// fail.className = "far fa-times-circle";

// const check = document.querySelector(".fa-check-circle")
// const nameLabel = document.querySelector(".name")

// const emailLabel = document.querySelector(".email");
// const triangle = document.querySelector(".fa-exclamation-triangle");

// const test = document.querySelector("h1")

const button = document.querySelector("button")
const email = document.querySelector("#email");
const form = document.querySelectorAll("form");

const fullName = document.querySelector(".fullname");
const nameInput = document.querySelector("#name");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError")

function checkButton() {
console.log("works")
}
checkButton();

function validate() {

    // event.preventDefault();
      
    if(required(fullName.value)) {
        nameInput.style.borderColor = "red";
        nameError.style.display = "block";
        // nameLabel.after(fail);
    } else {
        nameInput.style.borderColor = "rgb(42, 179, 42)";
        nameError.style.display = "none";
        // check.style.display = "initial"
        // nameLabel.appendChild(check);
    }

    if(validateEmail(email.value)) {
        email.style.borderColor = "rgb(42, 179, 42)";
        emailError.style.display = "none";
        // emailLabel.after(check);
    } else {
        email.style.borderColor = "red";
        emailError.style.display = "block";
        // emailLabel.appendChild(fail);
    }
    
}

function required(input) {
    if (input.trim().length === 0) {
        return true;
    } else {
        return false;
    }
 }

validate();

fullName.addEventListener("keyup", validate);
email.addEventListener("keyup", validate);

function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches
};

// function submitForm(event) {
//     event.preventDefault();
// /*     message.style.display = "block";
//     message.innerHTML += `<p>Your information has been sent<p>`; */
//     // button.disabled = true;
//     form.reset();
// }

// submitForm();

// for (let i = 0; i < form.length; i++) {
//     // event.preventDefault();
//     form.addEventListener("submit", submitForm);
// }

// function checkButton() {
//     if (button.disabled) {
//         button.backgroundColor = "yellow"
//     }
// }

//     if (formInput) {
//         button.disabled = false;
//     } else {
//         button.disabled = true;
//     }
// }