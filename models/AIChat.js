const mongoose = require('mongoose');

const aiChatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    messages: [{
      role: {
        type: String,
        enum: ['user', 'assistant'],
      },
      content: String,
      timestamp: {
        type: Date,
        default: Date.now,
      },
    }],
    context: String, // e.g., "career-advice", "interview-prep", "skill-learning"
    title: String,
    isArchived: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AIChat', aiChatSchema);
