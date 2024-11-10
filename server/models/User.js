import express from 'express';
import User from '../models/User.js';  // Assuming the User model is in the 'models' folder
import bcrypt from 'bcryptjs';

const router = express.Router();

// Login Route (POST request to check if user exists and password matches)
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        
        // If the user does not exist
        if (!user) {
            return res.status(400).json("notexist");
        }

        // Compare password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json("Wrong credentials");
        }

        // If the user exists and password matches
        return res.status(200).json("exist");

    } catch (err) {
        console.error(err);
        res.status(500).json("Server error");
    }
});

export default router;
