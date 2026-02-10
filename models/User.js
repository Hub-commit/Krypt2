const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['mentee', 'mentor', 'admin'],
      default: 'mentee',
    },
    avatar: String,
    bio: String,
    skills: [String],
    experience: Number, // years
    title: String,
    location: String,
    timezone: String,
    phone: String,
    linkedinUrl: String,
    githubUrl: String,
    website: String,
    isVerified: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
