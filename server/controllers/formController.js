const Student = require("../models/Student");


// ===================================
// REGISTER STUDENT
// ===================================

const registerStudent = async (req, res) => {

  try {

    // ===================================
    // FORM DATA
    // ===================================

    const {

      firstName,
      lastName,
      fatherName,
      motherName,
      email,
      phone,
      competition,
      fees,

    } = req.body;



    // ===================================
    // REGISTRATION ID
    // ===================================

    const registrationId =
      "NSC-" + Date.now();



    // ===================================
    // FILE PATHS
    // ===================================

    const photo =
      req.files?.photo?.[0]?.filename || "";

    const signature =
      req.files?.signature?.[0]?.filename || "";

    const certificate =
      req.files?.certificate?.[0]?.filename || "";



    // ===================================
    // CREATE STUDENT
    // ===================================

    const student = new Student({

      registrationId,

      firstName,
      lastName,

      fatherName,
      motherName,

      email,
      phone,

      competition,
      fees,

      photo,
      signature,
      certificate,

    });



    // ===================================
    // SAVE TO DATABASE
    // ===================================

    await student.save();



    // ===================================
    // SUCCESS RESPONSE
    // ===================================

    res.status(201).json({

      success: true,

      message: "Registration Successful",

      registrationId,

      student,

    });

  }

  catch (error) {

    // ===================================
    // ERROR LOG
    // ===================================

    console.log("❌ Registration Error");

    console.log(error);



    // ===================================
    // ERROR RESPONSE
    // ===================================

    res.status(500).json({

      success: false,

      message: "Server Error",

      error: error.message,

    });

  }

};



// ===================================
// GET ALL STUDENTS
// ===================================

const getStudents = async (req, res) => {

  try {

    // ===================================
    // FETCH STUDENTS
    // ===================================

    const students =
      await Student.find().sort({

        createdAt: -1,

      });



    // ===================================
    // SUCCESS RESPONSE
    // ===================================

    res.status(200).json({

      success: true,

      total: students.length,

      data: students,

    });

  }

  catch (error) {

    // ===================================
    // ERROR LOG
    // ===================================

    console.log("❌ Fetch Students Error");

    console.log(error);



    // ===================================
    // ERROR RESPONSE
    // ===================================

    res.status(500).json({

      success: false,

      message: "Server Error",

      error: error.message,

    });

  }

};

// ===================================
// GET STUDENT BY REGISTRATION ID
// ===================================

const getStudentByRegistrationId =

  async (req, res) => {

    try {

      // ==========================
      // GET REGISTRATION ID
      // ==========================

      const registrationId =

        req.params.registrationId;


      // ==========================
      // FIND STUDENT
      // ==========================

      const student =

        await Student.findOne({

          registrationId,

        });


      // ==========================
      // NOT FOUND
      // ==========================

      if (!student) {

        return res.status(404).json({

          success: false,

          message:
            "Student Not Found",

        });

      }


      // ==========================
      // SUCCESS
      // ==========================

      res.status(200).json({

        success: true,

        student,

      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({

        success: false,

        message: "Server Error",

      });

    }

  };

// ===================================
// EXPORTS
// ===================================

module.exports = {

  registerStudent,
  getStudents,
  getStudentByRegistrationId,

};