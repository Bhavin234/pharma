// cart.js

// Get references to DOM elements
const cartTableBody = document.querySelector("#cart-table tbody");
const totalAmountDisplay = document.getElementById("total-amount");
const checkoutBtn = document.getElementById("checkout-btn");

// Fetch cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Function to render cart table
function renderCart() {
  cartTableBody.innerHTML = "";
  let total = 0;

  if (cartItems.length === 0) {
    cartTableBody.innerHTML =
      "<tr><td colspan='4'>Your cart is empty.</td></tr>";
    totalAmountDisplay.textContent = "₹0";
    checkoutBtn.disabled = true;
    return;
  }

  cartItems.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td>₹${item.price}</td>
      <td>${item.quantity}</td>
      <td><button data-index="${index}" class="remove-btn">Remove</button></td>
    `;

    cartTableBody.appendChild(row);
    total += item.price * item.quantity;
  });

  totalAmountDisplay.textContent = `₹${total}`;
  checkoutBtn.disabled = false;
}

// Remove item from cart
cartTableBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove-btn")) {
    const index = e.target.getAttribute("data-index");
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCart();
  }
});

// Proceed to payment
checkoutBtn.addEventListener("click", () => {
  if (cartItems.length === 0) {
    alert("Cart is empty!");
    return;
  }
  // Save for later use in payment or order summary
  localStorage.setItem("cart", JSON.stringify(cartItems));
  window.location.href = "payment.html";
});

// Initial render
renderCart();
