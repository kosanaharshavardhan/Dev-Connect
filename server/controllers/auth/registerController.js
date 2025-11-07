const bcrypt = require("bcrypt");
const User = require("../../models/userModel");

const registerController = async (req, res) => {
  try {
    const { displayName, username, email, password } = req.body;

    // basic validation
    if (!displayName || !username || !email || !password)
      return res.status(400).json({ message: "All fields are required" });

    // check if already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser)
      return res.status(409).json({ message: "User already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new User({
      displayName,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = registerController;
