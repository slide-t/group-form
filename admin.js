function loginAdmin() {
  const username = document.getElementById("admin-username").value.trim();
  const password = document.getElementById("admin-password").value.trim();
  const errorMsg = document.getElementById("login-error");

  // Replace with your actual credentials
  const validUsername = "admin";
  const validPassword = "admin123";

  if (username === validUsername && password === validPassword) {
    errorMsg.textContent = "";
    window.location.href = "dashboard.html"; // redirect to admin dashboard
  } else {
    errorMsg.textContent = "Invalid username or password. Try again!";
  }
}

