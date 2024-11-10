// routes/auth.js
import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json("exist");
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.json("notexist");
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json("error");
  }
});

export default router;
