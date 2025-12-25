import { createCheckoutSession } from "../services/stripeService.js";

export const createCheckout = async (req, res) => {
  try {
    const { items } = req.body;
    const session = await createCheckoutSession(items);
    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const paymentSuccess = (req, res) => {
  res.send("Payment Successful!");
};

export const paymentCancel = (req, res) => {
  res.send("Payment Cancelled.");
};