/* ====================================
DASHBOARD PAGE SYSTEM
==================================== */

console.log(
    "Dashboard Page Loaded"
);

/* ====================================
NOTIFICATION TOGGLE
==================================== */

const notificationBtn =
    document.querySelector(
        ".notification-btn-topbar"
    );

const notificationDropdown =
    document.querySelector(
        ".notification-dropdown"
    );

if (
    notificationBtn &&
    notificationDropdown
) {

    notificationBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            notificationDropdown.classList.toggle(
                "active"
            );

        }
    );

}

/* ====================================
PROFILE DROPDOWN
==================================== */

const profileBtn =
    document.querySelector(
        ".admin-account"
    );

const profileDropdown =
    document.querySelector(
        ".profile-dropdown"
    );

if (
    profileBtn &&
    profileDropdown
) {

    profileBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            profileDropdown.classList.toggle(
                "active"
            );

        }
    );

}

/* ====================================
FLOATING BUTTON
==================================== */

const floatingButton =
    document.querySelector(
        ".floating-main-btn"
    );

const floatingMenu =
    document.querySelector(
        ".floating-actions-menu"
    );

if (
    floatingButton &&
    floatingMenu
) {

    floatingButton.addEventListener(
        "click",
        function () {

            floatingMenu.classList.toggle(
                "active-floating-menu"
            );

        }
    );

}