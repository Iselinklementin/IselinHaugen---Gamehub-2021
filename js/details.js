const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(params)

async function fetchGame() {
    try {
        const response = await fetch(url)
    }
}