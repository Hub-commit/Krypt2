const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: String,
    location: String,
    salary: {
      min: Number,
      max: Number,
      currency: String,
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'contract', 'freelance'],
    },
    requiredSkills: [String],
    experienceLevel: String,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    applications: [{
      userId: mongoose.Schema.Types.ObjectId,
      status: String,
      appliedAt: Date,
    }],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);
