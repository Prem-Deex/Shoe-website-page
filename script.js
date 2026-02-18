const button = document.querySelector(".add_to_cart");
const cartDisplay = document.getElementById("cart-count");

let cartCount = 0;

button.addEventListener("click", function () {
    cartCount++;
    cartDisplay.textContent = cartCount;
});
