// Scripts/home.js
import { addToCart } from './cart.js';

// Mock product list (replace with real data later)
const products = [
  {
    id: 1,
    name: "Dettol Handwash",
    price: 75,
    description: "Kills 99.9% germs",
    image: "https://via.placeholder.com/100"
  },
  {
    id: 2,
    name: "Paracetamol Tablet",
    price: 45,
    description: "Pain relief medicine",
    image: "https://via.placeholder.com/100"
  },
  {
    id: 3,
    name: "Vicks Inhaler",
    price: 60,
    description: "Relief from blocked nose",
    image: "https://via.placeholder.com/100"
  }
];

function renderProducts(products) {
  let container = document.querySelector("#product-list");
  if (!container) return;

  products.forEach(product => {
    let div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <p><strong>Rs. ${product.price}</strong></p>
      <button class="add-cart-btn">Add to Cart</button>
    `;

    div.querySelector(".add-cart-btn").addEventListener("click", () => {
      addToCart(product);
    });

    container.appendChild(div);
  });
}

renderProducts(products);
