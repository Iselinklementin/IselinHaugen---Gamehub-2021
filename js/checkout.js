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

const form = document.querySelectorAll("form");
const button = document.querySelector("button");


const email = document.querySelector("#email");
const street = document.querySelector("#street");
const state = document.querySelector("#state");
const postal = document.querySelector("#post-code")
const fullName = document.querySelector(".fullname");
const nameInput = document.querySelector("#name");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const streetError = document.querySelector("#street-error");
const postalError = document.querySelector("#postal-error");
const stateError = document.querySelector("#state-error");

// const radioPayment = document.querySelectorAll(".radio-pay")

// function checkButton() {
// console.log("works")
// }
// checkButton();

function validate() {

    // event.preventDefault();
      
    if (required(fullName.value)) {
        nameInput.style.borderColor = "red";
        nameError.style.display = "block";
        // nameLabel.after(fail);
    } else {
        nameInput.style.borderColor = "rgb(42, 179, 42)";
        nameError.style.display = "none";
        // check.style.display = "initial"
        // nameLabel.appendChild(check);
    }

    if (validateEmail(email.value)) {
        email.style.borderColor = "rgb(42, 179, 42)";
        emailError.style.display = "none";
        // emailLabel.after(check);
    } else {
        email.style.borderColor = "red";
        emailError.style.display = "block";
        // email.appendChild(fail);
    }
    
    if (required(street.value)) {
        street.style.borderColor = "red";
        streetError.style.display = "block";
    } else {
        street.style.borderColor = "rgb(42, 179, 42)";
        streetError.style.display = "none";
    }

    if (required(state.value)) {
        state.style.borderColor = "red";
        stateError.style.display = "block";
    } else {
        state.style.borderColor = "rgb(42, 179, 42)";
        stateError.style.display = "none";
    }

    if (required(postal.value)) {
        postal.style.borderColor = "red";
        postalError.style.display = "block";
    } else {
        postal.style.borderColor = "rgb(42, 179, 42)";
        postalError.style.display = "none";
    }

    if (!required(fullName.value) && validateEmail(email.value) && !required(street.value) && !required(state.value) && !required(postal.value)) {
        button.disabled = false;
        button.innerHTML += "yay"
    } else {
        button.disabled = true;
    }

}


const checkPayment = document.querySelectorAll(`input[name="payment"]`);

let value;

function checkRadioPayment() {

    for (let i = 0; i < checkPayment.length; i++) {

        let radioPay = checkPayment[i];

        console.log(radioPay);
        console.log(radioPay.checked)

        if (checkPayment[i].checked) {
            value = radioPay.value;
            console.log(this)
        }
    }
}

checkRadioPayment();

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
street.addEventListener("keyup", validate);
postal.addEventListener("keyup", validate);
state.addEventListener("keyup", validate);


function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches
};


function submitForm(event) {
    event.preventDefault();
    message.style.display = "block";
    message.innerHTML += `<p>Your information has been sent<p>`;
    // button.disabled = true;
    form.reset();
}

button.addEventListener("submit", submitForm);



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






// checkPayment.addEventListener("keyup", checkRadioPayment);


    //     if(radioPay.checked) {
    //         console.log("radio worked")
    //         console.log(radioPay.value)
    //         value = radioPay.value;
    //     }
    // }

    // function atLeastOneRadio() {
    //     console.log("huh")
    //     return ($('input[type=radio]:checked').size() > 0);
    // }

    // atLeastOneRadio();

    // if(document.getElementById('input[class="pay-klarna"]:checked')) {
    //     console.log("Klarna radio button is checked")
    //     Male radio button is checked
    //   } else if(document.getElementById('pay-master').checked) {
    //     console.log("Mastercard radio button is checked")
    //     Female radio button is checked
    //   } else if (document.getElementById('pay-monthly').checked)
    //     console.log("Monthly radio button is checked")
    // }
