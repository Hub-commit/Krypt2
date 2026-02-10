const { GoogleGenerativeAI } = require('@google/generative-ai');

class GeminiAIService {
  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not set in environment variables');
    }
    this.client = new GoogleGenerativeAI(apiKey);
    this.model = this.client.getGenerativeModel({ model: 'gemini-pro' });
  }

  /**
   * Generate AI Chat Response
   */
  async generateChatResponse(messages, systemPrompt = '') {
    try {
      const formattedMessages = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const chat = this.model.startChat({
        history: formattedMessages.slice(0, -1),
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        }
      });

      const result = await chat.sendMessage(messages[messages.length - 1].content);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini Chat Error:', error);
      throw new Error(`AI Chat Error: ${error.message}`);
    }
  }

  /**
   * Generate Learning Pathway
   */
  async generateLearningPathway(userProfile, goals) {
    try {
      const prompt = `
        Based on the following user profile and goals, create a personalized learning pathway:
        
        User Profile: ${JSON.stringify(userProfile)}
        Goals: ${JSON.stringify(goals)}
        
        Provide a detailed learning pathway with:
        1. Key skills to develop
        2. Recommended courses/resources
        3. Timeline
        4. Milestones
        5. Success metrics
        
        Format as JSON with structured data.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      console.error('Learning Pathway Error:', error);
      throw new Error(`Learning Pathway Generation Error: ${error.message}`);
    }
  }

  /**
   * Analyze Mentor Profile for Matching
   */
  async analyzeMentorProfile(mentorData, menteeProfile) {
    try {
      const prompt = `
        Analyze the compatibility between the following mentor and mentee profiles:
        
        Mentor: ${JSON.stringify(mentorData)}
        Mentee: ${JSON.stringify(menteeProfile)}
        
        Provide a compatibility analysis with:
        1. Compatibility score (0-100)
        2. Key strengths of match
        3. Potential challenges
        4. Recommended focus areas
        5. Success probability
        
        Format as JSON.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      console.error('Mentor Analysis Error:', error);
      throw new Error(`Mentor Analysis Error: ${error.message}`);
    }
  }

  /**
   * Generate Session Summary
   */
  async generateSessionSummary(sessionTranscript, sessionType = 'mentorship') {
    try {
      const prompt = `
        Generate a comprehensive summary of the following ${sessionType} session:
        
        Transcript: ${sessionTranscript}
        
        Provide:
        1. Key points discussed
        2. Action items
        3. Next steps
        4. Resources recommended
        5. Progress indicators
        
        Format as JSON with clear structure.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      console.error('Session Summary Error:', error);
      throw new Error(`Session Summary Error: ${error.message}`);
    }
  }

  /**
   * Recommend Jobs Based on Profile
   */
  async recommendJobs(userProfile, preferences) {
    try {
      const prompt = `
        Based on the following user profile and job preferences, recommend suitable jobs:
        
        User Profile: ${JSON.stringify(userProfile)}
        Preferences: ${JSON.stringify(preferences)}
        
        Provide job recommendations with:
        1. Job title
        2. Company
        3. Match score (0-100)
        4. Required skills
        5. Salary range
        6. Why this match
        
        Return as JSON array of job recommendations.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      console.error('Job Recommendation Error:', error);
      throw new Error(`Job Recommendation Error: ${error.message}`);
    }
  }

  /**
   * Generate Career Advice
   */
  async generateCareerAdvice(currentRole, targetRole, skills) {
    try {
      const prompt = `
        Provide personalized career advice for career transition:
        
        Current Role: ${currentRole}
        Target Role: ${targetRole}
        Current Skills: ${JSON.stringify(skills)}
        
        Provide:
        1. Feasibility assessment
        2. Skills gap analysis
        3. Learning plan (3-6 months)
        4. Recommended actions
        5. Timeline to transition
        6. Potential challenges
        7. Resources
        
        Format as JSON.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      console.error('Career Advice Error:', error);
      throw new Error(`Career Advice Error: ${error.message}`);
    }
  }

  /**
   * Review and Improve Resume
   */
  async reviewResume(resumeContent) {
    try {
      const prompt = `
        Review the following resume and provide improvement suggestions:
        
        Resume: ${resumeContent}
        
        Provide:
        1. Overall score (0-100)
        2. Strengths
        3. Areas for improvement
        4. Specific recommendations
        5. Sample improvements for sections
        6. ATS optimization tips
        
        Format as JSON.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      console.error('Resume Review Error:', error);
      throw new Error(`Resume Review Error: ${error.message}`);
    }
  }

  /**
   * Generate Interview Prep Questions
   */
  async generateInterviewQuestions(jobRole, industry, experience) {
    try {
      const prompt = `
        Generate interview preparation questions for:
        
        Job Role: ${jobRole}
        Industry: ${industry}
        Experience Level: ${experience}
        
        Provide:
        1. Technical questions (5)
        2. Behavioral questions (5)
        3. Role-specific questions (5)
        4. Common pitfall questions (3)
        5. Sample answers for key questions
        
        Format as JSON.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      console.error('Interview Prep Error:', error);
      throw new Error(`Interview Prep Error: ${error.message}`);
    }
  }

  /**
   * Analyze Job Description
   */
  async analyzeJobDescription(jobDescription, userProfile) {
    try {
      const prompt = `
        Analyze this job posting and match against user profile:
        
        Job Description: ${jobDescription}
        User Profile: ${JSON.stringify(userProfile)}
        
        Provide:
        1. Required vs desired skills
        2. User match score
        3. Skill gaps
        4. Preparation recommendations
        5. Salary expectations
        6. Career growth potential
        
        Format as JSON.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return JSON.parse(response.text());
    } catch (error) {
      console.error('Job Analysis Error:', error);
      throw new Error(`Job Analysis Error: ${error.message}`);
    }
  }
}

module.exports = GeminiAIService;
