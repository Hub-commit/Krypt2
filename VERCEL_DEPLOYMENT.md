# 🚀 DEPLOYING TO VERCEL

## Prerequisites
- GitHub repository (✅ Done - https://github.com/Hub-commit/Krypt2.git)
- Vercel account (Sign up at https://vercel.com)
- Environment variables configured

---

## Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub (recommended)
4. Authorize Vercel to access your GitHub account

---

## Step 2: Import Project to Vercel
1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select "Import Git Repository"
4. Paste your GitHub URL: https://github.com/Hub-commit/Krypt2.git
5. Click "Continue"

---

## Step 3: Configure Environment Variables
In the Vercel dashboard, add these environment variables:

### Required Variables
```
GEMINI_API_KEY = AIzaSyC-LsxERte8huVR_Xu-ifGTMuKG4tr1X6Q
MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/kryppt
JWT_SECRET = your_jwt_secret_key_here
NODE_ENV = production
CORS_ORIGIN = https://your-vercel-domain.vercel.app
```

### Optional
```
JWT_EXPIRE = 7d
SESSION_SECRET = your_session_secret
PORT = 3000 (Vercel uses 3000)
```

---

## Step 4: Deploy
1. Click "Deploy"
2. Wait for build to complete (2-5 minutes)
3. Your app will be live at: `https://your-project.vercel.app`

---

## Troubleshooting

### Build Fails
- Check that all dependencies are in package.json
- Ensure .env variables are set in Vercel dashboard
- Check build logs in Vercel console

### API Not Working
- Verify MongoDB connection string
- Ensure Gemini API key is valid
- Check CORS_ORIGIN matches your domain

### Socket.IO Not Working
- Vercel may not support WebSockets on free tier
- Alternative: Use polling instead of WebSockets
- Or upgrade to Vercel Pro

---

## Environment Variables Needed

```bash
# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/kryppt

# Authentication
JWT_SECRET=your_very_secret_key_here_min_32_chars

# AI Integration
GEMINI_API_KEY=AIzaSyC-LsxERte8huVR_Xu-ifGTMuKG4tr1X6Q

# Server Config
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://your-vercel-domain.vercel.app
```

---

## After Deployment

### Test Your API
```bash
curl https://your-vercel-domain.vercel.app/api/health
```

Should return:
```json
{"status":"Server is running","timestamp":"2026-02-10T..."}
```

### Test Gemini AI
```bash
curl -X POST https://your-vercel-domain.vercel.app/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"userId":"test","context":"career-advice","title":"Test"}'
```

### Check Logs
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments"
4. Click on your deployment
5. View "Build Logs" and "Runtime Logs"

---

## Domain Configuration

### Custom Domain
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update CORS_ORIGIN in environment variables

---

## Monitoring

### View Logs
```bash
vercel logs [project-name]
```

### Monitor Performance
- Vercel Analytics (Pro plan)
- Custom monitoring via MongoDB
- API response times

---

## Scaling

### Free Tier Limits
- 100 GB bandwidth/month
- Serverless functions up to 6000ms
- Max 1 concurrent build

### Upgrade to Pro
- Unlimited bandwidth
- Longer function timeouts
- Priority support

---

## Next Steps

1. ✅ Set up Vercel account
2. ✅ Import GitHub repository
3. ✅ Configure environment variables
4. ✅ Deploy project
5. ✅ Test all endpoints
6. ✅ Set custom domain (optional)
7. ✅ Monitor and scale

---

**Your Kryppt Platform will be live at:** `https://your-vercel-domain.vercel.app`
