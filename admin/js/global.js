/* ====================================
GLOBAL DASHBOARD SYSTEM
==================================== */

console.log(
    "NSP Portal Dashboard Initialized"
);

/* ====================================
GLOBAL SELECTORS
==================================== */

const body = document.body;

/* ====================================
HELPER FUNCTION
==================================== */

function toggleClass(
    element,
    className
) {

    if (element) {

        element.classList.toggle(className);

    }

}

/* ====================================
CLOSE ALL DROPDOWNS
==================================== */

function closeAllDropdowns() {

    document
        .querySelectorAll(
            ".notification-dropdown, .profile-dropdown"
        )
        .forEach(dropdown => {

            dropdown.classList.remove("active");

        });

}

/* ====================================
WINDOW CLICK
==================================== */

window.addEventListener(
    "click",
    function (event) {

        if (
            !event.target.closest(
                ".notification-btn-topbar"
            ) &&
            !event.target.closest(
                ".notification-dropdown"
            )
        ) {

            const notification =
                document.querySelector(
                    ".notification-dropdown"
                );

            if (notification) {

                notification.classList.remove(
                    "active"
                );

            }

        }

        if (
            !event.target.closest(
                ".admin-account"
            ) &&
            !event.target.closest(
                ".profile-dropdown"
            )
        ) {

            const profile =
                document.querySelector(
                    ".profile-dropdown"
                );

            if (profile) {

                profile.classList.remove(
                    "active"
                );

            }

        }

    }
);