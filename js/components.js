const modal = document.querySelector("#modal1");
const modalClass = "modal.is-visible";
const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
const buyBtn = document.querySelectorAll("#buy");

// MODAL //
 
for(let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function() {
    modal.classList.add(isVisible);
  });
};

window.addEventListener("click", function(event) {

  console.log(modalClass)
  console.log(event.target)

  if (event.target === modal.classList.contains(".modal.is-visible")) {
    modal.classList.remove(isVisible);
}
}); 

/* 

.modal.is-visible {
  visibility: visible;
  opacity: 1;
}

window.onclick = function(event) {
  if (modal.classList.contains(".modal.is-visible")) {
      modal.classList.remove(isVisible);
  }
}; */
/* 
window.onclick = function(event) {
  if (event.target === modal) {
      modal.style.display = "none";
  }
}

modal.classList.contains(isVisible)
 */


let counter = 0;

for (let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener("click", function() {
      modal.classList.remove(isVisible);
      
      setInterval(function() {
        counter++;

        if(counter === 2) {
          clearInterval();

          buyBtn.forEach(btn => {
            btn.innerText = "Add to cart";
            btn.style.backgroundColor = "orange";
            btn.style.color = "black";
            btn.style.border = "var(--primary-color-btn-border)";
          })
        }
      },1000);
    });
  };

   // ADDED TO CART BUTTONS //

  buyBtn.forEach(btn => {
    btn.addEventListener("click", e => {
      btn.innerText = "Added";
      btn.style.border = "var(--secondary-border-purple)";
      btn.style.backgroundColor = "var(--secondary-color-purple)";
      btn.style.color = "white";
    })
  });

  // ERROR //

  function displayError (message = "Ops! Something went wrong.") {
    return `<div class="error">${message}</div>`;
}
