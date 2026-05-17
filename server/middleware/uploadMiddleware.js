const multer = require("multer");

const path = require("path");

// ========================================
// STORAGE
// ========================================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

// ========================================
// FILE FILTER
// ========================================

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpg|jpeg|png|pdf/;

  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase(),
  );

  if (extname) {
    return cb(null, true);
  }

  cb("Only Images & PDF Allowed");
};

// ========================================
// UPLOAD
// ========================================

const upload = multer({
  storage,

  fileFilter,
});

module.exports = upload;
