const url = "https://api.rawg.io/api/games?key=fcc585ed59594a80838bbaaa391aa796&dates=2019-09-01,2019-09-30&platforms=18,1,7";
/* const cors = url + `GET https://api.rawg.io/api/platforms?key=fcc585ed59594a80838bbaaa391aa796` */
const proxy = "https://noroffcors.herokuapp.com/"
const corsFix = proxy + url;
const galleryImg = document.querySelector(".games-java");
const gamesTopContainer = document.querySelector(".games-display-one");
// const bolk = document.querySelector(".bolk")
const gallery = document.querySelector(".games-gallery");


async function getRAWG() {
    try {
        const response = await fetch(corsFix);
        const result = await response.json();
        const games = result.results;

        console.log(games);
        console.log("This works");

        index(games);
        shop(games);

    } catch {

    } finally {

    }
};

getRAWG();
// --------------------------------------------- //

function index(games) {

    console.log("This works 1");
    let html = "";
    gamesTopContainer.innerHTML = "";

        games.map((item) => {

            const gameID = item.id;
            console.log(item.id)

            // console.log(platformName)

            html += `<a href="details.html?id=${gameID}" class="card">
                    <figure class="game1 game2 game3 game4 gamehover">
                    <div class="games-java"><img src="${item.background_image}" class="gallery-top" id="games-java-css" alt="Picture"/></div>
                        
                    <div class="text-wrapper">
                    <h3 class="game-name">${item.name}</h3>
                    </div>
                    </figure></a>`
        })
        
        gamesTopContainer.innerHTML = html; 

    };


    function shop(games) {

        console.log("This works 2");
        gallery.innerHTML = "";
        let htmlGallery = "";

        games.map((game) => {
            const gameID = game.id;
            console.log(gameID)

            htmlGallery += `<a href="details.html?id=${gameID}" class="card">
                            <figure class="game1 game2 game3 game4 gamehover">
                            <div class="games-java"><img src="${game.background_image}" class="shop-gallery" id="games-java-css" alt="Picture"/></div>
                
                            <div class="text-wrapper">
                            <h3 class="game-name">${game.name}</h3>
                            </div>
                            </figure></a>`
        })

        gallery.innerHTML = htmlGallery;

    };



// <ul class="platforms">
// <li>${platformName}</li>
// </ul>

/*             function checkPlatform() {
                // console.log(logos)

            for (let i = 0; i < logos.length; i++) {

                 final = [];
                 const companyNames = logos[i].company;
                 const logoURL = logos[i].url;
                 console.log(companyNames + " - " + logoURL)

 */
                //  console.log(platformName.map(platform => platform)
               
            //             for (let j = 0; j < platformName.length; j++) {
            //             // console.log(platformName[j])

            //             let apiNames = platformName[j];

            //             if (apiNames.sort() === companyNames.sort()) {
            //                 final = logoURL;
            //             }
            //             // let final = companyNames.filter(check => apiNames.includes(check));
            //             console.log(final)
            //             return final
            //             // console.log(final + logoURL)
            //             }

                    // }
                // let final = companyNames.length(check => platformName.includes(check))
                // return final;                
            
        // }

                    // console.log(item)
            // console.log(item.name)
  /*           const platforms = item.parent_platforms; */
            /* console.log(platforms.map(platform => platform.platform.name)) */
/*             const platformName = platforms.map(platform => platform.platform.name); */



                
        // ${checkPlatform(logos, platformName)}
        //<img class="icons-platform" src=" ${platformName} "/>
        // <li><img class="icons-platform" src="${checkPlatform}"/></li>

        // if (count <= 4) {
        //     break;
        // }
/*     }) */





                 /*             function checkPlatform(arr1, arr2) {

                const intersectionResult = arr1.filter(check => arr2.includes(check))
                return intersectionResult;
              }
 */
//  /*                console.log(companyNames)*/
//                 console.log(logoURL) 

//                 for (let j = 0; j < companyNames.length; j++) {
//                     for (let count = 0; count < platformName.length; count++) {
//                         console.log(platformName[count])
//                             if(companyNames[j] === platformName[count]) {

//                                 console.log("This works")
//                         /* final.push(logoURL[j]) */
//                     }
//                         // if (companyNames[j] === platformName[count]) 
//                         // final.push(companyNames[j])
                        
//                     }
//                 }

//                 console.log(final)

                //  const checkPlatform = companyName.filter(value => platformName.includes(value));


                            //  if (companyNames === platformName) {
                //      console.log("this works")
                //  }

                // logos.map((company) => {
                //     const companyName = company.company;
                //     console.log(companyName)

                //     const checkPlatform = companyName.filter(value => platformName.includes(value));
                //     console.log(checkPlatform + "what")

/*             function checkPlatform(company, names) {

    

            let final = [];

            for (let i = 0; i < company.length; i++) {
                console.log(company[i].company)

                for (let j = 0; j < names.length.value; i++) {
                    if (company[i] === names[j]) final.push(company[i]);
                    console.log(final)
                }
            }

                return final;
            } */
                


/*             function checkPlatform(arr1, arr2) {

                const intersectionResult = arr1.filter(check => arr2.includes(check))
                return intersectionResult;
              }
 */
            // function checkPlatform(a, b) {

            // let final = [];
            //     for (let i = 0; i < a.length.value; i++) {
            //         for (let j = 0; j < b.length.value; i++) {
            //             if (a[i].value === b[j].value) final.push(a[i].value);
            //             console.log(final)
            //         }
            //     }
            //     return final;

/*                 const final = platformImages.filter(value => platformName.includes(value));
                console.log(final)
                return `<li>this should work${final}</li>` */
/*                 for (let i = 0; i < platformImages.length; i++) {
                    if (platformImages.value === platformName.value) {
                    let finalPlatforms = 
                    return finalPlatforms;
                    }
                } */
            // }

// const test = document.querySelector(".test")

// gamesTopContainer.addEventListener("mouseover", displayContent)

// function displayContent() {
//     test.innerHTML += `<p>Testing</p>`
// }

// <p class="price">NOK 299</p>
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


/* ${platforms.map(platform => {
    /* if (platform === platformImages) { */
    /* console.log(platform.platform.name); */
    /* return platformImages */
    // return `<li>${platform.platform.name}</li>`
    // ;}) */
    // .join("")}

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