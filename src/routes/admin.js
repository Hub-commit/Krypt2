const express = require('express');
const router = express.Router();

router.get('/stats', async (req, res) => {
  try {
    // Minimal admin stats placeholder
    res.json({ users: 0, mentors: 0, mentees: 0 });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
