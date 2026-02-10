# Kryppt Platform - Build & Run Instructions

## Prerequisites Checklist
- [ ] Node.js installed (v16+)
- [ ] MongoDB installed/configured
- [ ] Gemini API key obtained

## Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
cd "c:\Users\Ugoch\Documents\code hub\Krypt"
npm install
```

### 2. Get Gemini API Key
1. Visit: https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key

### 3. Configure .env
The `.env` file is ready with placeholder. Update it:
```
GEMINI_API_KEY=your_key_from_step_2
MONGODB_URI=mongodb://localhost:27017/kryppt
```

### 4. Start Server
```bash
npm run dev
```

### 5. Access Dashboard
```
http://localhost:5000/public/kryppt_platform_landing_page/
```

---

## What's Included

✅ **Backend API** with Express.js
✅ **MongoDB Models** for all features
✅ **Gemini AI Integration** with 8+ AI features
✅ **Real-time Messaging** with Socket.IO
✅ **Authentication** with JWT
✅ **20 Dashboard Pages** (HTML/Tailwind CSS)
✅ **Frontend API Client** wrapper
✅ **Complete Documentation**

---

## Available Commands

```bash
npm run dev          # Development mode with auto-reload
npm start            # Production mode
npm test             # Run tests (when configured)
npm run build        # Build project (when configured)
```

---

## Key Features Ready to Use

### 🤖 AI Features
- Synapse AI Chat
- Learning Pathway Generation
- Mentor Compatibility Analysis
- Job Recommendations
- Career Advice
- Resume Review
- Interview Prep
- Session Summaries

### 👥 Social Features
- Mentor Discovery & Profiles
- Real-time Messaging
- Mentorship Requests
- Goal Tracking

### 💼 Job Features
- Job Listings
- Local Job Map
- AI Job Matching
- Job Applications

### 👨‍💼 Admin Features
- User Management
- Oversight Dashboard
- Analytics (ready to add)

---

## API Endpoints

All endpoints documented in [SETUP_GUIDE.md](SETUP_GUIDE.md)

Quick examples:

```bash
# Create account
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"pass123","role":"mentee"}'

# Get mentors
curl http://localhost:5000/api/mentors

# Create AI chat
curl -X POST http://localhost:5000/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"userId":"user123","context":"career-advice","title":"Test"}'
```

---

## Next Steps

1. **Read Full Documentation**
   - [SETUP_GUIDE.md](SETUP_GUIDE.md) - Complete setup
   - [GEMINI_API_SETUP.md](GEMINI_API_SETUP.md) - AI setup
   - [README.md](README.md) - Project overview

2. **Get Your Gemini API Key**
   - Go to: https://aistudio.google.com/app/apikey
   - Free tier: 60 requests/minute

3. **Configure Database**
   - Local MongoDB: Run `mongod`
   - Or use MongoDB Atlas (cloud)

4. **Start Building**
   - Integrate frontend with API
   - Add user authentication
   - Implement AI features

---

## Project Structure

```
Krypt/
├── server.js                 # Main server file
├── package.json              # Dependencies
├── .env                      # Configuration (SECRET)
├── SETUP_GUIDE.md           # Full setup guide
├── GEMINI_API_SETUP.md      # AI guide
├── README.md                # Project overview
├── routes/                  # API endpoints
├── models/                  # Database schemas
├── services/                # Business logic
├── public/                  # Frontend files
└── dashboard-components/    # HTML components
```

---

## Troubleshooting

### Cannot connect to MongoDB
```bash
# Start MongoDB
mongod

# Check connection string in .env
```

### Gemini API key not working
```bash
# 1. Verify key is correct
# 2. Check API key in .env (no spaces)
# 3. Get new key if needed: https://aistudio.google.com/app/apikey
# 4. Restart server
```

### Port 5000 already in use
```bash
# Change PORT in .env to different value (e.g., 5001)
# Or kill process on port 5000
```

---

## Support

For detailed help, see:
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Complete instructions
- [GEMINI_API_SETUP.md](GEMINI_API_SETUP.md) - AI configuration
- [README.md](README.md) - Project info

---

## You're Ready to Go! 🚀

Server running on `http://localhost:5000`
Dashboard on `http://localhost:5000/public/kryppt_platform_landing_page/`

All 8+ AI features are ready with Gemini API!
