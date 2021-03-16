/* const button = document.querySelectorAll("#buy")
// let windowObjectReference;
// const windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
const isVisible = "is-visible"; */


// const document = document.querySelector("body")
  // document.addEventListener("click", event => {
  //   if (event.target == document.querySelector(".modal.is-visible")) {
  //     document.querySelector(".modal.is-visible").classList.remove(isVisible);
  //   }
  // });

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
