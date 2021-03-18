const form = document.querySelector("form");
const button = document.querySelector("#submitBtn");

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const pswError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const buttonError = document.querySelector(".error-button")

/* function checkLength(value, len) {
    if (value.trim().length > len) {
    return true;
} else {
    return false;
}
}; */

 function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})");
    return re.test(password);
};

/* function validateLogin() {
    if (validateEmail(email.value)) {
        email.style.borderColor = "rgb(42, 179, 42)";
        emailError.style.display = "none";
        return true;
    } else {
        email.style.borderColor = "red";
        emailError.style.display = "block";
    }
}

function validatePassword() {
    if (isPasswordSecure(password.value)) {
        password.style.borderColor = "rgb(42, 179, 42)";
        pswError.style.display = "none";
    } else {
        password.style.borderColor = "red";
        pswError.style.display = "block";
    }
}

function checkValidation () {
    if (email.addEventListener("input", validateLogin)) {
        button.disabled = false;
        buttonError.style.display = "none";
    } else {
        button.disabled = true;
        buttonError.style.display = "block";
    }
}
 */
/* if (!validateLogin) {
    button.disabled = false;
    buttonError.style.display = "none";
} else {
    button.disabled = true;
    buttonError.style.display = "block";
}
 */

/* else if (!validateLogin() && !validatePassword) {
    button.disabled = true;
    buttonError.style.display = "block";
    } */

email.addEventListener("input", function() {
    if (validateEmail(email.value)) {
        email.style.borderColor = "rgb(42, 179, 42)";
        emailError.style.display = "none";
    } else {
        email.style.borderColor = "red";
        emailError.style.display = "block";
    }
});


password.addEventListener("keyup", function() {
    if (isPasswordSecure(password.value)) {
        password.style.borderColor = "rgb(42, 179, 42)";
        pswError.style.display = "none";
    } else {
        password.style.borderColor = "red";
        pswError.style.display = "block";
    }
});

button.addEventListener("click", function submitForm(event) {
    event.preventDefault();

   let mail = validateEmail(email.value);
   let psw = isPasswordSecure(password.value);

   if (mail && psw) {
    buttonError.style.display = "none";
   } else {
    button.disabled = true;
    buttonError.style.display = "block";
   }
/* 
    if (validateEmail(email.value) && isPasswordSecure(password.value)) {
        buttonError.style.display = "none";
    } else {
        button.disabled = true;
        buttonError.style.display = "block";

        if (validateEmail(email.value.onchange) || isPasswordSecure(password.value.onchange)) {
            buttonError.style.display = "none";
        }
    } */

    console.log("happend")
    form.reset();
}
);


if (button.disabled) {
    button.style.backgroundColor = "green"
}