const cartImg = document.querySelector(".cartImg");
const cartInfo = document.querySelector(".cartInfo")

function gameInCart () {
    // for(let i = 0; i < platform.length; i++) {
    //     let gamePlatform = platform[0].platform.name;
    //     console.log(gamePlatform)
    

    cartImg.innerHTML += `<img class="imgCart" id="shopimg" src="images/mobile/immortal-mobile-new.jpg">`
    cartInfo.innerHTML +=  `<p class="cartName">Game name</p>
                            <p><strong>Released:</strong> 01.02.2019
                            <br><strong>Platform:</strong> PC</p>`
                          
    // }
}

gameInCart();