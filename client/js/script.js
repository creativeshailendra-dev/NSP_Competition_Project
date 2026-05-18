// ==========================================
// SELECT ELEMENTS
// ==========================================

const registrationForm = document.getElementById("registrationForm");

const competitionSelect = document.getElementById("competitionSelect");

const feesAmount = document.getElementById("feesAmount");

const paymentBtn = document.getElementById("paymentBtn");

// ==========================================
// DYNAMIC FEES UPDATE
// ==========================================

competitionSelect.addEventListener("change", () => {
  const selectedFees = competitionSelect.value;

  feesAmount.innerText = `₹${selectedFees}`;
});

// ==========================================
// PAYMENT BUTTON CLICK
// ==========================================

paymentBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  // ==========================================
  // FORM VALIDATION
  // ==========================================

  if (!registrationForm.checkValidity()) {
    alert("⚠ Please fill all required fields");

    return;
  }

  // ==========================================
  // BUTTON LOADING
  // ==========================================

  paymentBtn.innerText = "Processing Payment...";

  paymentBtn.disabled = true;

  // ==========================================
  // FORM DATA
  // ==========================================

  const formData = new FormData(registrationForm);

  // ==========================================
  // FEES
  // ==========================================

  const amount = parseInt(registrationForm.competition.value);

  // ==========================================
  // APPEND FEES
  // ==========================================

  formData.append("fees", amount);

  // ==========================================
  // AUTO REGISTRATION ID
  // ==========================================

  const registrationId = "NSC" + Date.now();

  formData.append(
    "registrationId",

    registrationId,
  );

  // ==========================================
  // RAZORPAY OPTIONS
  // ==========================================

  const options = {
    key: "rzp_test_Sm1eq1A7X082JJ",

    amount: amount * 100,

    currency: "INR",

    name: "National Skill Competition",

    description: "Competition Registration Payment",

    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

    theme: {
      color: "#2563eb",
    },

    // ==========================================
    // PAYMENT SUCCESS
    // ==========================================

    handler: async function (response) {
      try {
        // ==========================================
        // SEND DATA TO BACKEND
        // ==========================================

        const res = await fetch(
          "http://https://nsp-backend-jx1j.onrender.com/api/students",

          {
            method: "POST",

            body: formData,
          },
        );

        // ==========================================
        // RESPONSE
        // ==========================================

        const result = await res.json();

        console.log(result);

        // ==========================================
        // SUCCESS
        // ==========================================

        if (result.success) {
          // ==========================================
          // UPDATE DATA
          // ==========================================

          result.student.registrationId = registrationId;

          result.student.paymentStatus = "Paid";

          result.student.applicationStatus = "Registration Successful";

          result.student.paymentId = response.razorpay_payment_id;

          result.student.submissionDate = new Date().toLocaleDateString();

          // ==========================================
          // SAVE COMPLETE DATA
          // ==========================================

          localStorage.setItem(
            "studentData",

            JSON.stringify(result.student),
          );

          // ==========================================
          // SUCCESS MESSAGE
          // ==========================================

          alert("✅ Registration Completed Successfully");

          // ==========================================
          // REDIRECT
          // ==========================================

          window.location.href = "./receipt.html";
        }

        // ==========================================
        // FAILED
        // ==========================================
        else {
          alert(result.message);
        }
      } catch (error) {
        // ==========================================
        // ERROR
        // ==========================================

        console.log(error);

        alert("❌ Server Error");
      }

      // ==========================================
      // BUTTON RESET
      // ==========================================

      paymentBtn.innerText = "Complete Registration";

      paymentBtn.disabled = false;
    },
  };

  // ==========================================
  // OPEN RAZORPAY
  // ==========================================

  const razorpay = new Razorpay(options);

  razorpay.open();
});
