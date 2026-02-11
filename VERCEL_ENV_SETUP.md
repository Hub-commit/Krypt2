# 🚀 Vercel Deployment - Environment Variables Setup

## Your Application is Ready for Vercel!

Your MongoDB Atlas and Gemini API are now configured. Follow these steps to deploy to Vercel:

---

## **Step 1: Connect Your GitHub Repository to Vercel**

1. Go to: https://vercel.com
2. Click **"New Project"** or **"Add New"**
3. Select **"Import Git Repository"**
4. Search for your Krypt repository
5. Click **"Import"**

---

## **Step 2: Add Environment Variables in Vercel**

When prompted to configure project, add these environment variables:

| Variable Name | Value |
|---|---|
| `MONGODB_URI` | `mongodb+srv://Hub-commit:JBTWRjZBRs6pIyOd@hubcommit.oyj9c4q.mongodb.net/kryppt?retryWrites=true&w=majority` |
| `GEMINI_API_KEY` | `AIzaSyC-LsxERte8huVR_Xu-ifGTMuKG4tr1X6Q` |
| `JWT_SECRET` | `kryppt_super_secret_jwt_key_min_32_characters_long_12345` |
| `JWT_EXPIRE` | `7d` |
| `SESSION_SECRET` | `kryppt_session_secret_key_here` |
| `PORT` | `5000` |
| `NODE_ENV` | `production` |
| `CORS_ORIGIN` | `https://your-vercel-domain.vercel.app` |

---

## **Step 3: Deploy**

1. Click **"Deploy"**
2. Wait for deployment to complete (2-5 minutes)
3. Get your live URL: `https://your-project.vercel.app`

---

## **✅ Your Application is Now:**
- ✅ Running locally on `http://localhost:5000`
- ✅ Connected to MongoDB Atlas (Cloud)
- ✅ Ready to deploy to Vercel

---

## **Verify Local Application is Working**

Open your browser and visit:
```
http://localhost:5000/public/kryppt_platform_landing_page/code.html
```

You should see the Kryppt Platform landing page!

---

## **Troubleshooting Vercel Deployment**

If you encounter issues on Vercel:

1. **Check build logs** in Vercel dashboard
2. **Verify MongoDB URI** is correct (check for special characters)
3. **Ensure Node.js version** is compatible (v16+)
4. **Check CORS settings** if frontend can't reach API

---

## **Support**
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
- Gemini API: https://ai.google.dev
