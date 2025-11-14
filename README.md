# University Landing Pages

A modern, responsive single-page application featuring two university landing pages with lead form integration, API endpoints, and Pipedream workflow support.

## Features

- ✅ Two separate landing pages for private universities
- ✅ Complete university information (Overview, Courses, Fees, Placements, Facilities)
- ✅ Lead form with validation (Name, Email, Phone, State, Course, Intake Year, Consent)
- ✅ Pipedream API integration for lead submissions
- ✅ Dynamic fee modal fetching from API
- ✅ Responsive design (Mobile & Desktop)
- ✅ RESTful API endpoints (Simple and Nested JSON)
- ✅ Download Brochure functionality
- ✅ Apply Now button with smooth scroll

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Backend**: Express.js, Node.js
- **Styling**: CSS3 with responsive design

## Project Structure

```
uni-landing-pages/
├── src/
│   ├── components/
│   │   ├── LandingPage1/     # ABC Private University
│   │   ├── LandingPage2/     # XYZ Global University
│   │   ├── LeadForm/         # Lead capture form
│   │   ├── Modal/            # Fees modal
│   │   └── api/              # API utilities
│   ├── App.js
│   └── App.css
├── server/
│   └── index.js              # Express API server
└── public/
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   cd uni-landing-pages
   npm install
   ```

2. **Create environment file (optional - only if using Pipedream):**
   Create a `.env` file in the root directory:
   ```
   REACT_APP_PIPEDREAM_URL=YOUR_PIPEDREAM_ENDPOINT_URL
   ```

### Running the Application

**Start the React app:**
```bash
npm start
```
App will run on `http://localhost:3000`

**Note:** This is a frontend-only application. All data is stored locally. No backend server is required!

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Data Storage

All data is stored locally in the React components:

- **University Information**: Stored in component files
- **Fees Data**: Stored in Modal component
- **Courses**: Stored in LeadForm component
- **Form Submissions**: 
  - If Pipedream URL is provided → Submits to Pipedream
  - If no Pipedream URL → Saves to browser's localStorage

## Pipedream Integration

1. Create a Pipedream workflow
2. Get your endpoint URL
3. Set `REACT_APP_PIPEDREAM_URL` in your `.env` file
4. The form will automatically post to your Pipedream endpoint

## Deployment

### Free Hosting Options with SSL

#### Option 1: Vercel (Recommended)
See detailed step-by-step guide in [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

Quick steps:
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`
4. SSL is automatically configured

#### Option 2: Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=build`
4. SSL is automatically configured

#### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/uni-landing-pages",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

**No backend deployment needed!** This is a pure frontend application.

## Routes

- `/` or `/university1` - LPU Private University landing page
- `/university2` - XYZ Global University landing page

## Form Fields

- Full Name (required)
- Email (required, validated)
- Phone Number (required, 10-digit India format)
- State (required, dropdown with Indian states)
- Course Interested (required, dynamic dropdown based on university)
- Intake Year (required, dropdown: 2024-2028)
- Consent Checkbox (required)

## Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 480px (mobile)
- Touch-friendly buttons and inputs
- Optimized layouts for all screen sizes

### Modal Functionality
- Click "Check Course-wise Fees" to open modal
- Fetches dynamic fee data from API
- Shows nested fee breakdown
- Click outside or close button to dismiss

### Download Brochure
- Generates a text file with university information
- Automatically downloads when clicked

### Apply Now
- Smooth scrolls to the lead form
- Better user experience

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
