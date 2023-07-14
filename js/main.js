let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let wrapper = document.querySelector(".wrapper");

burger.addEventListener("click", function (event) {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("freeze")
})

