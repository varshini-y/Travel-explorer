
// Highlight the active navigation link
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// Display an alert message
function showAlert(message) {
  alert(message);
}

// Navigate to a different page
function navigateTo(page) {
  window.location.href = page;
}
