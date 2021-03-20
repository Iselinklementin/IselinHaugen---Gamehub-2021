const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://api.rawg.io/api/games/` + id + "?key=fcc585ed59594a80838bbaaa391aa796&dates=2019-09-01,2019-09-30&platforms=18,1,7"
const loader = document.querySelector(".loader");
// console.log(id)
// console.log(url)

async function fetchGame() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        
        loader.remove()
        // console.log(result.name);
        detailedInfo(result);
        imgSection(result);
        introHeading(result);
        gameInCart(result);

    } catch {

    } finally {

    }
};

fetchGame();

const title = document.querySelector("title");
const breadcrumbs = document.querySelector(".location");
const heading = document.querySelector("h1");
const publish = document.querySelector(".publish")

function detailedInfo(result) {

    if(result.name)
    gameName = result.name.replaceAll("-", " ");
    const nameCapitalized = gameName.charAt(0).toUpperCase() + gameName.slice(1)
    title.innerText = `${nameCapitalized}`;
    breadcrumbs.innerHTML = `<strong>${nameCapitalized}</strong>`;
    heading.innerText = `${nameCapitalized}`;
}

const image = document.querySelector(".img-header");
// const imageAdd = document.querySelector(".img-add");
const genre = document.querySelector(".genre");

function imgSection(result) {
        image.src = `${result.background_image}`;
    // imageAdd.src = `${result.background_image_additional}`;

    let genres = result.genres;

    for (let i = 0; i < genres.length; i++) {
        const genresName = genres[i];
        genre.innerHTML += `<li>${genresName.name}</li>`;
    }

    let publishers = result.publishers;
    for (let i = 0; i < publishers.length; i++) {
        // console.log(publishers[i].name)
        publish.innerHTML += `<li>${publishers[i].name}</li>`
    }
}

const paraIntro = document.querySelector(".intro-text");
const platforms = document.querySelector(".platform");
const rating = document.querySelector(".rating");
const ratingCount = document.querySelector(".count");
const released = document.querySelector(".released");
const recommended = document.querySelector(".recommended");

function introHeading(result) {
    paraIntro.innerHTML += `<p>${result.description}</p>`;

    const platform = result.platforms;
    
    for (let i = 0; i < platform.length; i++) {
        let gamePlatform = platform[i].platform.name;
        // console.log(gamePlatform)
        // console.log(gamePlatform)
        
        /* platforms.innerHTML += `<li class="plat-list">${gamePlatform}</li>`; */

        if (gamePlatform === "PC") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/windows.svg" alt="Picture of Windows-logo" class="plat-logo">`;
/*             let platformLogo = `<li><img src="/images/icons/platform/windows.svg" alt="Picture of Windows-logo" class="logo"></li>`;
            ${gamePlatform} */
        }
        
        if (gamePlatform === "PlayStation 4") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/ps.svg" alt="Picture of PlayStation-logo" class="plat-logo ps4">`;
        }

        if (gamePlatform === "Xbox One") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/xbox.svg" alt="Picture of Xbox-logo" class="plat-logo xbox">`;
        }

        if (gamePlatform === "Xbox Series S/X") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/xbox-series.svg" alt="Picture of Xbox-logo" class="plat-logo xbox-series">`;
        }

        if (gamePlatform === "Nintendo Switch") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/nintendo.svg" alt="Picture of Nintendo-logo" class="plat-logo">`;
        }

        if (gamePlatform === "macOS" || gamePlatform === "iOS") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/ios.svg" alt="Picture of macOS-logo" class="plat-logo ios">`;
        }

        if (gamePlatform === "Linux") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/linux.svg" alt="Picture of Linux-logo" class="plat-logo">`;
        }
        
        if (gamePlatform === "PS Vita") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/vita.svg" alt="Picture of PS Vita-logo" class="plat-logo vita">`;
        }

        if (gamePlatform === "Android") {
            platforms.innerHTML += `<p class="hidePlat">${gamePlatform}</p><img src="/images/icons/platform/android.svg" alt="Picture of Android-logo" class="plat-logo android">`;
        }
    }

    rating.innerHTML += `${result.rating} / ${result.rating_top}.00`;
   /*  ratingTop.innerHTML += `/ ${result.rating_top}.00` */
    // ratingCount.innerHTML += `Ratet by ${result.ratings_count}`
    released.innerHTML += `Released ${result.released}`;

    let recommend = result.ratings;
    for (let i = 0; i < recommend.length; i++) {
        
        // console.log(recommend[i]);
        rateTitle = recommend[i].title;
        const rateTitleCapitalized = rateTitle.charAt(0).toUpperCase() + rateTitle.slice(1)
/*         recommended.innerHTML += `<p class="titleRec">${rateTitleCapitalized} - ${recommend[i].percent}</p>` */


        if (rateTitle === "exceptional") {
            recommended.innerHTML += `<p class="recommended-box exceptional"><strong>${rateTitleCapitalized}</strong>
                                    <br>${recommend[i].percent}%`;
        }

        if (rateTitle === "recommended") {
            recommended.innerHTML += `<p class="recommended-box recommendedrate"><strong>${rateTitleCapitalized}</strong>
                                    <br>${recommend[i].percent}%`;
        }
        if (rateTitle === "meh") {
            recommended.innerHTML += `<p class="recommended-box meh"><strong>${rateTitleCapitalized}</strong>
                                    <br>${recommend[i].percent}%`;
        }

        if (rateTitle === "skip") {
            recommended.innerHTML += `<p class="recommended-box skip"><strong>${rateTitleCapitalized}</strong>
                                    <br>${recommend[i].percent}%`;
        }
    }
}   


// MODAL --- NEW NEW NEW NEW NEW --- MODAL //

const cartImg = document.querySelector(".cartImg");
const cartInfo = document.querySelector(".cartInfo")

function gameInCart (result) {

    let platform = result.platforms

    for(let i = 0; i < platform.length; i++) {
        let gamePlatform = platform[0].platform.name;
        console.log(gamePlatform)
    

    cartImg.innerHTML += `<img class="imgCart" src="${result.background_image}">`
    cartInfo.innerHTML +=  `<p class="cartName">${result.name}</p>
                            <p>299,-</p>
                            <p><strong>Released:</strong> ${result.released}
                            <br><strong>Platform:</strong> ${gamePlatform}</p>`
                            break;
    }
}