const mongoose = require("mongoose");

// ========================================
// CANDIDATE SCHEMA
// ========================================

const candidateSchema = new mongoose.Schema(
  {
    // ========================================
    // PERSONAL DETAILS
    // ========================================

    fullName: {
      type: String,

      required: true,

      trim: true,
    },

    fatherName: {
      type: String,

      required: true,
    },

    motherName: {
      type: String,

      required: true,
    },

    dateOfBirth: {
      type: String,

      required: true,
    },

    gender: {
      type: String,

      required: true,
    },

    category: {
      type: String,
    },

    religion: {
      type: String,
    },

    maritalStatus: {
      type: String,
    },

    nationality: {
      type: String,

      default: "Indian",
    },

    // ========================================
    // CONTACT DETAILS
    // ========================================

    mobile: {
      type: String,

      required: true,

      unique: true,
    },

    alternateMobile: {
      type: String,
    },

    whatsappNumber: {
      type: String,
    },

    email: {
      type: String,

      lowercase: true,
    },

    // ========================================
    // ADDRESS DETAILS
    // ========================================

    country: {
      type: String,
    },

    state: {
      type: String,
    },

    district: {
      type: String,
    },

    tehsil: {
      type: String,
    },

    villageCity: {
      type: String,
    },

    fullAddress: {
      type: String,
    },

    pincode: {
      type: String,
    },

    // ========================================
    // EDUCATION
    // ========================================

    qualification: {
      type: String,
    },

    instituteName: {
      type: String,
    },

    passingYear: {
      type: String,
    },

    percentage: {
      type: String,
    },

    skills: {
      type: String,
    },

    // ========================================
    // YOJANA DETAILS
    // ========================================

    schemeCategory: {
      type: String,
    },

    currentStatus: {
      type: String,
    },

    internetUsage: {
      type: String,
    },

    purpose: {
      type: String,
    },

    // ========================================
    // DOCUMENTS
    // ========================================

    aadhaarNumber: {
      type: String,
    },

    passportPhoto: {
      type: String,
    },

    signature: {
      type: String,
    },

    idProof: {
      type: String,
    },

    qualificationCertificate: {
      type: String,
    },

    // ========================================
    // APPLICATION STATUS
    // ========================================

    applicationStatus: {
      type: String,

      default: "Pending",
    },

    paymentStatus: {
      type: String,

      default: "Pending",
    },

    registrationId: {
      type: String,

      unique: true,
    },
  },

  {
    timestamps: true,
  },
);

// ========================================
// EXPORT MODEL
// ========================================

module.exports = mongoose.model(
  "Candidate",

  candidateSchema,
);
