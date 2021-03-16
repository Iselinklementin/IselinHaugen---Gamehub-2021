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

  