const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Goal = require('../models/Goal');

/**
 * GET /api/mentees/:id
 * Get mentee profile
 */
router.get('/:id', async (req, res) => {
  try {
    const mentee = await User.findById(req.params.id).select('-password');
    if (!mentee) return res.status(404).json({ message: 'Mentee not found' });
    res.json(mentee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * PUT /api/mentees/:id
 * Update mentee profile
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedMentee = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select('-password');
    res.json(updatedMentee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/mentees/:id/goals
 * Add goal for mentee
 */
router.post('/:id/goals', async (req, res) => {
  try {
    const { title, description, category, targetDate, priority } = req.body;
    const goal = new Goal({
      userId: req.params.id,
      title,
      description,
      category,
      targetDate,
      priority,
    });
    const savedGoal = await goal.save();
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET /api/mentees/:id/goals
 * Get mentee goals
 */
router.get('/:id/goals', async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.params.id });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
