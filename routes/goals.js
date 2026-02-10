const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');
const GeminiAIService = require('../services/geminiAIService');

const aiService = new GeminiAIService();

/**
 * POST /api/goals
 * Create goal
 */
router.post('/', async (req, res) => {
  try {
    const goal = new Goal(req.body);
    const savedGoal = await goal.save();
    res.status(201).json(savedGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET /api/goals/:userId
 * Get user goals
 */
router.get('/:userId', async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.params.userId });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * PUT /api/goals/:id
 * Update goal
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * DELETE /api/goals/:id
 * Delete goal
 */
router.delete('/:id', async (req, res) => {
  try {
    await Goal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Goal deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/goals/:id/ai-suggestions
 * Get AI suggestions for goal
 */
router.post('/:id/ai-suggestions', async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) return res.status(404).json({ message: 'Goal not found' });

    const suggestions = await aiService.generateLearningPathway(
      { goal: goal.title, description: goal.description },
      [goal.title]
    );

    goal.aiSuggestions = suggestions;
    const updatedGoal = await goal.save();
    res.json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
