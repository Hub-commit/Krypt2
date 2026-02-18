// Validation middleware for user inputs
const { body, validationResult } = require('express-validator');

// Validate signup
const validateSignup = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('role').optional().isIn(['mentee', 'mentor', 'admin']).withMessage('Invalid role'),
];

// Validate login
const validateLogin = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Validate mentee profile update
const validateMenteeUpdate = [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
  body('email').optional().isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('skills').optional().isArray().withMessage('Skills must be an array'),
  body('location').optional().trim().notEmpty().withMessage('Location cannot be empty'),
  body('timezone').optional().trim().notEmpty().withMessage('Timezone cannot be empty'),
];

// Validate mentor profile update
const validateMentorUpdate = [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
  body('email').optional().isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('skills').optional().isArray().withMessage('Skills must be an array'),
  body('experience').optional().isInt({ min: 0 }).withMessage('Experience must be a positive number'),
  body('location').optional().trim().notEmpty().withMessage('Location cannot be empty'),
  body('title').optional().trim().notEmpty().withMessage('Title cannot be empty'),
];

// Validate job creation
const validateJobCreation = [
  body('title').trim().notEmpty().withMessage('Job title is required'),
  body('description').trim().notEmpty().withMessage('Job description is required'),
  body('location').trim().notEmpty().withMessage('Location is required'),
  body('salary').optional().isInt({ min: 0 }).withMessage('Salary must be a positive number'),
  body('jobType').isIn(['full-time', 'part-time', 'contract', 'temporary']).withMessage('Invalid job type'),
];

// Validate message sending
const validateMessage = [
  body('senderId').notEmpty().withMessage('Sender ID is required'),
  body('recipientId').notEmpty().withMessage('Recipient ID is required'),
  body('content').trim().notEmpty().withMessage('Message content cannot be empty'),
];

// Validation error handler middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation error',
      errors: errors.array().map(err => ({
        field: err.param,
        message: err.msg
      }))
    });
  }
  next();
};

module.exports = {
  validateSignup,
  validateLogin,
  validateMenteeUpdate,
  validateMentorUpdate,
  validateJobCreation,
  validateMessage,
  handleValidationErrors
};
