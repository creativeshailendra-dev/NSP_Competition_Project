/* ====================================
FORM
==================================== */

const loginForm =
    document.getElementById("loginForm");

/* ====================================
INPUTS
==================================== */

const adminEmail =
    document.getElementById("adminEmail");

const adminPassword =
    document.getElementById("adminPassword");

/* ====================================
SUBMIT EVENT
==================================== */

loginForm.addEventListener(

    "submit",

    function (e) {

        e.preventDefault();

        /* CLEAR OLD ERRORS */

        document
            .querySelectorAll(".error-text")

            .forEach((error) => {

                error.innerText = "";

            });

        let isValid = true;

        /* ====================================
           EMAIL VALIDATION
        ==================================== */

        const emailPattern =
            /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (
            adminEmail.value.trim() === ""
        ) {

            showError(
                adminEmail,

                "Email is required"
            );

            isValid = false;

        } else if (
            !emailPattern.test(
                adminEmail.value.trim()
            )
        ) {

            showError(
                adminEmail,

                "Enter valid email"
            );

            isValid = false;

        }

        /* ====================================
           PASSWORD VALIDATION
        ==================================== */

        if (
            adminPassword.value.trim() === ""
        ) {

            showError(
                adminPassword,

                "Password is required"
            );

            isValid = false;

        } else if (
            adminPassword.value.trim().length < 6
        ) {

            showError(
                adminPassword,

                "Minimum 6 characters required"
            );

            isValid = false;

        }

        /* ====================================
           SUCCESS
        ==================================== */

        if (isValid) {

            /* SAVE LOGIN */

            localStorage.setItem(
                "adminLoggedIn",

                "true"
            );

            localStorage.setItem(
                "adminEmail",

                adminEmail.value
            );

            /* SUCCESS MESSAGE */

            alert(
                "✅ Login Successful"
            );

            /* REDIRECT */

            window.location.href =
                "./dashboard.html";

        }

    }

);

/* ====================================
SHOW ERROR FUNCTION
==================================== */

function showError(
    input,

    message
) {

    const inputGroup =
        input.closest(".input-group");

    const errorText =
        inputGroup.querySelector(
            ".error-text"
        );

    errorText.innerText = message;

}