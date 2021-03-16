const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://api.rawg.io/api/games/` + id + "?key=fcc585ed59594a80838bbaaa391aa796&dates=2019-09-01,2019-09-30&platforms=18,1,7"

// console.log(id)
// console.log(url)

async function fetchGame() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        // console.log(result.name);

        detailedInfo(result);
        imgSection(result);
        introHeading(result);

    } catch {

    } finally {

    }
};

fetchGame();

const title = document.querySelector("title");
const breadcrumbs = document.querySelector(".location");
const heading = document.querySelector("h1");

function detailedInfo(result) {

    if(result.name)
    gameName = result.name.replaceAll("-", " ");
    const nameCapitalized = gameName.charAt(0).toUpperCase() + gameName.slice(1)
    title.innerText = `${nameCapitalized}`;
    breadcrumbs.innerHTML = `<strong>${nameCapitalized}</strong>`;
    heading.innerText = `${nameCapitalized}`;
}

const image = document.querySelector(".img-header");
const imageAdd = document.querySelector(".img-add");
const genre = document.querySelector(".genre");

function imgSection(result) {
    image.src = `${result.background_image}`;
    imageAdd.src = `${result.background_image_additional}`;

    let genres = result.genres;

    for (let i = 0; i < genres.length; i++) {
        const genresName = genres[i];
        genre.innerHTML += `<li>${genresName.name}</li>`;
    }
}

const paraIntro = document.querySelector(".intro-text");
const platforms = document.querySelector(".platform");
const rating = document.querySelector(".rating");
const ratingTop = document.querySelector(".rating-top")
const ratingCount = document.querySelector(".count");
const released = document.querySelector(".released");

function introHeading(result) {
    paraIntro.innerHTML = `${result.description}`;

    const platform = result.platforms;
    
    for (let i = 0; i < platform.length; i++) {
        let gamePlatform = platform[i].platform.name;
        // console.log(gamePlatform)
        
        platforms.innerHTML += `<li class="plat-list">${gamePlatform}</li>`;
    }

    rating.innerHTML += `${result.rating}`;
    ratingTop.innerHTML += `/ ${result.rating_top}.00`
    // ratingCount.innerHTML += `Ratet by ${result.ratings_count}`
    released.innerHTML += `Released ${result.released}`;

    // console.log(result.rating)
    // /${result.rating_top}
    console.log(result.ratings_count)
    console.log(result.ratings_count)
    console.log(result.ratings)
}