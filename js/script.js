const url = "https://api.rawg.io/api/games?key=fcc585ed59594a80838bbaaa391aa796&dates=2019-09-01,2019-09-30&platforms=18,1,7";
const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;
const galleryImg = document.querySelector(".games-java");
const gamesTopContainer = document.querySelector(".games-display-one");
const gallery = document.querySelector(".games-gallery");


async function getRAWG() {
    try {
        const response = await fetch(corsFix);
        const result = await response.json();
        const games = result.results;

        console.log(games);
        console.log("This works");

        index(games);

    } catch {

    } finally {

    }
};

getRAWG();


function index(games) {

    let html = "";
    gamesTopContainer.innerHTML = "";

    games.map((item) => {

        const gameID = item.id;

        html += `<a href="details.html?id=${gameID}" class="card">
                    <figure class="game1 game2 game3 game4 gamehover">
                    <div class="games-java"><img src="${item.background_image}" class="gallery-top" id="games-java-css" alt="Picture"/></div>
                        
                    <div class="text-wrapper">
                    <h3 class="game-name">${item.name}</h3>
                    </div>
                    </figure></a>`;
    })
        
    gamesTopContainer.innerHTML = html; 

    };
