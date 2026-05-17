const upload = require("../middleware/uploadMiddleware");
const express = require("express");

const router = express.Router();

// ========================================
// IMPORT CONTROLLER
// ========================================

const {

    registerCandidate,

    getCandidateStatus

} = require(
    "../controllers/candidateController"
);

// ========================================
// REGISTER ROUTE
// ========================================

router.post(
    "/register",

    upload.fields([
        {
            name: "passportPhoto",
            maxCount: 1,
        },

        {
            name: "signature",
            maxCount: 1,
        },

        {
            name: "idProof",
            maxCount: 1,
        },

        {
            name: "qualificationCertificate",

            maxCount: 1,
        },
    ]),

    registerCandidate,
);

// ========================================
// TRACK APPLICATION STATUS
// ========================================

router.get(

    "/:registrationId",

    getCandidateStatus

);

// ========================================
// EXPORT ROUTER
// ========================================

module.exports = router;
