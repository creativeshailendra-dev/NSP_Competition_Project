// ======================================
// BUTTON
// ======================================

const trackBtn =

  document.getElementById("trackBtn");


// ======================================
// BUTTON CLICK
// ======================================

trackBtn.addEventListener(

  "click",

  async function () {

    // ==================================
    // GET INPUT
    // ==================================

    const registrationId =

      document
        .getElementById("registrationInput")
        .value
        .trim();


    // ==================================
    // EMPTY CHECK
    // ==================================

    if (!registrationId) {

      alert(

        "Please Enter Registration ID"

      );

      return;

    }


    try {

      // ==================================
      // FETCH API
      // ==================================

      const response = await fetch(

        `http://https://nsp-backend-jx1j.onrender.com/api/students/${registrationId}`

      );


      // ==================================
      // JSON DATA
      // ==================================

      const data =
        await response.json();


      console.log(data);


      // ==================================
      // NOT FOUND
      // ==================================

      if (!data.success) {

        document.getElementById(
          "trackResult"
        ).innerHTML = `

          <div class="track-error">

            Registration Not Found

          </div>

        `;

        return;

      }


      // ==================================
      // STUDENT DATA
      // ==================================

      const student =
        data.student;


      // ==================================
      // SHOW RESULT
      // ==================================

      document.getElementById(
        "trackResult"
      ).innerHTML = `

        <div class="track-card">

          <img

            src="http://https://nsp-backend-jx1j.onrender.com/uploads/${student.photo}"

            class="track-photo"

          >

          <div class="track-details">

            <h2>

              ${student.firstName}
              ${student.lastName}

            </h2>

            <p>

              <strong>
              Registration ID:
              </strong>

              ${student.registrationId}

            </p>

            <p>

              <strong>
              Competition:
              </strong>

              ${student.competition}

            </p>

            <p>

              <strong>
              Email:
              </strong>

              ${student.email}

            </p>

            <p>

              <strong>
              Phone:
              </strong>

              ${student.phone}

            </p>

            <p>

              <strong>
              Payment:
              </strong>

              ${student.paymentStatus}

            </p>

          </div>

        </div>

      `;

    }

    catch (error) {

      console.log(error);

      alert("Server Error");

    }

  }

);