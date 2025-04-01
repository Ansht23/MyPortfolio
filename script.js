function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu");
  const navList = document.querySelector("nav ul");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
