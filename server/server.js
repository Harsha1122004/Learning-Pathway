// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/auth.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/user-auth")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/signup", authRoute);

// Start the server
const port = 5174;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
