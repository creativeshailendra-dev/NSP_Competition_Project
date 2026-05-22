/* ======================================== */
/* NSP LEGAL PAGE SCRIPT */
/* Premium Professional Version */
/* ======================================== */


/* ======================================== */
/* CURRENT DATE */
/* ======================================== */

const currentDate =
new Date().toDateString();

const dateElements =
document.querySelectorAll(
    "#currentDate"
);

dateElements.forEach((item)=>{

    item.innerText =
    currentDate;

});


/* ======================================== */
/* SCROLL PROGRESS BAR */
/* ======================================== */

window.addEventListener(
    "scroll",

    ()=>{

        const scrollTop =
        document.documentElement.scrollTop;

        const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const scrollPercent =
        (scrollTop / scrollHeight) * 100;

        const progressBar =
        document.getElementById(
            "progressBar"
        );

        if(progressBar){

            progressBar.style.width =
            scrollPercent + "%";

        }

    }

);


/* ======================================== */
/* PDF DOWNLOAD SYSTEM */
/* ======================================== */

function downloadPDF(){

    const element =
    document.getElementById(
        "legalContent"
    );

    const options = {

        margin:0.5,

        filename:
        "NSP-Legal-Document.pdf",

        image:{
            type:"jpeg",
            quality:1
        },

        html2canvas:{
            scale:2,
            useCORS:true
        },

        jsPDF:{
            unit:"in",
            format:"a4",
            orientation:"portrait"
        }

    };

    html2pdf()
    .set(options)
    .from(element)
    .save();

}


/* ======================================== */
/* HERO FADE ANIMATION */
/* ======================================== */

window.addEventListener(
    "load",

    ()=>{

        const heroContent =
        document.querySelector(
            ".hero-content"
        );

        if(heroContent){

            heroContent.style.opacity = "0";

            heroContent.style.transform =
            "translateY(40px)";

            setTimeout(()=>{

                heroContent.style.transition =
                "all 1s ease";

                heroContent.style.opacity = "1";

                heroContent.style.transform =
                "translateY(0px)";

            },200);

        }

    }

);


/* ======================================== */
/* CARD SCROLL ANIMATION */
/* ======================================== */

const cards =
document.querySelectorAll(
    ".policy-card, .trust-card"
);

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "show-card"
            );

        }

    });

},

{
    threshold:0.15
}

);

cards.forEach((card)=>{

    observer.observe(card);

});


/* ======================================== */
/* ACTIVE NAV LINK */
/* ======================================== */

window.addEventListener(
    "DOMContentLoaded",

    ()=>{

        const currentPage =
        window.location.pathname
        .split("/")
        .pop();

        const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

        navLinks.forEach((link)=>{

            const linkPage =
            link.getAttribute("href");

            if(linkPage === currentPage){

                link.classList.add(
                    "active"
                );

            }

        });

    }

);


/* ======================================== */
/* SMOOTH SCROLL TOP BUTTON */
/* ======================================== */

const scrollButton =
document.createElement("button");

scrollButton.innerHTML =
`<i class="fa-solid fa-arrow-up"></i>`;

scrollButton.classList.add(
    "scroll-top-btn"
);

document.body.appendChild(
    scrollButton
);


/* ======================================== */
/* SHOW/HIDE SCROLL BUTTON */
/* ======================================== */

window.addEventListener(
    "scroll",

    ()=>{

        if(window.scrollY > 500){

            scrollButton.classList.add(
                "show-scroll-btn"
            );

        }

        else{

            scrollButton.classList.remove(
                "show-scroll-btn"
            );

        }

    }

);


/* ======================================== */
/* SCROLL TO TOP */
/* ======================================== */

scrollButton.addEventListener(
    "click",

    ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

);


/* ======================================== */
/* CONSOLE BRANDING */
/* ======================================== */

console.log(

"%c NSP Legal System Loaded Successfully",

"color:#ff9800; font-size:16px; font-weight:bold;"

);