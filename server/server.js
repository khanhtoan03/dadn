import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { mongoURI } from "./config.js";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);


app.use("*", (req, res) => {
  res.json({ msg: "api not found" });
});

// port
const port = process.env.PORT || 5001;
try {
  await mongoose.connect(mongoURI);
  app.listen(5001, () => {
    console.log(`server listening on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
