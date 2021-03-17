// const url = "https://api.rawg.io/api/games?key=fcc585ed59594a80838bbaaa391aa796&dates=2019-09-01,2019-09-30&platforms=18,1,7";
// /* const cors = url + `GET https://api.rawg.io/api/platforms?key=fcc585ed59594a80838bbaaa391aa796` */
// const proxy = "https://noroffcors.herokuapp.com/"
// const corsFix = proxy + url;
// const gallery = document.querySelector(".games-gallery");

// async function getRAWG() {
//   try {
//       const response = await fetch(corsFix);
//       const result = await response.json();
//       const games = result.results;

//       console.log(games);
//       console.log("This works");

//       shop(games);

//   } catch {

//   } finally {

//   }
// };

// getRAWG();


//     function shop(games) {

//       console.log("This works 2");
//       gallery.innerHTML = "";
//       let htmlGallery = "";
//       let btn = "";

//       games.map((game) => {
//           const gameID = game.id;
//           console.log(gameID)

//           htmlGallery += `<a href="details.html?id=${gameID}">
//                           <figure class="game1 gamehover">
//                           <div class="img-wrap"><img src="${game.background_image}" class="shop-gallery" alt="Picture"/></div>
              
//                           <div class="text-wrapper">
//                           <h3 class="game-name">${game.name}</h3>
//                           <p class="price">NOK 299</p>
//                           <figcaption>Lorem ipsum dolor.</figcaption></a>  
//                           <button class="button open-modal" id="buy" data-open="modal1">Add to cart</button>
//                           </div>
//                           </figure>                       
//                           `
//       })

//       gallery.innerHTML = htmlGallery;

//   };

  ////////// NINTENDO ////////

  const nintendo = document.querySelector(".nintendo-filter");
  const box = document.querySelector(".nintendo-box");
  const platNameNintendo = document.querySelector(".plat-name-nintendo");
  const nintendoIcon = document.querySelector(".nintendo-gamepad");

  nintendo.addEventListener("click", (event) => {

    console.log(event.target)
    box.style.backgroundColor = "var(--primary-color)";
    // box.style.height = "68px";
    platNameNintendo.style.backgroundColor = "black"; 
    platNameNintendo.style.color = "white";
    // platNameNintendo.style.height = "22px";
    // platNameNintendo.style.lineHeight = "1.5";
    nintendoIcon.src = "/images/icons/nintendo-black.svg";
    // event.target.style.background = "pink";
  }, true); 

  nintendo.addEventListener("dblclick", (event) => {
    box.style.backgroundColor = "black";
    platNameNintendo.style.backgroundColor = "var(--primary-color";
    platNameNintendo.style.color = "black";
    nintendoIcon.src = "/images/icons/nintendo.svg";
  }, true);

  // nintendoFilter.onblur = function() {
  //   box.style.backgroundColor = "black";
  // }


   //////////  PC  ////////


   const pc = document.querySelector(".pc-filter");
   const pcBox = document.querySelector(".pc-box");
   const platNamePC = document.querySelector(".plat-name-pc");
   const pcIcon = document.querySelector(".pc-mouse");
  
    pc.addEventListener("click", (event) => {

      console.log(event.target)
      pcBox.style.backgroundColor = "var(--primary-color)";
      // box.style.height = "68px";
      platNamePC.style.backgroundColor = "black"; 
      platNamePC.style.color = "white";
      // platNameNintendo.style.height = "22px";
      // platNameNintendo.style.lineHeight = "1.5";
      pcIcon.src = "/images/icons/pc-black.svg";
      // event.target.style.background = "pink";
    }, true); 
  
      pc.addEventListener("dblclick", (event) => {
      pcBox.style.backgroundColor = "black";
      platNamePC.style.backgroundColor = "var(--primary-color";
      platNamePC.style.color = "black";
      pcIcon.src = "/images/icons/pc.svg";
    }, true);


   //////////  XBOX ////////


   const xbox = document.querySelector(".xbox-filter");
   const xboxBox = document.querySelector(".xbox-box");
   const platNameXbox = document.querySelector(".plat-name-xbox");
   const xboxIcon = document.querySelector(".xbox-gamepad");

   xbox.addEventListener("click", (event) => {

    console.log(event.target)
    xboxBox.style.backgroundColor = "var(--primary-color)";
    // box.style.height = "68px";
    platNameXbox.style.backgroundColor = "black"; 
    platNameXbox.style.color = "white";
    // platNameNintendo.style.height = "22px";
    // platNameNintendo.style.lineHeight = "1.5";
    xboxIcon.src = "/images/icons/xbox-black.svg";
    // event.target.style.background = "pink";
  }, true); 

  xbox.addEventListener("dblclick", (event) => {
    xboxBox.style.backgroundColor = "black";
    platNameXbox.style.backgroundColor = "var(--primary-color";
    platNameXbox.style.color = "black";
    xboxIcon.src = "/images/icons/xbox.svg";
  }, true);

  //////////  PLAYSTATION   ////////

  const ps = document.querySelector(".ps-filter");
  const psBox = document.querySelector(".ps-box");
  const platNamePs = document.querySelector(".plat-name-ps");
  const psIcon = document.querySelector(".ps-gamepad");

  ps.addEventListener("click", (event) => {

   console.log(event.target)
   psBox.style.backgroundColor = "var(--primary-color)";
   // box.style.height = "68px";
   platNamePs.style.backgroundColor = "black"; 
   platNamePs.style.color = "white";
   // platNameNintendo.style.height = "22px";
   // platNameNintendo.style.lineHeight = "1.5";
   psIcon.src = "/images/icons/ps-black.svg";
   // event.target.style.background = "pink";
 }, true); 

  ps.addEventListener("dblclick", (event) => {
   psBox.style.backgroundColor = "black";
   platNamePs.style.backgroundColor = "var(--primary-color";
   platNamePs.style.color = "black";
   psIcon.src = "/images/icons/ps.svg";
 }, true);


 const cartImg = document.querySelector(".cartImg");
const cartInfo = document.querySelector(".cartInfo")

function gameInCart () {
    // for(let i = 0; i < platform.length; i++) {
    //     let gamePlatform = platform[0].platform.name;
    //     console.log(gamePlatform)
    

    cartImg.innerHTML += `<img class="imgCart" id="shopimg" src="images/games/war-game.jpg">`
    cartInfo.innerHTML +=  `<p class="cartName">Game name</p>
                            <p><strong>Released:</strong> 01.02.2019
                            <br><strong>Platform:</strong> PC</p>`
                          
    // }
}

gameInCart();

  //   nintendoFilter.removeEventListener("click", filterPlatform, false)
  // })

  // function unfilter() {
  //   console.log("this toggles")
  //   if(nintendoFilter.focus) {
  //     nintendoFilter.removeEventListener("click", filterPlatform)
  //   }
  // }

  // function unFilterPlatform() {
  //   if (nintendoFilter.focus) {
  //     console.log("this toggles")
  //     // box.style.backgroundColor = "initial";
  //     // box.style.height = "initial";
  //     // platNameNintendo.style.backgroundColor = "initial"; 
  //     // platNameNintendo.style.color = "initial";
  //     // platNameNintendo.style.height = "initial";
  //     // platNameNintendo.style.lineHeight = "initial";
  //     // nintendoIcon.src = "initial";
  //   }
  // }

  // nintendoFilter.addEventListener("click", unfilter)

 /*  if(nintendoFilter.focus) {
    console.log("this")
  } */
  // nintendoFilter.addEventListener("click", unfilter)
  // nintendoFilter.addEventListener("click", unFilterPlatform);






//   const el of openConfirmation
// const el of closeConfirmation

/* 
button.forEach((buttons) => {
    buttons.addEventListener("click", () => {

      console.log("forEach worked");
      buttons.innerText = "Added to cart"
    //   window.open('https://javascript.info');
    //   myFunction();
    //   openRequestedPopup();
    });
  });
 */

//   const openEls = document.querySelectorAll("[data-open]");
  
   

//   function openRequestedPopup() {
//     windowObjectReference = window.open("http://www.cnn.com/", "CNN_WindowName", windowFeatures);
//   }

// function myFunction() {
//     window.open("#","_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
//   }



/* for (i = 0; i < button.length; ++i) {
    button[i].style.color = "green";
  }
 */

/* for (let i = 0; i < button.length; i++) {
    const allButtons = button[i];

    allButtons.addEventListener("click", function addToCart() {  
        // prevent browser's default action
        allButtons.innerText = "Added to cart"
        console.log("thisworks")

        addToCart();
    });
};
 */


/* const body = document.querySelector("body") */

/* button.style.backgroundColor = "green" */

/* function addToCart() {
    button.innerText = "Added to cart"
    button.style.backgroundColor = "green";
    console.log("This works")
}

button.addEventListener("click", addToCart); */

/* button.onclick = function () {
    console.log("This works")
} */

/* button.forEach(button => button.addEventListener("click", function() {
    console.log("this works")
})); */

/* 
button.forEach(button => button.addEventListener("click", addToCart(button)));

function addToCart(button) {
    return function() {
        button.innerText = "Added to cart"
        console.log("this works")
    }
}; */
