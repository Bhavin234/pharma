let form = document.getElementById("signupForm");
let errorBox = document.querySelector(".erro_div");
let hideBtn = document.querySelector(".hide_erro_msg");

hideBtn.addEventListener("click", () => {
  errorBox.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let mobile = document.getElementById("mobile").value.trim();

  let users = JSON.parse(localStorage.getItem("pwm_users")) || [];

  let userExists = users.some((user) => user.username === username);

  if (userExists) {
    errorBox.style.display = "flex";
    return;
  }

  let newUser = {
    name,
    email,
    username,
    password,
    mobile,
    orders: [],
  };

  users.push(newUser);
  localStorage.setItem("pwm_users", JSON.stringify(users));

  alert("Signup successful! Redirecting to login.");
  window.location.href = "signIn.html";
});

if (!localStorage.getItem("pwm_users")) {
  const testUser = {
    name: "Test User",
    email: "test@pwm.com",
    username: "test",
    password: "1234",
    mobile: "9999999999",
    description: "tester"
  };
  localStorage.setItem("pwm_users", JSON.stringify([testUser]));
}
