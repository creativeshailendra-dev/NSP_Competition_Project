/* ========================================= */
/* LOAD NAVBAR */
/* ========================================= */

fetch("./components/navbar.html")

.then((response) => response.text())

.then((data) => {

  document.getElementById(
    "navbar"
  ).innerHTML = data;

});


/* ========================================= */
/* HIDE NAVBAR ON SCROLL */
/* ========================================= */

let lastScroll = 0;

window.addEventListener(
  "scroll",
  function () {

    const navbar =
      document.querySelector(".navbar");

    const currentScroll =
      window.pageYOffset;

    if (!navbar) return;

    if (currentScroll > lastScroll) {

      navbar.classList.add(
        "nav-hide"
      );

    } else {

      navbar.classList.remove(
        "nav-hide"
      );

    }

    lastScroll = currentScroll;

  }
);

/* ========================================= */
/* LOAD NAVBAR */
/* ========================================= */

fetch("./components/navbar.html")

.then((response) => response.text())

.then((data) => {

  document.getElementById("navbar").innerHTML = data;

  initNavbar();

});


/* ========================================= */
/* NAVBAR FUNCTION */
/* ========================================= */

function initNavbar(){

let lastScroll = 0;

const navbar =
document.querySelector(".navbar");

window.addEventListener(
"scroll",

function(){

const currentScroll =
window.pageYOffset;

if(currentScroll > lastScroll){

navbar.classList.add("nav-hide");

}

else{

navbar.classList.remove("nav-hide");

}

lastScroll = currentScroll;

});

}