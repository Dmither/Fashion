let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");

burger.addEventListener("click", function (event) {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("freeze")
})

