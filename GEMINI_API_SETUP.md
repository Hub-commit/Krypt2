# 🎯 GEMINI API SETUP - Quick Start Guide

## What is Gemini API?

Gemini is Google's cutting-edge AI model that powers many of Kryppt's intelligent features:
- **Real-time AI Chat** - Conversational AI assistance
- **Smart Job Matching** - AI-powered job recommendations
- **Career Planning** - Personalized career advice
- **Learning Pathways** - Custom learning plans
- **Mentor Matching** - AI-driven compatibility scores
- **Interview Prep** - Interview question generation
- **Resume Review** - Intelligent resume analysis
- **Session Summaries** - Auto-generated meeting notes

---

## 📌 Getting Your Gemini API Key (5 Minutes)

### Step 1: Open Google AI Studio
Visit: **https://aistudio.google.com/app/apikey**

### Step 2: Sign In
- Use your Google account
- If you don't have one, create a free Google account

### Step 3: Create API Key
- Click the **"Create API Key"** button
- Choose "Create API key in new Google Cloud project"
- Wait for the project to be created
- Your API key will appear (looks like: `AIzaSy...`)

### Step 4: Copy & Save
- Copy the entire API key
- **Keep it safe** - treat it like a password
- Never share it publicly

---

## 🔧 Integrating Gemini API into Kryppt

### Step 1: Create `.env` File
```bash
# Navigate to Krypt directory
cd "c:\Users\Ugoch\Documents\code hub\Krypt"

# Create .env file from template
copy .env.example .env
```

### Step 2: Add Your Gemini API Key
Open `.env` file and update:
```
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

Replace `YOUR_API_KEY_HERE` with your actual key.

Example:
```
GEMINI_API_KEY=AIzaSyDxCWH_zKqLjP5M4Qw8eV9rZ2mN1kL3jP5
```

### Step 3: Save & Restart Server
- Save the `.env` file
- Restart your Node.js server
- The AI features will now be active!

---

## ✅ Verify Gemini API is Working

### Test via API Endpoint

```bash
# Open PowerShell or Command Prompt

# Create a test chat
curl -X POST http://localhost:5000/api/ai/chat ^
  -H "Content-Type: application/json" ^
  -d "{\"userId\":\"test-user\",\"context\":\"career-advice\",\"title\":\"Test Chat\"}"

# Response should include chat ID and messages array
```

### Test via JavaScript Console
```javascript
// Open browser console and run:
const response = await krypptAPI.createAIChat(
  'user-123', 
  'career-advice', 
  'Test AI Chat'
);
console.log(response);
```

---

## 🚀 Features That Use Gemini API

### 1. **Synapse AI Chat** (Real-time)
- **Endpoint**: `POST /api/ai/chat/:chatId/message`
- **Use Case**: Users chat with AI for advice
- **Example**: 
  ```javascript
  const response = await krypptAPI.sendAIMessage(
    chatId, 
    userId, 
    'How do I transition to tech?'
  );
  ```

### 2. **Learning Pathway Generation**
- **Endpoint**: `POST /api/ai/learning-pathway`
- **Use Case**: Create personalized learning plans
- **Example**:
  ```javascript
  const pathway = await krypptAPI.generateLearningPathway(
    { skills: ['JavaScript'], goals: ['Learn React'] },
    ['Become a React Developer']
  );
  ```

### 3. **Mentor Compatibility Analysis**
- **Endpoint**: `POST /api/ai/mentor-match`
- **Use Case**: Find best mentor matches
- **Example**:
  ```javascript
  const analysis = await krypptAPI.analyzeMentorMatch(
    { mentorSkills: ['Python', 'AWS'], experience: 10 },
    { menteeGoals: ['AWS architect'], experience: 3 }
  );
  ```

### 4. **Job Recommendations**
- **Endpoint**: `POST /api/ai/job-recommendations`
- **Use Case**: AI-powered job search
- **Example**:
  ```javascript
  const jobs = await krypptAPI.getJobRecommendations(
    { skills: ['JavaScript', 'React'] },
    { industry: 'Tech', experience: 'Junior' }
  );
  ```

### 5. **Career Guidance**
- **Endpoint**: `POST /api/ai/career-advice`
- **Use Case**: Personalized career planning
- **Example**:
  ```javascript
  const advice = await krypptAPI.getCareerAdvice(
    'Junior Developer',
    'Tech Lead',
    ['JavaScript', 'React', 'Node.js']
  );
  ```

### 6. **Interview Preparation**
- **Endpoint**: `POST /api/ai/interview-prep`
- **Use Case**: Generate interview questions
- **Example**:
  ```javascript
  const questions = await krypptAPI.generateInterviewQuestions(
    'Senior Software Engineer',
    'Tech',
    'Mid-level'
  );
  ```

### 7. **Resume Analysis**
- **Endpoint**: `POST /api/ai/resume-review`
- **Use Case**: Improve resume quality
- **Example**:
  ```javascript
  const review = await krypptAPI.reviewResume(
    'Your resume content here...'
  );
  ```

### 8. **Session Summaries**
- **Endpoint**: `POST /api/ai/session-summary`
- **Use Case**: Auto-generate meeting notes
- **Example**:
  ```javascript
  const summary = await krypptAPI.generateSessionSummary(
    'Full transcript of mentorship session...',
    'mentorship'
  );
  ```

---

## 📊 Gemini API Pricing

Gemini API is **FREE** for many use cases:
- ✅ Up to **60 requests per minute** - Free tier
- ✅ Sufficient for most applications
- ✅ Upgrade to paid if you need higher limits

Check current pricing: https://ai.google.dev/pricing

---

## 🛠️ Troubleshooting

### Problem: "GEMINI_API_KEY is not set"
**Solution:**
1. Check `.env` file exists in project root
2. Add `GEMINI_API_KEY=YOUR_KEY` to `.env`
3. Restart the server: `npm run dev`

### Problem: "API key invalid"
**Solution:**
1. Get a new key from: https://aistudio.google.com/app/apikey
2. Make sure you copied the ENTIRE key
3. No extra spaces or quotes

### Problem: "Quota exceeded"
**Solution:**
1. You've exceeded free tier requests (60/min)
2. Wait 1 minute for reset
3. Or upgrade to paid plan

### Problem: AI returns empty responses
**Solution:**
1. Verify API key is valid
2. Check internet connection
3. Try a simpler prompt first

---

## 📚 Important Files

| File | Purpose |
|------|---------|
| `.env` | Your Gemini API key & config |
| `services/geminiAIService.js` | All AI service implementations |
| `routes/ai.js` | API endpoints for AI features |
| `public/api-client.js` | Frontend API client |

---

## 🔐 Security Notes

⚠️ **IMPORTANT:**
- Never commit `.env` file to Git
- `.env` is in `.gitignore` by default
- Never share your API key
- API key is for backend only
- Don't expose API key in frontend code

---

## 📞 Need Help?

### Gemini API Docs
- Main: https://ai.google.dev/
- API Reference: https://ai.google.dev/api/rest
- JavaScript SDK: https://ai.google.dev/tutorials/javascript_quickstart
- Troubleshooting: https://ai.google.dev/troubleshooting

### Kryppt Support
- Check SETUP_GUIDE.md for complete setup
- Review `services/geminiAIService.js` for code examples
- Check `routes/ai.js` for endpoint usage

---

## ✨ Quick Test

After getting your API key, test it immediately:

```javascript
// In browser console (on Kryppt dashboard)
const testChat = await krypptAPI.createAIChat(
  'test-user',
  'career-advice',
  'Quick Test'
);

const response = await krypptAPI.sendAIMessage(
  testChat._id,
  'test-user',
  'Hello! Can you help me with my career?'
);

console.log(response); // Should see AI response
```

If you see an AI response, **Gemini API is working!** 🎉

---

**You're all set! Start building amazing AI features with Gemini.** 🚀
