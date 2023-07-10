let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");

burger.addEventListener("click", function (event) {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("freeze")
})

let links = Array.from(document.querySelectorAll(".header__link"));
links.forEach(link => {
  link.addEventListener("focus", function(event) {
    burger.classList.add("active");
    menu.classList.add("active");
    document.body.classList.add("freeze")
  })
});
links.forEach(link => {
  link.addEventListener("blur", function(event) {
    burger.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("freeze")
  })
})