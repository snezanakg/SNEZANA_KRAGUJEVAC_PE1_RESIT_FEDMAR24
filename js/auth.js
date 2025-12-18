// Authentication utilities

function isLoggedIn() {
  return localStorage.getItem("authToken") !== null;
}

function getAuthToken() {
  return localStorage.getItem("authToken");
}

function setAuthToken(token) {
  localStorage.setItem("authToken", token);
}

function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userEmail");
  window.location.href = "index.html";
}

function protectPage() {
  if (!isLoggedIn()) {
    window.location.href = "login.html";
  }
}

function updateNavigation() {
  const navLinks = document.querySelector(".nav-links");
  if (!navLinks) return;

  const loggedIn = isLoggedIn();

  if (loggedIn) {
    navLinks.innerHTML = `
      <li><a href="index.html" class="nav-link">Gallery</a></li>
      <li><a href="create.html" class="btn btn-primary">+ Add Artwork</a></li>
      <li><button onclick="logout()" class="nav-link" style="background:none;border:none;cursor:pointer;">Logout</button></li>
    `;
  } else {
    navLinks.innerHTML = `
      <li><a href="index.html" class="nav-link">Gallery</a></li>
      <li><a href="login.html" class="nav-link">Login</a></li>
      <li><a href="register.html" class="btn btn-primary">Register</a></li>
    `;
  }
}

document.addEventListener("DOMContentLoaded", updateNavigation);
const isUserLoggedIn = isLoggedIn;
