const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: [true, "Display name is required"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    bio: {
      type: String,
      maxlength: 200,
      default: "",
    },
    socials: {
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      twitter: { type: String, default: "" },
      portfolio: { type: String, default: "" },
    },
    dp: {
      type: String, // Cloudinary URL
      default: "",
    },
    experience: {
      type: String,
      default: "",
    },
    techStack: {
      type: [String], // e.g. ["React", "Node.js", "AI"]
      default: [],
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    badges: {
      type: [String], // e.g. ["Frontend Guru", "AI Enthusiast"]
      default: [],
    },
    location: {
  type: String,
  default: "",
  trim: true,
},

    activity: {
      totalPosts: { type: Number, default: 0 },
      totalLikes: { type: Number, default: 0 },
      totalComments: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
