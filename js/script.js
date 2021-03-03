const url = "https://rawg-video-games-database.p.rapidapi.com/games";
const galleryImg = document.querySelector(".games-java");
const gamesTopContainer = document.querySelector(".games-display-one");
const bolk = document.querySelector(".bolk")
let count = 0;

async function getRAWG() {
    // try {
        const response = await fetch(url, { "headers": {
            "x-rapidapi-key": "cf33c9a2f0msh9a81ec9c0fe24f0p11fef3jsnd16ce6a851ba",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
        }});
        const result = await response.json();
        console.log(result);
        const games = result.results;

// --------------------------------------------- //


function createHTML(games) {

    let html = "";
    // let count = 0;

        games.map((item) => {
            // console.log(item)
            // console.log(item.name)
            // count++

            html += `<figure class="game1 game2 game3 game4 gamehover">
                    <div class="games-java"><img src="${item.background_image}" class="gallery-top" id="games-java-css" alt="Picture"/></div>
                        
                    <div class="text-wrapper">
                    <h3><a href="pre-purchase.html" class="game-name">${item.name}</a></h3>
                    <p class="price">NOK 299</p>
                    </div>
                    </figure>`

        })
    
        gamesTopContainer.innerHTML = html; 
        
        // if (count <= 4) {
        //     break;
        // }
    };

createHTML(games);

}

getRAWG();

const test = document.querySelector(".test")

gamesTopContainer.addEventListener("mouseover", displayContent)

function displayContent() {
    test.innerHTML += `<p>Testing</p>`
}

//                                 }


//             // galleryImg.innerHTML = `<img src="${games[i].background_image}" class="gallery-top games-java-css" alt="Picture"/></div>`
//             // gameName.innerHTML = `${games[i].name}`
//             // gamesTopContainer.nextSibling.
//         }

//     // } catch(error) {
//     //      console.log(error)
//     // }
// };

// getRAWG();




/* const dropdown = document.querySelector("select");
const box = document.querySelector(".boxesContain")
const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad/";

dropdown.onchange = function changeNumber(event) {
    console.log(event.target.value)
    let selectedValue = this.value;

    async function getAPI() {
        try {
        const response = await fetch(url);
        const result = await response.json();
        const games = result.data;

    box.innerHTML = "";

    for (let i = 1; i <= selectedValue; i++) {
            // for (let i = 0; i < games.length; i++) {

                box.innerHTML += `<a href="details.html?id=${games[i].id}" class="card">
                                <div class="image" style="background-image: url(${games[i].img});"></div>
                                <div class="details">
                                    <h4 class="name">${games[i].name}</h4>
                                </div>
                                </a>`;
                // }
            }
        }
        catch (errorMessage) {
            console.log(errorMessage)
        }
    }
    getAPI();
};

const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email")
const button = document.querySelector("button");
const message = document.querySelector("#message")


const firstNameError = document.querySelector(".firstNameError");
const lastNameError = document.querySelector(".lastNameError");
const emailError = document.querySelector(".emailError");

function checkIfButtonIsDisabled() {

    if (checkLength(firstName.value, 3)) {
        firstNameError.style.display = "none"; 
    } else {
        firstNameError.style.display = "block"; 
    }

    if (checkLength(lastName.value, 8)) {
        lastNameError.style.display = "none"; 
    } else {
        lastNameError.style.display = "block"; 
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none"; 
    } else {
        emailError.style.display = "block"; 
    }

    // if all inputs pass validation enable the button
    if (checkLength(firstName.value, 3) && checkLength(lastName.value, 8) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        // clear the message
        message.innerHTML = "";
        // disable button
        button.disabled = true;
    }
}

firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);

// function to run when the form is submitted
function submitForm(event) {
    event.preventDefault();
    // display a message once the form has been submitted
    message.innerHTML = '<div class="message">Your message has been sent</div>';
    // clear all input values
    form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
} */