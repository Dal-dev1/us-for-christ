const menuIcon = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".side-menu");
const closeMenu = document.querySelector(".close-menu");

menuIcon.addEventListener("click", () => {
  sideMenu.style.right = "0";
  sideMenu.style.transition = "0.8s";
  menuIcon.style.opacity = "0";

  menuIcon.style.transition = "0.8s";
  closeMenu.style.opacity = "1";
  closeMenu.style.transition = "0.4s";
});

closeMenu.addEventListener("click", () => {
  sideMenu.style.right = "-100%";
  sideMenu.style.transition = "0.8s";
  closeMenu.style.opacity = "0";
  closeMenu.style.transition = "0.4s";
  menuIcon.style.opacity = "1";
  menuIcon.style.transition = "0.8s";
});
