# Razorpay Integration Setup Guide

## ✅ Yes, Your Project Has Razorpay Integration!

Your project uses Razorpay for payment processing in the Money Donation feature.

## 🔧 Razorpay Dashboard Website Link Issue - SOLUTION

### The Problem:
Razorpay is asking for a valid website URL in your account settings. This is required for security and compliance.

### Solutions:

#### **Option 1: For Development/Testing (Recommended for Now)**

1. **Go to Razorpay Dashboard:**
   - Login to https://dashboard.razorpay.com
   - Navigate to: **Account & Settings** > **Website and App Settings** > **Business Website Details**

2. **Enter Development URL:**
   - Use: `http://localhost:3000` or `http://localhost:3001` (whichever port your React app runs on)
   - Or use: `http://127.0.0.1:3000`
   - Click **Save/Update**

3. **Note:** Razorpay might reject `localhost` URLs. If that happens, use **Option 2**.

#### **Option 2: Use a Temporary Placeholder (If localhost is rejected)**

1. **Use a valid domain format:**
   - `https://ngoconnect-dev.vercel.app` (if you deploy to Vercel)
   - `https://ngoconnect.netlify.app` (if you deploy to Netlify)
   - Or any temporary hosting URL

2. **For Testing Only:**
   - You can use: `https://example.com` (temporary, just to get past the validation)
   - Update it later with your actual website

#### **Option 3: Skip for Now (If Available)**

- Some Razorpay accounts allow you to skip this step
- Look for "I'll add this later" or "Skip" button
- You can add it later when you have a production URL

### ⚠️ Important Notes:

1. **For Production:** You MUST use your actual deployed website URL
2. **For Testing:** Localhost or a test deployment URL works
3. **The website URL doesn't affect payment functionality** - it's mainly for account verification

## 🔑 Next Steps: Get Your Razorpay API Keys

After fixing the website link, you need to:

### 1. Get Your API Keys:

1. Go to **Settings** > **API Keys** in Razorpay Dashboard
2. You'll see:
   - **Key ID** (starts with `rzp_test_` for test mode)
   - **Key Secret** (click "Reveal" to see it)

### 2. Update Your Code:

#### **Frontend (src/pages/MoneyDonation.jsx):**
```javascript
// Line 35 - Replace the placeholder key:
key: "rzp_test_1234567890abcdef", // Replace with YOUR actual Key ID
```

#### **Backend (backend/server.js or backend/backend/server.js):**
```javascript
// Replace these placeholders:
key_id: "YOUR_RAZORPAY_KEY_ID",        // Your Key ID
key_secret: "YOUR_RAZORPAY_SECRET"     // Your Key Secret
```

#### **Or Use Environment Variables (Recommended):**

Create a `.env` file in your backend folder:
```
RAZORPAY_KEY_ID=rzp_test_your_actual_key_id
RAZORPAY_SECRET=your_actual_secret_key
```

Then in `backend/backend/server.js` (it already uses env variables):
```javascript
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});
```

## 📋 Current Integration Points:

1. **Money Donation Page** (`src/pages/MoneyDonation.jsx`)
   - Uses Razorpay for payment processing
   - Creates orders via backend API
   - Verifies payments

2. **Backend Server** (`backend/server.js` or `backend/backend/server.js`)
   - Creates Razorpay orders
   - Verifies payment signatures

## 🚀 Testing Your Integration:

1. **Start Backend Server:**
   ```bash
   cd backend
   npm install
   node server.js
   # Or for backend/backend:
   cd backend/backend
   npm install
   node server.js
   ```

2. **Start Frontend:**
   ```bash
   npm start
   ```

3. **Test Payment:**
   - Go to `/money-donation` page
   - Fill in the form
   - Click "Donate Securely via Razorpay"
   - Use Razorpay test cards (check Razorpay docs for test card numbers)

## 🔒 Security Reminders:

- ✅ **NEVER commit API keys to Git**
- ✅ Use environment variables for secrets
- ✅ Use Test Mode keys for development
- ✅ Switch to Live Mode keys only in production
- ✅ Keep your Key Secret secure and never expose it in frontend code

## 📞 Need Help?

- Razorpay Documentation: https://razorpay.com/docs/
- Razorpay Support: support@razorpay.com

