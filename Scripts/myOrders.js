window.addEventListener("DOMContentLoaded", () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const container = document.getElementById("orders-container");

  if (orders.length === 0) {
    container.innerHTML = `<p style="text-align:center;">You have no orders yet.</p>`;
    return;
  }

  orders.forEach((order, index) => {
    const orderCard = document.createElement("div");
    orderCard.className = "order-card";

    const details = `
      <h3>Order #${index + 1}</h3>
      <p><strong>Name:</strong> ${order.name}</p>
      <p><strong>Email:</strong> ${order.email}</p>
      <p><strong>Phone:</strong> ${order.number}</p>
      <p><strong>Address:</strong> ${order.address}, ${order.city}, ${order.state} - ${order.pin}</p>
      <p><strong>Placed On:</strong> ${order.date}</p>
      <h4>Items Ordered:</h4>
      <ul>
        ${order.cart
          .map(
            (item) => `
          <li>
            ${item.name} - Qty: ${item.qty || 1}, ₹${item.price}
          </li>`
          )
          .join("")}
      </ul>
    `;

    orderCard.innerHTML = details;
    container.appendChild(orderCard);
  });
});
