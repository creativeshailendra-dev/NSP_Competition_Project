const express =
    require("express");

const Razorpay =
    require("razorpay");

const router =
    express.Router();

/* ========================================
RAZORPAY INSTANCE
======================================== */

const razorpay =
    new Razorpay({

        key_id:
            process.env.RAZORPAY_KEY_ID,

        key_secret:
            process.env.RAZORPAY_KEY_SECRET,

    });

/* ========================================
CREATE ORDER
======================================== */

router.post(

    "/create-order",

    async (req, res) => {

        try {

            /* PAYMENT OPTIONS */

            const options = {

                amount:
                    199 * 100,

                currency:
                    "INR",

                receipt:
                    "receipt_" + Date.now(),

            };

            /* CREATE ORDER */

            const order =
                await razorpay.orders.create(
                    options
                );

            /* RESPONSE */

            res.status(200).json({

                success: true,

                order,

            });

        }

        catch (error) {

            console.log(error);

            res.status(500).json({

                success: false,

                message:
                    "Order Creation Failed",

            });

        }

    }

);

/* ========================================
EXPORT
======================================== */

module.exports =
    router;

const crypto = require("crypto");

/* =========================================
VERIFY PAYMENT
========================================= */

router.post(
    "/verify-payment",

    async (req, res) => {
        try {
            const {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            } = req.body;

            /* SIGN */

            const generated_signature =
                crypto
                    .createHmac(
                        "sha256",

                        process.env.RAZORPAY_SECRET,
                    )

                    .update(
                        razorpay_order_id +
                        "|" +
                        razorpay_payment_id,
                    )

                    .digest("hex");

            /* VERIFY */

            if (
                generated_signature ===
                razorpay_signature
            ) {
                return res.json({
                    success: true,
                });
            }

            /* FAILED */

            return res.status(400).json({
                success: false,
            });
        } catch (error) {
            console.log(error);

            res.status(500).json({
                success: false,
            });
        }
    },
);