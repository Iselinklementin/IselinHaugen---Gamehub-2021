  ////////// NINTENDO FILTER ////////

  const nintendo = document.querySelector(".nintendo-filter");
  const box = document.querySelector(".nintendo-box");
  const platNameNintendo = document.querySelector(".plat-name-nintendo");
  const nintendoIcon = document.querySelector(".nintendo-gamepad");
  let valueCountNintendo = 1;
  let valueCountPC = 1;
  let valueCountXbox = 1;
  let valueCountPs = 1;
  

  nintendo.addEventListener("click", function () {
      console.log(valueCountNintendo)
      valueCountNintendo++;
      box.style.backgroundColor = "black";
      platNameNintendo.style.backgroundColor = "var(--primary-color";
      platNameNintendo.style.color = "black";
      nintendoIcon.src = "/images/icons/nintendo.svg"; 
      
      if (valueCountNintendo % 2 === 0) {
        box.style.backgroundColor = "var(--primary-color)";
        platNameNintendo.style.backgroundColor = "black"; 
        platNameNintendo.style.color = "white";
        nintendoIcon.src = "/images/icons/nintendo-black.svg";
      }
  }); 

   //////////  PC  ////////

   const pc = document.querySelector(".pc-filter");
   const pcBox = document.querySelector(".pc-box");
   const platNamePC = document.querySelector(".plat-name-pc");
   const pcIcon = document.querySelector(".pc-mouse");
  
    pc.addEventListener("click", () => {

      valueCountPC++;

      pcBox.style.backgroundColor = "black";
      platNamePC.style.backgroundColor = "var(--primary-color";
      platNamePC.style.color = "black";
      pcIcon.src = "/images/icons/pc.svg";

      if (valueCountPC % 2 === 0) {
      pcBox.style.backgroundColor = "var(--primary-color)";
      platNamePC.style.backgroundColor = "black"; 
      platNamePC.style.color = "white";
      pcIcon.src = "/images/icons/pc-black.svg";
    }}); 
  

   //////////  XBOX FILTER ////////

   const xbox = document.querySelector(".xbox-filter");
   const xboxBox = document.querySelector(".xbox-box");
   const platNameXbox = document.querySelector(".plat-name-xbox");
   const xboxIcon = document.querySelector(".xbox-gamepad");

   xbox.addEventListener("click", () => {

    valueCountXbox++;

    xboxBox.style.backgroundColor = "black";
    platNameXbox.style.backgroundColor = "var(--primary-color";
    platNameXbox.style.color = "black";
    xboxIcon.src = "/images/icons/xbox.svg";

    if (valueCountXbox % 2 === 0) {
    xboxBox.style.backgroundColor = "var(--primary-color)";
    platNameXbox.style.backgroundColor = "black"; 
    platNameXbox.style.color = "white";
    xboxIcon.src = "/images/icons/xbox-black.svg";
  }}); 

  //////////  PLAYSTATION FILTER ////////

  const ps = document.querySelector(".ps-filter");
  const psBox = document.querySelector(".ps-box");
  const platNamePs = document.querySelector(".plat-name-ps");
  const psIcon = document.querySelector(".ps-gamepad");

  ps.addEventListener("click", () => {

    valueCountPs++;

    psBox.style.backgroundColor = "black";
    platNamePs.style.backgroundColor = "var(--primary-color";
    platNamePs.style.color = "black";
    psIcon.src = "/images/icons/ps.svg";

    if (valueCountPs % 2 === 0) {
    psBox.style.backgroundColor = "var(--primary-color)";
    platNamePs.style.backgroundColor = "black"; 
    platNamePs.style.color = "white";
    psIcon.src = "/images/icons/ps-black.svg";
 }}); 


const cartImg = document.querySelector(".cartImg");
const cartInfo = document.querySelector(".cartInfo")

function gameInCart () {
    cartImg.innerHTML += `<img class="imgCart" id="shopimg" src="images/games/war-game.jpg">`
    cartInfo.innerHTML +=  `<p class="cartName">Game name</p>
                            <p>299,-</p>
                            <p><strong>Released:</strong> 01.02.2019
                            <br><strong>Platform:</strong> PC</p>`
                          
}

gameInCart();