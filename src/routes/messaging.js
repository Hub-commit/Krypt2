const express = require('express');
const router = express.Router();
const Message = require('../../models/Message');

router.post('/send', async (req, res) => {
  try {
    const { from, to, room, content } = req.body;
    const message = new Message({ from, to, room, content, timestamp: new Date() });
    const saved = await message.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/room/:roomId', async (req, res) => {
  try {
    const messages = await Message.find({ room: req.params.roomId }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
