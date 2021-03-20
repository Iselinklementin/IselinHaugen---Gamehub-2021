const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";
const buyBtn = document.querySelectorAll("#buy");
 
for(let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

let counter = 0;

for (let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener("click", function() {
      this.parentElement.parentElement.parentElement.parentElement.classList.remove(isVisible);
      
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


  buyBtn.forEach(btn => {
    btn.addEventListener("click", event => {
      btn.innerText = "Added";
      btn.style.border = "var(--secondary-border-purple)";
      btn.style.backgroundColor = "var(--secondary-color-purple)";
      btn.style.color = "white";
    })
  });