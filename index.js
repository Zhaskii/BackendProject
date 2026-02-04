import express from "express";
import connectDB from "./db.connection.js";
import { userController } from "./user/user.controller.js";
import { productController } from "./product/product.controller.js";
import { cartController } from "./cart/cart.controller.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

dotenv.config();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://frontend-project-awth.vercel.app/",
    ],
  }),
);

await connectDB();

app.use(userController);
app.use(productController);
app.use(cartController);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
