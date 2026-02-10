const express = require('express');
const router = express.Router();
const User = require('../models/User');

/**
 * GET /api/mentors
 * Get all mentors
 */
router.get('/', async (req, res) => {
  try {
    const { skills, experience, location } = req.query;
    let query = { role: 'mentor' };

    if (skills) {
      query.skills = { $in: skills.split(',') };
    }
    if (experience) {
      query.experience = { $gte: experience };
    }
    if (location) {
      query.location = location;
    }

    const mentors = await User.find(query).select('-password');
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET /api/mentors/:id
 * Get mentor by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const mentor = await User.findById(req.params.id).select('-password');
    if (!mentor) return res.status(404).json({ message: 'Mentor not found' });
    res.json(mentor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * PUT /api/mentors/:id
 * Update mentor profile
 */
router.put('/:id', async (req, res) => {
  try {
    const updatedMentor = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select('-password');
    res.json(updatedMentor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
