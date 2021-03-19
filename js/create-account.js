const form = document.querySelector("create-account-form");
const button = document.querySelector("#submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const matchPsw = document.querySelector("#confirm-password");

const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");
const matchError = document.querySelector("#match-error");
const buttonError = document.querySelector(".error-button")


function validateForm(event) {
	event.preventDefault();

    if (validateEmail(email.value)) {
        email.style.borderColor = "rgb(42, 179, 42)";
        emailError.style.display = "none";

        if (buttonError.style.display = "block") {
              buttonError.style.display = "none"
        } 
    } else {
        email.style.borderColor = "red";
        emailError.style.display = "block";
    }

    if (isPasswordSecure(password.value)) {
        password.style.borderColor = "rgb(42, 179, 42)";
        passwordError.style.display = "none";

        if (buttonError.style.display = "block") {
            buttonError.style.display = "none"
        }
        
    } else {
        password.style.borderColor = "red";
        passwordError.style.display = "block";
    }

    if (matchPsw.value === password.value && matchPsw.value !== "") {
        matchPsw.style.borderColor = "rgb(42, 179, 42)";
        matchError.style.display = "none";

    } else {
        matchPsw.style.borderColor = "red";
        matchError.style.display = "block";
    }
}

submit.addEventListener("click", validateForm);
submit.addEventListener("click", submitForm);

//2.function to run when the form is submitted
function submitForm(event) {
	event.preventDefault();
	if (
		validateEmail(email.value) && isPasswordSecure(password.value) && (matchPsw.value === password.value)) {
        button.disabled = true;
        buttonError.style.display = "block";
		form.reset();
	} else {
	    button.disabled = false;
        buttonError.style.display = "none";
	}
}

function validateEmail(email) {
	const regEX = /\S+@\S+\.\S+/;
	const patternMatches = regEX.test(email);
	return patternMatches;
}

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])");
    return re.test(password);
};
