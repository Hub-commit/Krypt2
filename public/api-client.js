// Frontend API Client
const API_BASE_URL = 'http://localhost:5000/api';

class KrypptAPIClient {
  constructor() {
    this.token = localStorage.getItem('authToken') || null;
  }

  // Set token
  setToken(token) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  // Get headers
  getHeaders() {
    return {
      'Content-Type': 'application/json',
      ...(this.token && { 'Authorization': `Bearer ${this.token}` })
    };
  }

  // ============ AUTH ============
  async signup(name, email, password, role = 'mentee') {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ name, email, password, role })
    });
    const data = await response.json();
    if (data.token) this.setToken(data.token);
    return data;
  }

  async login(email, password) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.token) this.setToken(data.token);
    return data;
  }

  async verifyToken() {
    const response = await fetch(`${API_BASE_URL}/auth/verify`, {
      method: 'POST',
      headers: this.getHeaders()
    });
    return response.json();
  }

  // ============ MENTORS ============
  async getMentors(filters = {}) {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_BASE_URL}/mentors${query ? '?' + query : ''}`);
    return response.json();
  }

  async getMentorById(id) {
    const response = await fetch(`${API_BASE_URL}/mentors/${id}`);
    return response.json();
  }

  async updateMentorProfile(id, data) {
    const response = await fetch(`${API_BASE_URL}/mentors/${id}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  }

  // ============ MENTEES ============
  async getMenteeProfile(id) {
    const response = await fetch(`${API_BASE_URL}/mentees/${id}`);
    return response.json();
  }

  async updateMenteeProfile(id, data) {
    const response = await fetch(`${API_BASE_URL}/mentees/${id}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async addGoal(menteeId, goal) {
    const response = await fetch(`${API_BASE_URL}/mentees/${menteeId}/goals`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(goal)
    });
    return response.json();
  }

  async getMenteeGoals(menteeId) {
    const response = await fetch(`${API_BASE_URL}/mentees/${menteeId}/goals`);
    return response.json();
  }

  // ============ AI FEATURES ============
  async createAIChat(userId, context, title) {
    const response = await fetch(`${API_BASE_URL}/ai/chat`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ userId, context, title })
    });
    return response.json();
  }

  async getAIChat(chatId) {
    const response = await fetch(`${API_BASE_URL}/ai/chat/${chatId}`);
    return response.json();
  }

  async sendAIMessage(chatId, userId, content) {
    const response = await fetch(`${API_BASE_URL}/ai/chat/${chatId}/message`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ userId, content })
    });
    return response.json();
  }

  async generateLearningPathway(userProfile, goals) {
    const response = await fetch(`${API_BASE_URL}/ai/learning-pathway`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ userProfile, goals })
    });
    return response.json();
  }

  async analyzeMentorMatch(mentorData, menteeProfile) {
    const response = await fetch(`${API_BASE_URL}/ai/mentor-match`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ mentorData, menteeProfile })
    });
    return response.json();
  }

  async generateSessionSummary(transcript, sessionType = 'mentorship') {
    const response = await fetch(`${API_BASE_URL}/ai/session-summary`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ transcript, sessionType })
    });
    return response.json();
  }

  async getJobRecommendations(userProfile, preferences) {
    const response = await fetch(`${API_BASE_URL}/ai/job-recommendations`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ userProfile, preferences })
    });
    return response.json();
  }

  async getCareerAdvice(currentRole, targetRole, skills) {
    const response = await fetch(`${API_BASE_URL}/ai/career-advice`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ currentRole, targetRole, skills })
    });
    return response.json();
  }

  async reviewResume(resumeContent) {
    const response = await fetch(`${API_BASE_URL}/ai/resume-review`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ resumeContent })
    });
    return response.json();
  }

  async generateInterviewQuestions(jobRole, industry, experience) {
    const response = await fetch(`${API_BASE_URL}/ai/interview-prep`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ jobRole, industry, experience })
    });
    return response.json();
  }

  async analyzeJobDescription(jobDescription, userProfile) {
    const response = await fetch(`${API_BASE_URL}/ai/analyze-job`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ jobDescription, userProfile })
    });
    return response.json();
  }

  // ============ GOALS ============
  async createGoal(goal) {
    const response = await fetch(`${API_BASE_URL}/goals`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(goal)
    });
    return response.json();
  }

  async getGoals(userId) {
    const response = await fetch(`${API_BASE_URL}/goals/${userId}`);
    return response.json();
  }

  async updateGoal(goalId, data) {
    const response = await fetch(`${API_BASE_URL}/goals/${goalId}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async deleteGoal(goalId) {
    const response = await fetch(`${API_BASE_URL}/goals/${goalId}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    });
    return response.json();
  }

  async getGoalAISuggestions(goalId) {
    const response = await fetch(`${API_BASE_URL}/goals/${goalId}/ai-suggestions`, {
      method: 'POST',
      headers: this.getHeaders()
    });
    return response.json();
  }

  // ============ MESSAGING ============
  async getConversations(userId) {
    const response = await fetch(`${API_BASE_URL}/messaging/conversations/${userId}`);
    return response.json();
  }

  async sendMessage(senderId, recipientId, content) {
    const response = await fetch(`${API_BASE_URL}/messaging/send`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ senderId, recipientId, content })
    });
    return response.json();
  }

  async markMessageAsRead(messageId) {
    const response = await fetch(`${API_BASE_URL}/messaging/${messageId}/read`, {
      method: 'PUT',
      headers: this.getHeaders()
    });
    return response.json();
  }

  // ============ JOBS ============
  async getJobs(filters = {}) {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_BASE_URL}/jobs${query ? '?' + query : ''}`);
    return response.json();
  }

  async getJobById(id) {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
    return response.json();
  }

  async postJob(jobData) {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(jobData)
    });
    return response.json();
  }

  async applyForJob(jobId, userId) {
    const response = await fetch(`${API_BASE_URL}/jobs/${jobId}/apply`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ userId })
    });
    return response.json();
  }

  // ============ ADMIN ============
  async getAllUsers() {
    const response = await fetch(`${API_BASE_URL}/admin/users`, {
      headers: this.getHeaders()
    });
    return response.json();
  }

  async updateUser(userId, data) {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async deleteUser(userId) {
    const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
      method: 'DELETE',
      headers: this.getHeaders()
    });
    return response.json();
  }
}

// Initialize API client globally
const krypptAPI = new KrypptAPIClient();

// Usage examples
/*
// Login
const loginResult = await krypptAPI.login('user@example.com', 'password');

// Get mentors
const mentors = await krypptAPI.getMentors({ skills: 'JavaScript', location: 'Remote' });

// Create AI chat
const chat = await krypptAPI.createAIChat(userId, 'career-advice', 'My Career Planning');

// Send message to AI
const response = await krypptAPI.sendAIMessage(chatId, userId, 'How can I become a better developer?');

// Get job recommendations
const jobs = await krypptAPI.getJobRecommendations(userProfile, { skills: 'JavaScript' });

// Get career advice
const advice = await krypptAPI.getCareerAdvice('Junior Dev', 'Senior Dev', ['JavaScript', 'React']);
*/
