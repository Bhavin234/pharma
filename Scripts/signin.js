let loginForm = document.getElementById("loginForm");
let errorBox = document.querySelector(".erro_div");
let hideBtn = document.querySelector(".hide_erro_msg");

hideBtn.addEventListener("click", () => {
  errorBox.style.display = "none";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("login_username").value.trim();
  let password = document.getElementById("login_password").value.trim();

  let users = JSON.parse(localStorage.getItem("pwm_users")) || [];

  let matchedUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!matchedUser) {
    errorBox.style.display = "flex";
    return;
  }

  localStorage.setItem("pwm_loggedin", JSON.stringify(matchedUser));
  alert("Login successful!");
  window.location.href = "index.html";
});
