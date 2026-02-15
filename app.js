const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Connect to MongoDB
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
  })
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => {
    console.warn('⚠️ MongoDB connection error:', err.message);
    console.warn('⚠️ Server will continue running in offline mode');
  });
} else {
  console.warn('⚠️ MONGODB_URI not found in environment variables');
}

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routes with error handling
try {
  app.use('/api/auth', require('./routes/auth'));
  app.use('/api/mentees', require('./routes/mentees'));
  app.use('/api/mentors', require('./routes/mentors'));
  app.use('/api/ai', require('./routes/ai'));
  app.use('/api/messaging', require('./routes/messaging'));
  app.use('/api/jobs', require('./routes/jobs'));
  app.use('/api/goals', require('./routes/goals'));
  app.use('/api/admin', require('./routes/admin'));
} catch (error) {
  console.error('❌ Error loading routes:', error.message);
}

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

app.use('/public', express.static('public'));

// Root route - serve the landing page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/kryppt_platform_landing_page/code.html');
});

// Serve all other static files
app.use('/', express.static('public', { index: false }));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

module.exports = { app };
