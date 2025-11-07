const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db");
const authRoute=require('./routes/authRoute')
dotenv.config();
connectDB()

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())
// Base route
app.get("/", (req, res) => {
  res.send("🚀 DevConnect backend is running (CommonJS)...");
});
app.use('/api/auth',authRoute);
// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
