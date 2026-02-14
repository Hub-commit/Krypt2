const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount routes from src/routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/mentees', require('./src/routes/mentees'));
app.use('/api/mentors', require('./src/routes/mentors'));
app.use('/api/ai', require('./src/routes/ai'));
app.use('/api/messaging', require('./src/routes/messaging'));
app.use('/api/jobs', require('./src/routes/jobs'));
app.use('/api/goals', require('./src/routes/goals'));
app.use('/api/admin', require('./src/routes/admin'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

app.use('/public', express.static('public'));
app.use('/', express.static('public'));

module.exports = { app };
