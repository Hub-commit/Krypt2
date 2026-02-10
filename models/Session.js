const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
  {
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    menteeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    mentorshipId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Mentorship',
    },
    scheduledAt: Date,
    startedAt: Date,
    endedAt: Date,
    transcript: String,
    summary: mongoose.Schema.Types.Mixed, // AI-generated summary
    actionItems: [String],
    feedback: {
      menteeRating: Number,
      mentorRating: Number,
      menteeNotes: String,
      mentorNotes: String,
    },
    status: {
      type: String,
      enum: ['scheduled', 'in-progress', 'completed', 'cancelled'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Session', sessionSchema);
