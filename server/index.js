const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple JSON endpoint - Courses
app.get('/api/courses', (req, res) => {
  res.json({
    university1: {
      courses: [
        { id: 1, name: "B.Tech", duration: "4 years", specialization: ["Computer Science", "Electronics", "Mechanical", "Civil"] },
        { id: 2, name: "MBA", duration: "2 years", specialization: ["Finance", "Marketing", "HR", "Operations"] },
        { id: 3, name: "B.Sc", duration: "3 years", specialization: ["Physics", "Chemistry", "Mathematics", "Biology"] },
        { id: 4, name: "Pharm.D", duration: "6 years", specialization: ["Pharmacy", "Clinical Pharmacy"] }
      ]
    },
    university2: {
      courses: [
        { id: 1, name: "BBA", duration: "3 years", specialization: ["General Management", "Finance", "Marketing"] },
        { id: 2, name: "MCA", duration: "2 years", specialization: ["Computer Applications", "Software Development"] },
        { id: 3, name: "B.Com", duration: "3 years", specialization: ["Accounting", "Finance", "Economics"] },
        { id: 4, name: "B.A.", duration: "3 years", specialization: ["English", "History", "Psychology", "Sociology"] }
      ]
    }
  });
});

// Nested JSON endpoint - Fees
app.get('/api/fees/:universityId', (req, res) => {
  const { universityId } = req.params;
  
  if (universityId === '1') {
    res.json({
      university: "ABC Private University",
      fees: {
        "B.Tech": {
          annual: "₹3-5 Lakhs",
          total: "₹12-20 Lakhs",
          breakdown: {
            tuition: "₹2.5-4 Lakhs",
            hostel: "₹50,000-1 Lakh",
            other: "₹50,000-1 Lakh"
          }
        },
        "MBA": {
          annual: "₹2-4 Lakhs",
          total: "₹4-8 Lakhs",
          breakdown: {
            tuition: "₹1.5-3 Lakhs",
            hostel: "₹50,000-1 Lakh",
            other: "₹50,000-1 Lakh"
          }
        },
        "B.Sc": {
          annual: "₹1-2 Lakhs",
          total: "₹3-6 Lakhs",
          breakdown: {
            tuition: "₹80,000-1.5 Lakhs",
            hostel: "₹40,000-80,000",
            other: "₹20,000-50,000"
          }
        },
        "Pharm.D": {
          annual: "₹2-3 Lakhs",
          total: "₹12-18 Lakhs",
          breakdown: {
            tuition: "₹1.5-2.5 Lakhs",
            hostel: "₹50,000-1 Lakh",
            other: "₹50,000-1 Lakh"
          }
        }
      }
    });
  } else if (universityId === '2') {
    res.json({
      university: "XYZ Global University",
      fees: {
        "BBA": {
          annual: "₹1.5-2.5 Lakhs",
          total: "₹4.5-7.5 Lakhs",
          breakdown: {
            tuition: "₹1-2 Lakhs",
            hostel: "₹50,000-1 Lakh",
            other: "₹30,000-50,000"
          }
        },
        "MCA": {
          annual: "₹2-3 Lakhs",
          total: "₹4-6 Lakhs",
          breakdown: {
            tuition: "₹1.5-2.5 Lakhs",
            hostel: "₹50,000-1 Lakh",
            other: "₹30,000-50,000"
          }
        },
        "B.Com": {
          annual: "₹1-2 Lakhs",
          total: "₹3-6 Lakhs",
          breakdown: {
            tuition: "₹80,000-1.5 Lakhs",
            hostel: "₹40,000-80,000",
            other: "₹20,000-50,000"
          }
        },
        "B.A.": {
          annual: "₹1-1.6 Lakhs",
          total: "₹3-4.8 Lakhs",
          breakdown: {
            tuition: "₹70,000-1.2 Lakhs",
            hostel: "₹40,000-60,000",
            other: "₹20,000-40,000"
          }
        }
      }
    });
  } else {
    res.status(404).json({ error: "University not found" });
  }
});

// Simple JSON endpoint - University Info
app.get('/api/university/:id', (req, res) => {
  const { id } = req.params;
  
  if (id === '1') {
    res.json({
      id: 1,
      name: "ABC Private University",
      overview: "ABC University is a premier private institution established in 2010, known for excellence in engineering, management, and science. We offer world-class education with state-of-the-art infrastructure and experienced faculty.",
      courses: ["B.Tech", "MBA", "B.Sc", "Pharm.D"],
      placements: {
        averagePackage: "₹6-8 LPA",
        highestPackage: "₹25 LPA",
        topRecruiters: ["TCS", "Infosys", "Amazon", "Deloitte", "Wipro", "Accenture", "Cognizant"],
        placementRate: "85%"
      },
      facilities: [
        "Modern Hostel Accommodation",
        "WiFi Enabled Campus",
        "Sports Grounds & Gymnasium",
        "Auditorium & Conference Halls",
        "Central Library with Digital Resources",
        "Laboratories with Latest Equipment",
        "Cafeteria & Food Courts",
        "Medical Facilities"
      ]
    });
  } else if (id === '2') {
    res.json({
      id: 2,
      name: "XYZ Global University",
      overview: "XYZ University offers innovative programs with a focus on holistic development and industry partnerships. Established in 2015, we provide quality education in business, commerce, and arts with a global perspective.",
      courses: ["BBA", "MCA", "B.Com", "B.A."],
      placements: {
        averagePackage: "₹4-6 LPA",
        highestPackage: "₹18 LPA",
        topRecruiters: ["Wipro", "Cognizant", "IBM", "ICICI Bank", "HDFC Bank", "Tech Mahindra", "Capgemini"],
        placementRate: "78%"
      },
      facilities: [
        "Sports Complex & Recreation Center",
        "Well-stocked Library",
        "Modern Cafeteria",
        "Hostel Facilities",
        "Computer & Science Laboratories",
        "Seminar Halls",
        "Student Activity Center",
        "Health & Wellness Center"
      ]
    });
  } else {
    res.status(404).json({ error: "University not found" });
  }
});

// Lead form submission endpoint (for Pipedream integration)
app.post('/api/leads', (req, res) => {
  const leadData = req.body;
  console.log('Lead submitted:', leadData);
  
  // In production, this would forward to Pipedream
  // For now, we'll just log it
  res.json({ 
    success: true, 
    message: "Lead submitted successfully",
    data: leadData 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

