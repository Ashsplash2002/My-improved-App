const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  // Check for missing fields
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password,
    });

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Create JWT token
    jwt.sign(
      { id: savedUser.id },
      process.env.jwtSecret,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
          },
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
