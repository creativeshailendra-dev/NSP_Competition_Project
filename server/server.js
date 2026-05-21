
require("dotenv").config();
const Razorpay = require("razorpay");
const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");

const dotenv = require("dotenv");

/* ========================================
CONFIG
======================================== */

dotenv.config();

const fs = require("fs");

if (!fs.existsSync(path.join(__dirname, "uploads"))) {
  fs.mkdirSync(path.join(__dirname, "uploads"));
}

/* ========================================
EXPRESS APP
======================================== */

const app = express();
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* ========================================
ROUTES
======================================== */

const candidateRoutes = require("./routes/candidateRoutes");

//const paymentRoutes = require("./routes/paymentRoutes");//
app.post("/create-order", async (req, res) => {

  try {

    const options = {
      amount: 50000,
      currency: "INR",
      receipt: "receipt_001",
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Order creation failed",
    });

  }

});

// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

// ========================================
// STATIC FOLDER
// ========================================

app.use(
  "/uploads",

  express.static(path.join(__dirname, "uploads")),
);

// ========================================
// API ROUTES
// ========================================

app.use(
  "/api/candidates",

  candidateRoutes,
);

/* app.use(
  "/api/payment",

  paymentRoutes,
); */

// ========================================
// HOME ROUTE
// ========================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,

    message: "🚀 Backend Server Running Successfully",
  });
});

// ========================================
// DATABASE CONNECTION
// ========================================

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })

  .catch((error) => {
    console.log("❌ MongoDB Connection Error");

    console.log(error);
  });

// ========================================
// PORT
// ========================================

const PORT = process.env.PORT || 5000;

// ========================================
// SERVER START
// ========================================

app.listen(PORT, () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});
