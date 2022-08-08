const scrollBehavior = document.querySelector("#scroll");
const menu = document.querySelector(".menu-mobile");
const menuLinks = document.querySelectorAll(".nav__list--menu .nav__link");
const toggle = document.querySelector("#menu-toggle");
const closeButton = document.querySelector("#closeButton");

toggle.addEventListener("click", () => {
  menu.classList.add("menu-mobile--show");
  scrollBehavior.classList.add("no-scroll");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("menu-mobile--show");
  scrollBehavior.classList.remove("no-scroll");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("menu-mobile--show");
    scrollBehavior.classList.remove("no-scroll");
  });
})