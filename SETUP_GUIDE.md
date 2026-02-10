# 🚀 Kryppt Platform - Complete Setup Guide

## Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- Gemini API Key (Google)

---

## 📋 Step 1: Get Gemini API Key

### How to Get Your Gemini API Key:

1. **Go to Google AI Studio**
   - Visit: https://aistudio.google.com/app/apikey
   - Sign in with your Google account

2. **Create API Key**
   - Click "Create API Key"
   - Select or create a Google Cloud project
   - Copy the API key

3. **Save it safely** - You'll need this in the `.env` file

---

## 🔧 Step 2: Install Dependencies

```bash
# Navigate to project directory
cd "c:\Users\Ugoch\Documents\code hub\Krypt"

# Install Node packages
npm install
```

### Key Packages:
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **@google/generative-ai** - Gemini API SDK
- **socket.io** - Real-time messaging
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-origin requests
- **dotenv** - Environment variables

---

## 🗄️ Step 3: Set Up MongoDB

### Option A: Local MongoDB
```bash
# Install MongoDB Community Edition
# Windows: Download from https://www.mongodb.com/try/download/community

# Start MongoDB service
mongod
```

### Option B: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Copy to `.env` file

---

## 🔐 Step 4: Configure Environment Variables

### Create `.env` file
```bash
# Copy example to actual .env
Copy-Item -Path ".\.env.example" -Destination ".\.env"
```

### Edit `.env` with your values:
```
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/kryppt
# OR for Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kryppt?retryWrites=true&w=majority

# JWT
JWT_SECRET=your_very_secret_jwt_key_here_min_32_chars
JWT_EXPIRE=7d

# Gemini API (Required for AI features)
GEMINI_API_KEY=your_gemini_api_key_here

# CORS
CORS_ORIGIN=http://localhost:3000

# Session Secret
SESSION_SECRET=your_session_secret_here
```

---

## 🚀 Step 5: Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# OR Production mode
npm start
```

Expected output:
```
🚀 Kryppt Server running on port 5000
Environment: development
```

---

## 🎯 Gemini API Integration Points

The platform uses Gemini AI in these areas:

### 1. **Synapse AI Chat** (`POST /api/ai/chat/:chatId/message`)
- Real-time AI conversations
- Context-aware responses
- Multiple conversation contexts (career-advice, interview-prep, skill-learning)

### 2. **Dynamic Learning Pathways** (`POST /api/ai/learning-pathway`)
- Personalized learning recommendations
- Skill development plans
- Timeline suggestions

### 3. **Mentor Matching** (`POST /api/ai/mentor-match`)
- Compatibility analysis
- Automated mentor recommendations
- Skill gap identification

### 4. **Session Summaries** (`POST /api/ai/session-summary`)
- Auto-generated meeting notes
- Action items extraction
- Progress tracking

### 5. **Job Recommendations** (`POST /api/ai/job-recommendations`)
- AI-powered job matching
- Skill requirement analysis
- Career path suggestions

### 6. **Career Advice** (`POST /api/ai/career-advice`)
- Role transition planning
- Skill gap analysis
- Timeline recommendations

### 7. **Resume Review** (`POST /api/ai/resume-review`)
- CV analysis
- Improvement suggestions
- ATS optimization

### 8. **Interview Prep** (`POST /api/ai/interview-prep`)
- Question generation
- Sample answers
- Interview strategy

---

## 📡 API Endpoints Overview

### Authentication
```
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/verify
```

### AI Features
```
POST   /api/ai/chat                    - Create new chat
POST   /api/ai/chat/:id/message        - Send message
POST   /api/ai/learning-pathway        - Generate learning path
POST   /api/ai/mentor-match            - Analyze mentor compatibility
POST   /api/ai/session-summary         - Generate session summary
POST   /api/ai/job-recommendations     - Get job recommendations
POST   /api/ai/career-advice           - Get career guidance
POST   /api/ai/resume-review           - Review resume
POST   /api/ai/interview-prep          - Interview questions
POST   /api/ai/analyze-job             - Analyze job posting
```

### Mentors
```
GET    /api/mentors                    - List all mentors
GET    /api/mentors/:id                - Get mentor details
PUT    /api/mentors/:id                - Update mentor profile
```

### Mentees
```
GET    /api/mentees/:id                - Get mentee profile
PUT    /api/mentees/:id                - Update mentee profile
POST   /api/mentees/:id/goals          - Add goal
GET    /api/mentees/:id/goals          - Get goals
```

### Goals
```
POST   /api/goals                      - Create goal
GET    /api/goals/:userId              - Get user goals
PUT    /api/goals/:id                  - Update goal
DELETE /api/goals/:id                  - Delete goal
POST   /api/goals/:id/ai-suggestions   - Get AI suggestions
```

### Messaging
```
GET    /api/messaging/conversations/:userId  - Get conversations
POST   /api/messaging/send             - Send message
PUT    /api/messaging/:id/read         - Mark as read
```

### Jobs
```
GET    /api/jobs                       - List jobs
GET    /api/jobs/:id                   - Get job details
POST   /api/jobs                       - Post job
POST   /api/jobs/:id/apply             - Apply for job
```

### Admin
```
GET    /api/admin/users                - Get all users
PUT    /api/admin/users/:id            - Update user
DELETE /api/admin/users/:id            - Delete user
```

---

## 🧪 Testing the API

### Using Postman or cURL:

```bash
# Create account
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "mentee"
  }'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'

# Create AI Chat
curl -X POST http://localhost:5000/api/ai/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "userId": "USER_ID",
    "context": "career-advice",
    "title": "Career Planning Discussion"
  }'
```

---

## 🌐 Frontend Access

### Dashboard Pages (in `/public` folder):
- `kryppt_platform_landing_page/` - Landing page
- `mentee_dashboard_overview/` - Mentee dashboard
- `mentor_discovery_&_search/` - Mentor finder
- `mentor_profile_details/` - Mentor profiles
- `synapse_ai_chat_&_sandbox/` - AI Chat interface
- `real-time_messaging_center/` - Messaging
- `local_jobs_&_services_map/` - Job map
- `mentee_goal-based_signup/` - Goal setup
- `manage_mentorship_requests/` - Request management
- `ai_live_collaboration_session/` - Session tracking
- `post-session_research_&_summary/` - Session summaries
- `ai_dynamic_learning_pathways/` - Learning paths
- `ai_mentor_specialized_profile/` - AI mentor profiles
- `ai_vetting_oversight_dashboard/` - Oversight dashboard
- `global_admin_control_center/` - Admin panel
- `the_split_landing_dashboard/` - Alternative landing
- `human_mentor_discovery_directory/` - Mentor directory
- `hybrid_local_job_map_&_ai_analysis/` - Advanced job map
- `mentor_onboarding_&_api_sync/` - Mentor onboarding

---

## ⚡ Common Issues & Solutions

### Issue: "GEMINI_API_KEY is not set"
**Solution:** 
- Get API key from https://aistudio.google.com/app/apikey
- Add to `.env` file as `GEMINI_API_KEY=your_key`
- Restart server

### Issue: "Cannot connect to MongoDB"
**Solution:**
- Check if MongoDB is running
- Verify `MONGODB_URI` in `.env`
- For Atlas, check whitelist IPs

### Issue: CORS errors
**Solution:**
- Update `CORS_ORIGIN` in `.env`
- Matches your frontend URL

### Issue: Token expired
**Solution:**
- Adjust `JWT_EXPIRE` in `.env`
- Default is 7 days

---

## 📚 Documentation

### Gemini AI Service Documentation
- File: `services/geminiAIService.js`
- All AI methods documented with examples
- Error handling included

### Database Models
Located in `models/` folder:
- `User.js` - User profiles
- `Mentorship.js` - Mentorship relationships
- `Message.js` - Messages
- `Job.js` - Job postings
- `Session.js` - Session records
- `Goal.js` - User goals
- `AIChat.js` - AI conversations

---

## 🔄 Real-Time Features (Socket.IO)

```javascript
// Join chat room
socket.emit('join_room', { room: 'chat_123' });

// Send message
socket.emit('send_message', {
  room: 'chat_123',
  message: 'Hello!',
  sender: 'user_id'
});

// Receive message
socket.on('receive_message', (data) => {
  console.log(data.message);
});
```

---

## 🚀 Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Use cloud MongoDB (Atlas)
3. Deploy to Heroku, Railway, or similar:
   ```bash
   npm run build
   npm start
   ```

---

## 📞 Support

For issues with:
- **Gemini API**: Check https://ai.google.dev/
- **MongoDB**: Check https://docs.mongodb.com/
- **Express**: Check https://expressjs.com/

---

**Happy coding! 🎉**
