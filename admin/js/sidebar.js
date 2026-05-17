/* ====================================
SIDEBAR SYSTEM
==================================== */

const menuToggle =
document.querySelector(
    ".menu-toggle"
);

const mobileOverlay =
document.querySelector(
    ".mobile-nav-overlay"
);

const mobileClose =
document.querySelector(
    ".mobile-close-btn"
);

/* ====================================
OPEN MOBILE NAV
==================================== */

if(menuToggle){

    menuToggle.addEventListener(
        "click",
        function(){

            mobileOverlay.classList.add(
                "active"
            );

            document.body.style.overflow =
            "hidden";

        }
    );

}

/* ====================================
CLOSE MOBILE NAV
==================================== */

if(mobileClose){

    mobileClose.addEventListener(
        "click",
        function(){

            mobileOverlay.classList.remove(
                "active"
            );

            document.body.style.overflow =
            "auto";

        }
    );

}

/* ====================================
OVERLAY CLOSE
==================================== */

if(mobileOverlay){

    mobileOverlay.addEventListener(
        "click",
        function(event){

            if(
                event.target === mobileOverlay
            ){

                mobileOverlay.classList.remove(
                    "active"
                );

                document.body.style.overflow =
                "auto";

            }

        }
    );

}