# 💊 PWM Pharmacy – Full Stack Medicine Availability Web App

**PWM (Placeholder Web Meds)** is a simplified full-stack pharmacy web application. It allows users to check availability of products, manage a shopping cart, place cash-on-delivery orders, and review their order history – all designed to eventually integrate with the Marg accounting system.

---

## 🚀 Features Implemented (Frontend Phase - Vanilla HTML/CSS/JS)

### ✅ Pages
- **Home (`index.html`)** – Product listings with Add to Cart functionality.
- **Cart (`cart.html`)** – View/update/remove cart items, and proceed to payment.
- **Payment (`payment.html`)** – Address form and order confirmation.
- **My Orders (`myorders.html`)** – Displays order history post-purchase.
- **Sign Up (`signup.html`)** – Register new users, saved in `localStorage`.
- **Sign In (`signin.html`)** – Login form (linked with stored users).
- **Responsive Navigation Bar** – Consistent across all pages.
- **Footer with Contact Info** – Like Amazon/Flipkart, on every page.

### 🛍 Cart Functionalities
- Add products to cart from home page.
- Prevents duplicate entries (increments quantity).
- Quantity buttons and price updates in cart.
- Remove from cart functionality.

### 🔒 User Management (Mock Only)
- Sign up stores users in `localStorage`.
- Sign in validates from `localStorage`.
- Redirection to My Orders only when logged in.
- "My Orders" linked to logged-in user identity.

---

## 🛠 Technologies Used

| Layer        | Stack                     |
|--------------|---------------------------|
| Frontend     | HTML, CSS, JavaScript     |
| Data Storage | `localStorage` (temporary)|
| Image Assets | Placeholder via URLs      |

---

## 📂 Folder Structure

pharma/
│
├── index.html
├── cart.html
├── payment.html
├── myorders.html
├── signup.html
├── signin.html
│
├── Scripts/
│ ├── home.js
│ ├── cart.js
│ ├── payment.js
│ ├── signup.js
│ ├── signin.js
│ └── components/navbar.js
│
├── Styles/
│ ├── index.css
│ ├── cart.css
│ ├── payment.css
│ ├── signup.css
│ ├── signin.css
│ ├── navbar.css
│ └── footer.css
│
├── Images/ (optional)
│ └── [Placeholder assets or Marg product images]
│
└── README.md


---

## 🚧 Upcoming Features

- [ ] **User Authentication Layer (backend or SQLite alternative)**
- [ ] **"My Orders" linked to specific users**
- [ ] **Search Bar on Home Page**
- [ ] **Marg Inventory Integration (via API/CSV)**
- [ ] **Delivery Service Logic (2km radius + disclaimer)**
- [ ] **Enhanced Product View with dynamic images**

---

## 📦 Current Limitations

- All data is stored in-browser using `localStorage`.
- No real transaction processing (COD only).
- No backend/API integration yet.

---

## 🧪 Testing Instructions

1. Clone or download the repository.
2. Open `index.html` in a browser (preferably Live Server).
3. Sign up using `signup.html`.
4. Login via `signin.html`.
5. Add products to cart and test the full flow.
6. Visit `My Orders` to verify placed orders.

---
