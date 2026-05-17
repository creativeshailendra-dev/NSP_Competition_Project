/* ===================================== */
/* PAYMENT PAGE SYSTEM */
/* ===================================== */

/* PAYMENT BUTTON */

const paymentBtn =
document.getElementById(
"paymentBtn"
);

/* VERIFY BUTTON */

const verifyBtn =
document.getElementById(
"verifyPaymentBtn"
);

/* CANDIDATE DATA */

const candidateData =

JSON.parse(
localStorage.getItem(
"candidateData"
)
);

/* SHOW DATA */

if(candidateData){

document.getElementById(
"payName"
).innerText =

candidateData.fullName || "N/A";

document.getElementById(
"payMobile"
).innerText =

candidateData.mobile || "N/A";

document.getElementById(
"payEmail"
).innerText =

candidateData.email || "N/A";

}

/* OPEN PAYMENT */

paymentBtn.addEventListener(
"click",
function(){

localStorage.setItem(
"paymentStarted",
"true"
);

});

/* VERIFY PAYMENT */

verifyBtn.addEventListener(
"click",
function(){

const paymentStarted =

localStorage.getItem(
"paymentStarted"
);

if(!paymentStarted){

alert(
"Please complete payment first."
);

return;

}

const confirmPayment = confirm(
"Have you completed payment successfully?"
);

if(confirmPayment){

localStorage.setItem(
"paymentSuccess",
"true"
);

localStorage.removeItem(
"paymentStarted"
);

window.location.href =
"./success.html";

}

});