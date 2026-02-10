const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

/**
 * GET /api/messaging/conversations/:userId
 * Get user conversations
 */
router.get('/conversations/:userId', async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ senderId: req.params.userId }, { recipientId: req.params.userId }],
    }).populate('senderId', 'name avatar').populate('recipientId', 'name avatar');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/messaging/send
 * Send message
 */
router.post('/send', async (req, res) => {
  try {
    const { senderId, recipientId, content } = req.body;
    const message = new Message({
      senderId,
      recipientId,
      content,
      conversationId: [senderId, recipientId].sort().join('-'),
    });
    const savedMessage = await message.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * PUT /api/messaging/:id/read
 * Mark message as read
 */
router.put('/:id/read', async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
