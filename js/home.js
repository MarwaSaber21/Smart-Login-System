document.addEventListener("DOMContentLoaded", function () {
  let paragraph = document.getElementById("paragraphHome");
  let username = localStorage.getItem("userName");

  if (username) {
    paragraph.innerHTML += " " + username.charAt(0).toUpperCase() + username.slice(1);

  } else {
    window.location = "./index.html";
    return;
  }

  let logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("userName");
    window.location = "./index.html"; // Redirect to index.html after logout
  });
});
