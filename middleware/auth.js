// Authentication middleware
const jwt = require('jsonwebtoken');

// Verify JWT token
const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.userId = decoded.userId;
    req.userRole = decoded.role;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Check if user is mentor
const isMentor = (req, res, next) => {
  if (req.userRole !== 'mentor') {
    return res.status(403).json({ message: 'Only mentors can access this resource' });
  }
  next();
};

// Check if user is mentee
const isMentee = (req, res, next) => {
  if (req.userRole !== 'mentee') {
    return res.status(403).json({ message: 'Only mentees can access this resource' });
  }
  next();
};

// Check if user is admin
const isAdmin = (req, res, next) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Only admins can access this resource' });
  }
  next();
};

module.exports = {
  verifyToken,
  isMentor,
  isMentee,
  isAdmin
};
