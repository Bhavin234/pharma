document.getElementById("addressForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const pin = document.getElementById("pin").value.trim();

  if (!name || !email || !number || !address || !city || !state || !pin) {
    alert("Please fill in all fields.");
    return;
  }

  // Mock: Store order in localStorage
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders.push({
    name,
    email,
    number,
    address,
    city,
    state,
    pin,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    date: new Date().toLocaleString(),
  });

  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear cart after order
  localStorage.removeItem("cart");

  alert("Order placed successfully! You can view it in 'My Orders'.");
  window.location.href = "myorders.html";
});
