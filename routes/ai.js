const express = require('express');
const router = express.Router();
const AIChat = require('../models/AIChat');
const GeminiAIService = require('../services/geminiAIService');

const aiService = new GeminiAIService();

/**
 * GET /api/ai/chat/:chatId
 * Get AI chat conversation
 */
router.get('/chat/:chatId', async (req, res) => {
  try {
    const chat = await AIChat.findById(req.params.chatId).populate('userId', 'name email avatar');
    if (!chat) return res.status(404).json({ message: 'Chat not found' });
    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/chat
 * Create new AI chat
 */
router.post('/chat', async (req, res) => {
  try {
    const { userId, context, title } = req.body;
    const newChat = new AIChat({
      userId,
      context,
      title: title || `Chat - ${new Date().toLocaleDateString()}`,
      messages: [],
    });
    const savedChat = await newChat.save();
    res.status(201).json(savedChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/chat/:chatId/message
 * Send message and get AI response
 */
router.post('/chat/:chatId/message', async (req, res) => {
  try {
    const { userId, content } = req.body;
    const chatId = req.params.chatId;

    // Get existing chat
    const chat = await AIChat.findById(chatId);
    if (!chat) return res.status(404).json({ message: 'Chat not found' });

    // Add user message
    chat.messages.push({
      role: 'user',
      content,
      timestamp: new Date(),
    });

    // Get AI response
    const aiResponse = await aiService.generateChatResponse(
      chat.messages.map(m => ({ role: m.role, content: m.content }))
    );

    // Add AI response
    chat.messages.push({
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date(),
    });

    const savedChat = await chat.save();
    res.json(savedChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/learning-pathway
 * Generate personalized learning pathway
 */
router.post('/learning-pathway', async (req, res) => {
  try {
    const { userProfile, goals } = req.body;
    const pathway = await aiService.generateLearningPathway(userProfile, goals);
    res.json({ pathway });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/mentor-match
 * Analyze mentor-mentee compatibility
 */
router.post('/mentor-match', async (req, res) => {
  try {
    const { mentorData, menteeProfile } = req.body;
    const analysis = await aiService.analyzeMentorProfile(mentorData, menteeProfile);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/session-summary
 * Generate session summary
 */
router.post('/session-summary', async (req, res) => {
  try {
    const { transcript, sessionType } = req.body;
    const summary = await aiService.generateSessionSummary(transcript, sessionType);
    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/job-recommendations
 * Get AI job recommendations
 */
router.post('/job-recommendations', async (req, res) => {
  try {
    const { userProfile, preferences } = req.body;
    const recommendations = await aiService.recommendJobs(userProfile, preferences);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/career-advice
 * Get AI career advice
 */
router.post('/career-advice', async (req, res) => {
  try {
    const { currentRole, targetRole, skills } = req.body;
    const advice = await aiService.generateCareerAdvice(currentRole, targetRole, skills);
    res.json(advice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/resume-review
 * Get AI resume review
 */
router.post('/resume-review', async (req, res) => {
  try {
    const { resumeContent } = req.body;
    const review = await aiService.reviewResume(resumeContent);
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/interview-prep
 * Get interview preparation questions
 */
router.post('/interview-prep', async (req, res) => {
  try {
    const { jobRole, industry, experience } = req.body;
    const questions = await aiService.generateInterviewQuestions(jobRole, industry, experience);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * POST /api/ai/analyze-job
 * Analyze job description
 */
router.post('/analyze-job', async (req, res) => {
  try {
    const { jobDescription, userProfile } = req.body;
    const analysis = await aiService.analyzeJobDescription(jobDescription, userProfile);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
