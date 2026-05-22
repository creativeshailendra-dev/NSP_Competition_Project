/* ========================================= */
/* LOAD NAVBAR */
/* ========================================= */

fetch("./components/navbar.html")

.then((response) => response.text())

.then((data) => {

    document.getElementById(
        "navbar"
    ).innerHTML = data;

    initNavbar();

    setActiveNav();

});


/* ========================================= */
/* LOAD FOOTER */
/* ========================================= */

fetch("./components/footer.html")

.then((response) => response.text())

.then((data) => {

    const footer =
    document.getElementById(
        "footer"
    );

    if(footer){

        footer.innerHTML = data;

    }

});


/* ========================================= */
/* PREMIUM NAVBAR UX */
/* ========================================= */

function initNavbar(){

    const navbar =
    document.querySelector(".navbar");

    let lastScroll = 0;

    window.addEventListener(

        "scroll",

        ()=>{

            let currentScroll =
            window.pageYOffset;

            /* TOP AREA */

            if(currentScroll <= 80){

                navbar.classList.remove(
                    "nav-hide"
                );

                return;

            }

            /* SCROLL DOWN */

            if(currentScroll > lastScroll){

                navbar.classList.add(
                    "nav-hide"
                );

            }

            /* SCROLL UP */

            else{

                navbar.classList.remove(
                    "nav-hide"
                );

            }

            lastScroll = currentScroll;

        }

    );

}


/* ========================================= */
/* ACTIVE NAV LINK */
/* ========================================= */

function setActiveNav(){

    const currentPage =
    window.location.pathname
    .split("/")
    .pop();

    const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

    navLinks.forEach((link)=>{

        const linkPath =
        link.getAttribute("href");

        /* REMOVE ./ */

        const cleanLink =
        linkPath.replace("./","");

        if(cleanLink === currentPage){

            link.classList.add(
                "active"
            );

        }

    });

}