const multer = require("multer");

const path = require("path");

/* ========================================
STORAGE
======================================== */

const storage = multer.diskStorage({

  destination: function (req, file, cb) {

    cb(null, "uploads/");

  },

  filename: function (req, file, cb) {

    const uniqueName =

      Date.now() +
      path.extname(file.originalname);

    cb(null, uniqueName);

  },

});

/* ========================================
FILE FILTER
======================================== */

const fileFilter = (req, file, cb) => {

  /* ALLOWED TYPES */

  const allowedMimeTypes = [

    "image/jpeg",

    "image/jpg",

    "image/png",

    "application/pdf",

  ];

  /* MIME CHECK */

  if (

    allowedMimeTypes.includes(
      file.mimetype
    )

  ) {

    cb(null, true);

  }

  else {

    cb(

      new Error(
        "Only JPG, PNG and PDF files are allowed"
      ),

      false

    );

  }

};

/* ========================================
UPLOAD
======================================== */

const upload = multer({

  storage,

  fileFilter,

  limits: {

    fileSize: 5 * 1024 * 1024,

  },

});

/* ========================================
EXPORT
======================================== */

module.exports = upload;