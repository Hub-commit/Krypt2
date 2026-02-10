# 🚀 Kryppt Platform - AI-Powered Mentorship & Job Discovery

> Connect with industry mentors and discover high-paying local jobs powered by Google Gemini AI

[![Node.js](https://img.shields.io/badge/Node.js-v16+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)](https://www.mongodb.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-blue)](https://ai.google.dev/)
[![Express.js](https://img.shields.io/badge/Express.js-Backend-blue)](https://expressjs.com/)

---

## 📋 Features

### 🎯 Core Features
- ✅ **User Profiles** - Mentee & Mentor profiles with skills
- ✅ **Mentorship Matching** - AI-powered compatibility analysis
- ✅ **Job Listings** - Local job opportunities with AI matching
- ✅ **Real-time Messaging** - Socket.IO powered chat system
- ✅ **Goal Tracking** - Personal development goals with milestones
- ✅ **Admin Dashboard** - User management & oversight

### 🤖 AI Features (Powered by Gemini API)
- 💬 **Synapse AI Chat** - Conversational AI assistant
- 🎓 **Dynamic Learning Pathways** - Personalized learning plans
- 👥 **Mentor Matching** - AI compatibility scoring
- 📝 **Session Summaries** - Auto-generated meeting notes
- 💼 **Job Recommendations** - Smart job matching
- 🎤 **Interview Prep** - Question generation & tips
- 📄 **Resume Review** - AI-powered resume analysis
- 🛣️ **Career Advice** - Personalized career guidance

---

## 🏗️ Architecture

```
kryppt/
├── public/                    # Frontend HTML & JS
│   ├── api-client.js         # Frontend API wrapper
│   ├── realtime-messaging.js # Socket.IO handler
│   └── [dashboard-components]/
├── routes/                    # API endpoints
│   ├── ai.js                 # AI endpoints
│   ├── auth.js               # Authentication
│   ├── mentors.js            # Mentor endpoints
│   ├── mentees.js            # Mentee endpoints
│   ├── messaging.js          # Messaging endpoints
│   ├── jobs.js               # Job endpoints
│   ├── goals.js              # Goal endpoints
│   └── admin.js              # Admin endpoints
├── models/                    # MongoDB schemas
│   ├── User.js               # User model
│   ├── Mentorship.js         # Mentorship model
│   ├── Message.js            # Message model
│   ├── Job.js                # Job model
│   ├── Session.js            # Session model
│   ├── Goal.js               # Goal model
│   └── AIChat.js             # AI Chat model
├── services/                  # Business logic
│   └── geminiAIService.js    # AI service implementation
├── controllers/              # Route controllers (optional)
├── middleware/               # Custom middleware
├── server.js                 # Entry point
├── .env                      # Environment variables (SECRET)
├── .env.example              # Example env file
├── SETUP_GUIDE.md            # Complete setup instructions
├── GEMINI_API_SETUP.md       # Gemini API guide
└── package.json              # Dependencies
```

---

## 🚀 Quick Start

### 1️⃣ Prerequisites
- Node.js v16 or higher
- MongoDB (local or Atlas)
- Gemini API Key (free)

### 2️⃣ Setup

```bash
# Clone/Navigate to project
cd "c:\Users\Ugoch\Documents\code hub\Krypt"

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Add your Gemini API key to .env
# Edit .env and set GEMINI_API_KEY=your_key
```

### 3️⃣ Configure Environment

Edit `.env` file:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/kryppt
JWT_SECRET=your_secret_key_here_min_32_chars
GEMINI_API_KEY=your_gemini_api_key
CORS_ORIGIN=http://localhost:3000
```

### 4️⃣ Start Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Expected output:
```
🚀 Kryppt Server running on port 5000
Environment: development
```

### 5️⃣ Access Dashboards

Open in browser:
- Landing: `http://localhost:5000/public/kryppt_platform_landing_page/`
- Dashboard: `http://localhost:5000/public/mentee_dashboard_overview/`
- AI Chat: `http://localhost:5000/public/synapse_ai_chat_&_sandbox/`

---

## 📚 API Documentation

### Authentication
```
POST   /api/auth/signup              Create account
POST   /api/auth/login               Login
POST   /api/auth/verify              Verify token
```

### AI Features
```
POST   /api/ai/chat                  Create AI chat
POST   /api/ai/chat/:id/message      Send message
POST   /api/ai/learning-pathway      Generate learning path
POST   /api/ai/mentor-match          Analyze compatibility
POST   /api/ai/session-summary       Generate summary
POST   /api/ai/job-recommendations   Get job suggestions
POST   /api/ai/career-advice         Get career guidance
POST   /api/ai/resume-review         Review resume
POST   /api/ai/interview-prep        Generate interview questions
POST   /api/ai/analyze-job           Analyze job posting
```

### Core Features
```
GET    /api/mentors                  List mentors
GET    /api/mentors/:id              Get mentor details
GET    /api/jobs                     List jobs
POST   /api/jobs/:id/apply           Apply for job
GET    /api/mentees/:id              Get mentee profile
POST   /api/goals                    Create goal
GET    /api/goals/:userId            Get user goals
POST   /api/messaging/send           Send message
```

---

## 🤖 Gemini AI Integration

### Getting Started with Gemini API

1. **Get Free API Key**
   - Visit: https://aistudio.google.com/app/apikey
   - Click "Create API Key"
   - Copy key to `.env`

2. **Add to `.env`**
   ```
   GEMINI_API_KEY=AIzaSy...your_key_here
   ```

3. **Start Using**
   - All AI endpoints are ready to use
   - Free tier: 60 requests/minute
   - No credit card required

### AI Features

#### 1. Chat with AI
```javascript
// Create chat
const chat = await krypptAPI.createAIChat(userId, 'career-advice', 'Career Talk');

// Send message
const response = await krypptAPI.sendAIMessage(
  chat._id, 
  userId, 
  'How do I transition to tech?'
);
```

#### 2. Learning Pathway
```javascript
const pathway = await krypptAPI.generateLearningPathway(
  { skills: ['JavaScript'], experience: 2 },
  ['Become a React Developer']
);
```

#### 3. Mentor Matching
```javascript
const match = await krypptAPI.analyzeMentorMatch(
  { skills: ['Python', 'AWS'], experience: 10 },
  { goals: ['AWS architecture'], experience: 3 }
);
```

#### 4. Job Recommendations
```javascript
const jobs = await krypptAPI.getJobRecommendations(
  { skills: ['JavaScript'], experience: 2 },
  { industry: 'tech', jobType: 'remote' }
);
```

#### 5. Career Advice
```javascript
const advice = await krypptAPI.getCareerAdvice(
  'Junior Dev',
  'Tech Lead',
  ['JavaScript', 'React', 'Node.js']
);
```

---

## 📱 Dashboard Pages

| Page | Path | Purpose |
|------|------|---------|
| Landing | `/public/kryppt_platform_landing_page/` | Platform overview |
| Mentee Dashboard | `/public/mentee_dashboard_overview/` | User dashboard |
| Mentor Discovery | `/public/mentor_discovery_&_search/` | Find mentors |
| Mentor Profiles | `/public/mentor_profile_details/` | Mentor details |
| AI Chat | `/public/synapse_ai_chat_&_sandbox/` | Chat with AI |
| Messaging | `/public/real-time_messaging_center/` | User messages |
| Jobs | `/public/local_jobs_&_services_map/` | Job listings |
| Goals | `/public/mentee_goal-based_signup/` | Goal tracking |
| Requests | `/public/manage_mentorship_requests/` | Manage requests |
| Admin | `/public/global_admin_control_center/` | Admin panel |

---

## 🔐 Security

- ✅ Password hashing with bcryptjs
- ✅ JWT authentication
- ✅ CORS protection
- ✅ Environment variables for secrets
- ✅ API key never exposed to frontend

---

## 🧪 Testing

### Test Authentication
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John\",\"email\":\"john@test.com\",\"password\":\"pass123\",\"role\":\"mentee\"}"
```

### Test AI Chat
```bash
curl -X POST http://localhost:5000/api/ai/chat \
  -H "Content-Type: application/json" \
  -d "{\"userId\":\"user123\",\"context\":\"career-advice\",\"title\":\"Test\"}"
```

---

## 📖 Documentation

- **Full Setup**: See [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **Gemini API**: See [GEMINI_API_SETUP.md](GEMINI_API_SETUP.md)
- **API Reference**: See inline route comments
- **Models**: See `models/` folder

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, Tailwind CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| AI | Google Gemini API |
| Real-time | Socket.IO |
| Auth | JWT, bcryptjs |

---

## 📝 Environment Variables

```env
PORT=5000                                    # Server port
NODE_ENV=development                         # Environment
MONGODB_URI=mongodb://localhost:27017/kryppt # Database
JWT_SECRET=your_secret_key                   # JWT secret
JWT_EXPIRE=7d                                # Token expiry
GEMINI_API_KEY=your_api_key                  # Gemini API key
CORS_ORIGIN=http://localhost:3000           # CORS origin
SESSION_SECRET=your_session_secret           # Session secret
```

---

## 🚀 Deployment

### Heroku
```bash
npm run build
git push heroku main
```

### Docker
```bash
docker build -t kryppt .
docker run -p 5000:5000 kryppt
```

### Manual
1. Install Node.js on server
2. Clone repository
3. Configure `.env`
4. Run `npm start`

---

## 📊 Database Models

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: 'mentee' | 'mentor' | 'admin',
  skills: [String],
  experience: Number,
  avatar: String,
  bio: String,
  // ... more fields
}
```

### Mentorship
```javascript
{
  menteeId: ObjectId,
  mentorId: ObjectId,
  goals: [String],
  status: 'pending' | 'active' | 'completed',
  learningPathway: Object, // AI-generated
  compatibilityScore: Number, // AI-generated
}
```

### AIChat
```javascript
{
  userId: ObjectId,
  messages: [{
    role: 'user' | 'assistant',
    content: String,
    timestamp: Date
  }],
  context: String,
  title: String
}
```

---

## 🐛 Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env`

### Gemini API Error
- Verify API key is correct
- Check free tier quota (60 req/min)
- See [GEMINI_API_SETUP.md](GEMINI_API_SETUP.md)

### CORS Issues
- Update `CORS_ORIGIN` in `.env`
- Match your frontend URL

### Port Already in Use
- Change `PORT` in `.env`
- Or kill process: `lsof -ti:5000 | xargs kill -9`

---

## 📞 Support & Resources

- **Gemini API Docs**: https://ai.google.dev/
- **Express Docs**: https://expressjs.com/
- **MongoDB Docs**: https://docs.mongodb.com/
- **Socket.IO Docs**: https://socket.io/docs/

---

## 📄 License

MIT License - See LICENSE file for details

---

## 👨‍💻 Contributing

Contributions welcome! Please:
1. Fork repository
2. Create feature branch
3. Submit pull request

---

## ⭐ Show Your Support

If you find this project helpful, give it a ⭐!

---

**Built with ❤️ using Gemini AI | Happy Coding! 🚀**
