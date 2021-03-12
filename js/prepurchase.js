const purchaseButton = document.querySelector(".button")

function addToCart() {
    purchaseButton.style.text = "Added to cart"
}

purchaseButton.onclick("click", addToCart)