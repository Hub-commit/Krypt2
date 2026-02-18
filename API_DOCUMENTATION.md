# Kryppt Backend API Documentation

## Overview
Kryppt is an AI-powered mentorship and job discovery platform. The backend is built with Node.js, Express, and MongoDB.

## Quick Start

### Installation
```bash
npm install
```

### Configuration
Create a `.env` file in the root directory with:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
GEMINI_API_KEY=your_gemini_api_key
CORS_ORIGIN=http://localhost:3000
```

### Start Server
```bash
npm start          # Production
npm run dev        # Development (with nodemon)
```

Server runs on `http://localhost:5000`

---

## API Endpoints

### Authentication Routes (`/api/auth`)

#### Sign Up
**POST** `/api/auth/signup`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "mentee" // or "mentor"
}
```
Response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "mentee"
  }
}
```

#### Log In
**POST** `/api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```
Response:
```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "mentee"
  }
}
```

#### Verify Token
**POST** `/api/auth/verify`
- Headers: `Authorization: Bearer {token}`

Response:
```json
{
  "success": true,
  "message": "Token is valid",
  "userId": "user_id",
  "role": "mentee"
}
```

---

### Mentee Routes (`/api/mentees`)

#### Get Mentee Profile
**GET** `/api/mentees/:id`
- Headers: `Authorization: Bearer {token}`

#### Update Mentee Profile
**PUT** `/api/mentees/:id`
- Headers: `Authorization: Bearer {token}`
```json
{
  "name": "John Updated",
  "skills": ["JavaScript", "React", "Node.js"],
  "location": "New York",
  "timezone": "EST"
}
```

#### Get All Mentees
**GET** `/api/mentees`
- Headers: `Authorization: Bearer {token}`

#### Get Mentee's Goals
**GET** `/api/mentees/:id/goals`
- Headers: `Authorization: Bearer {token}`

---

### Mentor Routes (`/api/mentors`)

#### Get All Mentors (with filters)
**GET** `/api/mentors?skills=JavaScript,React&experience=5&location=New%20York`

#### Get Mentor Profile
**GET** `/api/mentors/:id`

#### Update Mentor Profile
**PUT** `/api/mentors/:id`
- Headers: `Authorization: Bearer {token}`
```json
{
  "name": "Jane Smith",
  "title": "Senior Software Engineer",
  "skills": ["JavaScript", "Python", "AWS"],
  "experience": 8,
  "location": "San Francisco"
}
```

#### Get Mentor's Mentees
**GET** `/api/mentors/:id/mentees`
- Headers: `Authorization: Bearer {token}`

---

### Jobs Routes (`/api/jobs`)

#### Get All Jobs (with filters)
**GET** `/api/jobs?location=New%20York&jobType=full-time&skills=JavaScript,React`

#### Get Job Details
**GET** `/api/jobs/:id`

#### Create Job
**POST** `/api/jobs`
- Headers: `Authorization: Bearer {token}`
```json
{
  "title": "Senior Developer",
  "description": "We are looking for...",
  "location": "New York",
  "salary": 120000,
  "jobType": "full-time",
  "requiredSkills": ["JavaScript", "React"]
}
```

#### Update Job
**PUT** `/api/jobs/:id`
- Headers: `Authorization: Bearer {token}`

#### Delete Job
**DELETE** `/api/jobs/:id`
- Headers: `Authorization: Bearer {token}`

---

### Messaging Routes (`/api/messaging`)

#### Get User Conversations
**GET** `/api/messaging/conversations/:userId`
- Headers: `Authorization: Bearer {token}`

#### Send Message
**POST** `/api/messaging/send`
- Headers: `Authorization: Bearer {token}`
```json
{
  "senderId": "sender_id",
  "recipientId": "recipient_id",
  "content": "Hey, how are you?"
}
```

#### Get Conversation Thread
**GET** `/api/messaging/thread/:userId/:otherUserId`
- Headers: `Authorization: Bearer {token}`

---

### AI Routes (`/api/ai`)

#### Start AI Chat
**POST** `/api/ai/chat`
- Headers: `Authorization: Bearer {token}`
```json
{
  "userId": "user_id",
  "title": "Career Guidance",
  "context": "I want to switch to tech industry"
}
```

#### Get AI Chat
**GET** `/api/ai/chat/:chatId`
- Headers: `Authorization: Bearer {token}`

#### Send Message to AI
**POST** `/api/ai/message`
- Headers: `Authorization: Bearer {token}`
```json
{
  "chatId": "chat_id",
  "userId": "user_id",
  "message": "What skills do I need?"
}
```

---

### Goals Routes (`/api/goals`)

#### Create Goal
**POST** `/api/goals`
- Headers: `Authorization: Bearer {token}`
```json
{
  "userId": "user_id",
  "title": "Learn React",
  "description": "Master React framework",
  "category": "learning",
  "targetDate": "2026-12-31"
}
```

#### Get User Goals
**GET** `/api/goals/user/:userId`
- Headers: `Authorization: Bearer {token}`

#### Update Goal
**PUT** `/api/goals/:id`
- Headers: `Authorization: Bearer {token}`

#### Delete Goal
**DELETE** `/api/goals/:id`
- Headers: `Authorization: Bearer {token}`

---

### Admin Routes (`/api/admin`)

#### Get All Users
**GET** `/api/admin/users`
- Headers: `Authorization: Bearer {admin_token}`

#### Ban User
**POST** `/api/admin/users/:id/ban`
- Headers: `Authorization: Bearer {admin_token}`

#### Get Platform Statistics
**GET** `/api/admin/stats`
- Headers: `Authorization: Bearer {admin_token}`

---

### Health Check
**GET** `/api/health`
```json
{
  "status": "Server is running",
  "timestamp": "2026-02-18T10:30:00.000Z"
}
```

---

## Error Responses

Standard error response format:
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Valid email is required"
    }
  ]
}
```

### Common Error Codes
- `400` - Bad Request (validation error)
- `401` - Unauthorized (invalid token or not authenticated)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

---

## Middleware

### Authentication (`middleware/auth.js`)
- `verifyToken` - Verifies JWT token
- `isMentor` - Checks if user is mentor
- `isMentee` - Checks if user is mentee
- `isAdmin` - Checks if user is admin

### Validation (`middleware/validators.js`)
- `validateSignup` - Validates signup data
- `validateLogin` - Validates login data
- `validateMenteeUpdate` - Validates mentee profile updates
- `validateMentorUpdate` - Validates mentor profile updates
- `validateJobCreation` - Validates job creation
- `validateMessage` - Validates message data

### Error Handler (`middleware/errorHandler.js`)
- `asyncHandler` - Wraps async route handlers
- `globalErrorHandler` - Global error handler
- `AppError` - Custom error class

---

## Database Models

### User
- name, email, password, role, avatar, bio, skills, experience, title, location, timezone, phone, linkedinUrl, githubUrl, website, isVerified, isBanned

### Job
- title, description, location, salary, jobType, requiredSkills, postedBy, isActive, createdAt, updatedAt

### Message
- senderId, recipientId, content, read, createdAt

### Goal
- userId, title, description, category, targetDate, completed, createdAt, updatedAt

### AIChat
- userId, title, context, messages, createdAt, updatedAt

### Mentorship
- mentorId, menteeId, status, createdAt, updatedAt

### Session
- mentorId, menteeId, scheduledAt, duration, notes, completed, createdAt, updatedAt

---

## Development

### Run Tests
```bash
npm test
```

### Watch Mode
```bash
npm run dev
```

### Build
```bash
npm run build
```

---

## Deployment

### Heroku
```bash
git push heroku main
```

### Environment Variables for Production
Set all `.env` variables in your hosting platform's environment settings.

---

## Support
For issues and questions, please create an issue on GitHub or contact support@kryppt.com
