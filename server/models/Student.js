const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(

  {

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    fatherName: {
      type: String,
      required: true,
    },

    motherName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    competition: {
      type: String,
      required: true,
    },

    fees: {
      type: Number,
      required: true,
    },

    registrationId: {
      type: String,
      required: true,
    },

    paymentStatus: {
      type: String,
      default: "Paid",
    },

    photo: {
      type: String,
    },

    signature: {
      type: String,
    },

    certificate: {
      type: String,
    },

  },

  {
    timestamps: true,
  }

);

module.exports = mongoose.model("Student", studentSchema);