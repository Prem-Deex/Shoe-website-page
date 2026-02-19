const button = document.querySelector(".add_to_cart");
const cartDisplay = document.getElementById("cart-count");

let cartCount = 0;

button.addEventListener("click", function () {
    cartCount++;
    cartDisplay.textContent = cartCount;
});
const sizes = document.querySelectorAll(".size");

sizes.forEach(size => {
    size.addEventListener("click", function () {
        sizes.forEach(s => s.classList.remove("active"));

        this.classList.add("active");
    });
});
