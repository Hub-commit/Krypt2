const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const socketIo = require('socket.io');

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/mentees', require('./routes/mentees'));
app.use('/api/mentors', require('./routes/mentors'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/messaging', require('./routes/messaging'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/goals', require('./routes/goals'));
app.use('/api/admin', require('./routes/admin'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Static files
app.use(express.static('public'));

// Socket.IO for real-time messaging
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Join chat room
  socket.on('join_room', (data) => {
    socket.join(data.room);
    console.log(`User ${socket.id} joined room: ${data.room}`);
  });

  // Send message
  socket.on('send_message', (data) => {
    io.to(data.room).emit('receive_message', {
      message: data.message,
      sender: data.sender,
      timestamp: new Date()
    });
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Kryppt Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

module.exports = { app, io };
