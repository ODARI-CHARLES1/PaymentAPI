import express from "express";
import { createCheckout, paymentSuccess, paymentCancel } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create-checkout-session", createCheckout);
router.get("/success", paymentSuccess);
router.get("/cancel", paymentCancel);

export default router;