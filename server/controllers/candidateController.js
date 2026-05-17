const Candidate = require("../models/Candidate");

/* =========================================
REGISTER CANDIDATE
========================================= */

const registerCandidate = async (req, res) => {
  try {
    /* =========================================
        BODY DATA
        ========================================= */

    const {
      fullName,
      fatherName,
      motherName,
      dateOfBirth,
      gender,
      category,
      religion,
      maritalStatus,
      nationality,

      mobile,
      alternateMobile,
      whatsappNumber,
      email,

      country,
      state,
      district,
      tehsil,
      villageCity,
      fullAddress,
      pincode,

      qualification,
      instituteName,
      passingYear,
      percentage,
      skills,

      schemeCategory,
      currentStatus,
      internetUsage,
      purpose,

      aadhaarNumber,
    } = req.body;

    /* =========================================
        FILES
        ========================================= */

    const passportPhoto = req.files?.passportPhoto?.[0]?.filename || "";

    const signature = req.files?.signature?.[0]?.filename || "";

    const idProof = req.files?.idProof?.[0]?.filename || "";

    const qualificationCertificate =
      req.files?.qualificationCertificate?.[0]?.filename || "";

    /* =========================================
        REGISTRATION ID
        ========================================= */

    const randomNumber = Math.floor(100000 + Math.random() * 900000);

    const registrationId = `NSC2026${randomNumber}`;

    /* =========================================
        PAYMENT STATUS
        ========================================= */

    const paymentStatus = "Paid";

    /* =========================================
        APPLICATION STATUS
        ========================================= */

    const applicationStatus = "Submitted";

    /* =========================================
        CREATE CANDIDATE
        ========================================= */

    const candidate = new Candidate({
      fullName,
      fatherName,
      motherName,
      dateOfBirth,
      gender,
      category,
      religion,
      maritalStatus,
      nationality,

      mobile,
      alternateMobile,
      whatsappNumber,
      email,

      country,
      state,
      district,
      tehsil,
      villageCity,
      fullAddress,
      pincode,

      qualification,
      instituteName,
      passingYear,
      percentage,
      skills,

      schemeCategory,
      currentStatus,
      internetUsage,
      purpose,

      aadhaarNumber,

      passportPhoto,
      signature,
      idProof,
      qualificationCertificate,

      registrationId,

      paymentStatus,

      applicationStatus,
    });

    /* =========================================
        SAVE DATABASE
        ========================================= */

    await candidate.save();

    /* =========================================
        SUCCESS
        ========================================= */

    res.status(201).json({
      success: true,

      message: "Registration Successful",

      candidate,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

/* =========================================
GET CANDIDATE STATUS
========================================= */

const getCandidateStatus = async (req, res) => {
  try {
    const registrationId = req.params.registrationId;

    const candidate = await Candidate.findOne({
      registrationId,
    });

    /* NOT FOUND */

    if (!candidate) {
      return res.status(404).json({
        success: false,

        message: "Application Not Found",
      });
    }

    /* SUCCESS */

    res.status(200).json({
      success: true,

      candidate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

/* =========================================
EXPORTS
========================================= */

module.exports = {
  registerCandidate,

  getCandidateStatus,
};
