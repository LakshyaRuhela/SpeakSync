import express from "express";
import dotenv from "dotenv";
dotenv.config();
// import "dotenv/config";
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT;

// Route
app.use("/api/v1/auth", authRoutes);

//  port
app.listen(PORT, () => {
  console.log(`Server started at ${PORT} `);
});
