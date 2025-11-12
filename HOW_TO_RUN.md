# How to Run the NGO-CONNECT Project

## Prerequisites
- Node.js installed (version 14 or higher recommended)
- npm (comes with Node.js)

## Step-by-Step Instructions

### 1. Install Dependencies (if not already installed)
```bash
npm install
```

### 2. Start the Development Server
```bash
npm start
```

This will:
- Start the React development server
- Open your browser automatically at `http://localhost:3000`
- Show the Welcome screen first, then redirect to Home page after 6 seconds

### 3. Access the Application
- **Development URL**: `http://localhost:3000`
- The app will automatically reload when you make changes to the code

### 4. Build for Production (Optional)
```bash
npm run build
```
This creates an optimized production build in the `build` folder.

## What You Should See

1. **Welcome Screen** (`/`):
   - Shows "Welcome To NGO-CONNECT" with logo
   - Automatically redirects to `/home` after 6 seconds

2. **Home Page** (`/home`):
   - Main landing page with donation options
   - Slideshow with inspirational messages
   - Various donation categories (Food, Books, Clothes, Money, etc.)

## Troubleshooting

### If the browser shows a blank screen or error:
1. **Clear browser cache**: Press `Ctrl + Shift + R` (or `Ctrl + F5`)
2. **Check the terminal** for any error messages
3. **Check browser console**: Press `F12` to see any JavaScript errors

### If port 3000 is already in use:
- The terminal will ask if you want to use a different port (usually 3001)
- Type `Y` to confirm

### If dependencies are missing:
```bash
npm install
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Backend Server (if needed)

If you need to run the backend server (Java servlet), make sure:
- Java is installed
- The backend server is running on `http://localhost:8082/ngo/api/`
- Check `backend/server.js` for Node.js backend (if applicable)

