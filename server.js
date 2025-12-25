
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.use("/", paymentRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
