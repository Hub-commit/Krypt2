const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

/**
 * GET /api/jobs
 * Get all jobs
 */
router.get('/', async (req, res) => {
  try {
    const { location, jobType, skills } = req.query;
    let query = { isActive: true };

    if (location) query.location = location;
    if (jobType) query.jobType = jobType;
    if (skills) query.requiredSkills = { $in: skills.split(',') };

    const jobs = await Job.find(query).populate('postedBy', 'name company');
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * GET /api/jobs/:id
 * Get job by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('postedBy', 'name company');
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/jobs
 * Create job posting
 */
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/jobs/:id/apply
 * Apply for job
 */
router.post('/:id/apply', async (req, res) => {
  try {
    const { userId } = req.body;
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    job.applications.push({
      userId,
      status: 'applied',
      appliedAt: new Date(),
    });

    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
