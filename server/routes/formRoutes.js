const express = require("express");

const router = express.Router();


// ============================================
// CONTROLLERS
// ============================================

const {

  registerStudent,
  getStudents,
  getStudentByRegistrationId,

} = require("../controllers/formController");


// ============================================
// MULTER UPLOAD
// ============================================

const upload = require("../middleware/upload");


// ============================================
// CREATE STUDENT ROUTE
// ============================================

router.post(

  "/students",

  upload.fields([

    { name: "photo", maxCount: 1 },

    { name: "signature", maxCount: 1 },

    { name: "certificate", maxCount: 1 },

  ]),

  registerStudent

);


// ============================================
// GET ALL STUDENTS
// ============================================

router.get("/students", getStudents);

router.get(

  "/students/:registrationId",

  getStudentByRegistrationId

);


// ============================================
// EXPORT ROUTER
// ============================================

module.exports = router;

