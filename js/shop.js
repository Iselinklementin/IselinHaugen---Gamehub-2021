/* const button = document.querySelectorAll("#buy")
// let windowObjectReference;
// const windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
const isVisible = "is-visible"; */


// const document = document.querySelector("body")
const openConfirmation = document.querySelectorAll("[data-open]");
const closeConfirmation = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
 
for(let i = 0; i < openConfirmation.length; i++) {
  openConfirmation[i].addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (let i = 0; i < closeConfirmation.length; i++) {
    closeConfirmation[i].addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
  }

  document.addEventListener("click", event => {
    if (event.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
  });


  // Kan skrives lettere?

  const nintendoFilter = document.querySelector(".nintendo-filter");
  const box = document.querySelector(".nintendo-box")
  const platNameNintendo = document.querySelector(".plat-name-nintendo")
  const nintendoIcon = document.querySelector(".nintendo-gamepad")

  function filterPlatform() {

    box.style.backgroundColor = "var(--primary-color)";
    box.style.height = "68px";
    platNameNintendo.style.backgroundColor = "black"; 
    platNameNintendo.style.color = "white";
    platNameNintendo.style.height = "22px";
    platNameNintendo.style.lineHeight = "1.5";
    nintendoIcon.src = "/images/icons/nintendo-black.svg";
    
  }

  function unFilterPlatform() {
    if (nintendoFilter.focus) {
      console.log("this toggles")
      // box.style.backgroundColor = "initial";
      // box.style.height = "initial";
      // platNameNintendo.style.backgroundColor = "initial"; 
      // platNameNintendo.style.color = "initial";
      // platNameNintendo.style.height = "initial";
      // platNameNintendo.style.lineHeight = "initial";
      // nintendoIcon.src = "initial";
    }
  }

  nintendoFilter.addEventListener("click", filterPlatform);
  nintendoFilter.addEventListener("click", unFilterPlatform);






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
