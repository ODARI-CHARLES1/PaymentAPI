import stripe from "../config/stripe.js";
import store from "../models/store.js";

export const createCheckoutSession = async (items) => {
  const lineItems = items.map((item) => {
    const storeItem = store.get(item.id);
    if (!storeItem) throw new Error("Invalid product ID");

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: storeItem.name,
        },
        unit_amount: storeItem.price,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: lineItems,
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  return session;
};