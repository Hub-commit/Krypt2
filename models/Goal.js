const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    category: String,
    targetDate: Date,
    status: {
      type: String,
      enum: ['not-started', 'in-progress', 'completed', 'on-hold'],
      default: 'not-started',
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    milestone: [{
      title: String,
      description: String,
      dueDate: Date,
      completed: Boolean,
    }],
    aiSuggestions: mongoose.Schema.Types.Mixed, // Suggestions from Gemini
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalSchema);
