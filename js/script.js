var button = document.querySelector(".nav__mobile");
button.addEventListener("click", function(e) {
    e.preventDefault();
    if(document.querySelector(".header__nav").classList.contains("nav__link_hide")) {
        document.querySelector(".header__nav").classList.remove("nav__link_hide");
    } else {
        document.querySelector(".header__nav").classList.add("nav__link_hide");
    }
  });   