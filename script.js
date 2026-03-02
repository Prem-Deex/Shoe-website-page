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

const mainImage = document.getElementById("main-shoe");
const variants = document.querySelectorAll(".var_img");
const sideImages = document.querySelectorAll(".sideimg");
const longDesc = document.getElementById("product-description");
const featuresList = document.getElementById("feature-description");

const defaultColor = "black";

const variantData = {
    black: {
        material: "Sustainable Material",
        description: "Men's Road Running Shoes",
        rating: "⭐⭐⭐⭐☆ (4.2/5)",
        price: "$120.00",
        longDesc: "The black Revolution 8 is built for everyday comfort and durability.",
        features: [
            "casual ",
            "comfortable",
            "Durable ",
            "Great for road running"
        ]
    },
    green: {
        material: "Eco-Friendly Material",
        description: "Men's Trail Running Shoes",
        rating: "⭐⭐⭐⭐⭐ (4.8/5)",
        price: "$125.00",
         longDesc: "A durable and comfortable shoe for daliy use.",
        features: [
            "Breathable mesh upper",
            "Soft foam cushioning",
            "Durable outsole",
            "Great for road running"
        ]
    },
    orange: {
        material: "Lightweight Material",
        description: "Men's Running Shoes",
        rating: "⭐⭐⭐⭐ (4.0/5)",
        price: "$115.00",
        longDesc: "The stylish shoe for party wear",
        features: [
            "Ultra-lightweight build",
            "Responsive cushioning",
            "Flexible sole",
            "Sporty design"
        ]
    },
    "white-b": {
        material: "Premium Material",
        description: "Men's Casual Running Shoes",
        rating: "⭐⭐⭐⭐⭐ (4.9/5)",
        price: "$130.00",
        longDesc: "The white variant delivers speed and bold styling.",
        features: [
            "lightweight ",
            "casual wear",
            "Flexible ",
            "Sporty design"
        ]
    }
};
function updateTextWithFade(element, text) {
    element.classList.remove("show");
    setTimeout(() => {
        element.textContent = text;
        element.classList.add("show");
    }, 150);
}



variants.forEach(function (variant) {
    variant.addEventListener("click", function () {

        const color = this.dataset.color;
        const prefix = color.charAt(0);

        mainImage.src = `shoe-image/${color}/${prefix}main.png`;
        sideImages.forEach((img, index) => {
            img.src = `shoe-image/${color}/${prefix}${index + 1}.png`;
        });
 

        updateTextWithFade(document.getElementById("material"), variantData[color].material);
        updateTextWithFade(document.getElementById("description"), variantData[color].description);
        updateTextWithFade(document.getElementById("rating"), variantData[color].rating);
        updateTextWithFade(document.getElementById("price"), `MRP - ${variantData[color].price}`);
        
updateTextWithFade(longDesc, variantData[color].longDesc);

featuresList.innerHTML = "";
variantData[color].features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
});

    });
});


sideImages.forEach(function (image) {
    image.addEventListener("click", function () {
        mainImage.src = this.src;
    });
});

mainImage.src = `shoe-image/black/bmain.png`;
sideImages.forEach((img, index) => {
    img.src = `shoe-image/black/b${index + 1}.png`;
});
updateTextWithFade(document.getElementById("material"), variantData["black"].material);
updateTextWithFade(document.getElementById("description"), variantData["black"].description);
updateTextWithFade(document.getElementById("rating"), variantData["black"].rating);
updateTextWithFade(document.getElementById("price"), `MRP - ${variantData["black"].price}`);

const cartDropdown = document.querySelector(".cart-dropdown");
let cartItems = [];

button.addEventListener("click", function () {
    const selectedSize = document.querySelector(".size.active")?.textContent || "N/A";
    const variantColor = mainImage.src.split("/")[2]; // folder like "black"

    
    const existing = cartItems.find(item => item.color === variantColor && item.size === selectedSize);
    if (existing) {
        existing.quantity++;
    } else {
        cartItems.push({
            color: variantColor,
            size: selectedSize,
            quantity: 1,
            img: mainImage.src
        });
    }

 
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartDisplay.textContent = totalCount;

   
    cartDropdown.innerHTML = "";
    cartItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.img}" alt="shoe">
            <div class="cart-item-details">
                <p>Variant: ${item.color}</p>
                <p>Size: ${item.size}</p>
                <p>Qty: ${item.quantity}</p>
            </div>
        `;
        cartDropdown.appendChild(div);
    });
});

