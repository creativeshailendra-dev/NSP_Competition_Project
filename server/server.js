require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");

const fs = require("fs");

const Razorpay = require("razorpay");

/* ========================================
EXPRESS APP
======================================== */

const app = express();

/* ========================================
CORS
======================================== */

app.use(
  cors({
    origin: "https://nsp-frontend-dgwu.onrender.com",

    methods: ["GET", "POST"],

    credentials: true,
  })
);

/* ========================================
BODY PARSER
======================================== */

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/* ========================================
UPLOADS FOLDER
======================================== */

if (!fs.existsSync(path.join(__dirname, "uploads"))) {

  fs.mkdirSync(path.join(__dirname, "uploads"));

}

/* ========================================
STATIC FOLDER
======================================== */

app.use(
  "/uploads",

  express.static(path.join(__dirname, "uploads"))
);

/* ========================================
RAZORPAY
======================================== */

const razorpay = new Razorpay({

  key_id: process.env.RAZORPAY_KEY_ID,

  key_secret: process.env.RAZORPAY_KEY_SECRET,

});

/* ========================================
ROUTES
======================================== */

const candidateRoutes = require("./routes/candidateRoutes");

/* ========================================
RAZORPAY ORDER ROUTE
======================================== */

app.post("/create-order", async (req, res) => {

  try {

    const options = {

      amount: 40800,

      currency: "INR",

      receipt: `receipt_${Date.now()}`,

    };

    const order = await razorpay.orders.create(options);

    res.status(200).json(order);

  }

  catch (error) {

    console.log("RAZORPAY ERROR");

    console.log(error);

    res.status(500).json({

      success: false,

      message: "Order creation failed",

    });

  }

});

/* ========================================
API ROUTES
======================================== */

app.use(
  "/api/candidates",

  candidateRoutes
);

/* ========================================
HOME ROUTE
======================================== */

app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message: "🚀 Backend Running Successfully",

  });

});

/* ========================================
MONGODB CONNECTION
======================================== */

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {

    console.log("✅ MongoDB Connected Successfully");

  })

  .catch((error) => {

    console.log("❌ MongoDB Connection Error");

    console.log(error);

  });

/* ========================================
PORT
======================================== */

const PORT = process.env.PORT || 5000;

/* ========================================
SERVER START
======================================== */

app.listen(PORT, () => {

  console.log(`🚀 Server Running On Port ${PORT}`);

});