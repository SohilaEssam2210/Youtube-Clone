const menu = document.querySelector(".home");
const sideBar = document.querySelector(".sidebar");

menu.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});
