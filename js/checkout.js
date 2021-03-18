const form = document.querySelectorAll("form");
const button = document.querySelector(".button");

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
const buttonError = document.querySelector(".error-button");

const deliver = document.querySelectorAll(`input[name="delivery"]`)
const pay = document.querySelectorAll(`input[name="payment"]`);


function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches
};

function checkLength(value, len) {
    if (value.trim().length < len) {
        return true;
    } else {
        return false;
    }
}


fullName.addEventListener("input", function() {
    if (checkLength(fullName.value, 4)) {
        nameInput.style.borderColor = "red";
        nameError.style.display = "block";
        // nameLabel.after(fail);
    } else {
        nameInput.style.borderColor = "rgb(42, 179, 42)";
        nameError.style.display = "none";
        // check.style.display = "initial"
        // nameLabel.appendChild(check);
    }
});

email.addEventListener("input", function() {
    if (validateEmail(email.value)) {
        email.style.borderColor = "rgb(42, 179, 42)";
        emailError.style.display = "none";
        // emailLabel.after(check);
    } else {
        email.style.borderColor = "red";
        emailError.style.display = "block";
        // email.appendChild(fail);
    }
});

street.addEventListener("input", function() {
    if (checkLength(street.value, 5)) {
        street.style.borderColor = "red";
        streetError.style.display = "block";
    } else {
        street.style.borderColor = "rgb(42, 179, 42)";
        streetError.style.display = "none";
    }
});

state.addEventListener("input", function() {
    if (checkLength(state.value, 1)) {
        state.style.borderColor = "red";
        stateError.style.display = "block";
    } else {
        state.style.borderColor = "rgb(42, 179, 42)";
        stateError.style.display = "none";
    }
});

postal.addEventListener("input", function() {
    if (checkLength(postal.value, 4)) {
        postal.style.borderColor = "red";
        postalError.style.display = "block";
    } else {
        postal.style.borderColor = "rgb(42, 179, 42)";
        postalError.style.display = "none";
    }
});

/* function radioDelivery() {} */

    deliver.forEach(del => del.addEventListener("click", function () {
    
        let delValue;
    
        if (del.checked) {
    
            delValue = del.value;
    
            if (!delValue) {
                deliveryError.style.display = "block";
                return false;
            } else {
                deliveryError.style.display = "none";
                return true;
            }
        }
    }));



const deliveryError = document.querySelector(".delivery-error");
const payError = document.querySelector(".payment-error");

pay.forEach(p => p.addEventListener("click", function() {

    let payValue;

    if (p.checked) {
        payValue = p.value;

        if (!payValue) {
            payError.style.display = "block";
            return false;
        } else {
            payError.style.display = "none";
            return true;
        }
    } 
}));


function submitForm(event) {
    event.preventDefault();

    let mailVal = validateEmail(email.value);
    let nameVal = checkLength(fullName.value, 4);
    let streetVal = checkLength(street.value, 5);
    let stateVal = checkLength(state.value, 1);
    let postVal = checkLength(postal.value, 4);

    if (mailVal && !nameVal && !streetVal && !stateVal && !postVal && deliver && pay) {
     button.disabled = false;
     buttonError.style.display = "none";
     document.location.href = "checkout-success.html";
    } else {
     button.disabled = true;
     buttonError.style.display = "block";
 }
  /*    form.reset(); */
 };

 button.addEventListener("click", submitForm);


/* const pickupError = document.querySelector("#pickup-error");
const homeError = document.querySelector("#home-error");
const klarnaError = document.querySelector("#klarna-error");
const masterError = document.querySelector("#mastercard-error");
const monthlyError = document.querySelector("#monthly-error"); */