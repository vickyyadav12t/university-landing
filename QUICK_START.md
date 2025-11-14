# Quick Start Guide

## Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

## Running Locally

**Start the React App:**
```bash
npm start
```
App runs on: http://localhost:3000

**Note:** No backend server needed! This is a pure frontend application.

## Access the Pages

- University 1: http://localhost:3000/ or http://localhost:3000/university1
- University 2: http://localhost:3000/university2

## Pipedream Setup (Optional)

If you want to use Pipedream for form submissions:

1. Go to https://pipedream.com
2. Create a new workflow
3. Add an HTTP trigger
4. Copy the endpoint URL
5. Create `.env` file in root:
   ```
   REACT_APP_PIPEDREAM_URL=your-pipedream-url-here
   ```

**Without Pipedream:** Form data will be saved to browser's localStorage.

## Testing the Form

1. Fill out the lead form on any landing page
2. Submit the form
3. If Pipedream URL is set → Check your Pipedream workflow
4. If no Pipedream URL → Data is saved in browser localStorage

## Data Storage

- All university data is stored locally in components
- Form submissions go to Pipedream (if configured) or localStorage
- No backend API required!

## Build for Production

```bash
npm run build
```

Output will be in the `build` folder, ready for deployment to any static hosting service.

