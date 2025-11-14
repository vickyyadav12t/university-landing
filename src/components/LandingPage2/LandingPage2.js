import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../LeadForm/LeadForm';
import Modal from '../Modal/Modal';

// Local university data
const UNI_DATA = {
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
};

export default function LandingPage2() {
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);

  const handleDownloadBrochure = () => {
    const content = `
      ${UNI_DATA.name} Brochure
      
      ${UNI_DATA.overview}
      
      Courses: ${UNI_DATA.courses.join(', ')}
      
      Placements:
      - Average Package: ${UNI_DATA.placements.averagePackage}
      - Highest Package: ${UNI_DATA.placements.highestPackage}
      - Placement Rate: ${UNI_DATA.placements.placementRate}
      
      Top Recruiters: ${UNI_DATA.placements.topRecruiters.join(', ')}
      
      Facilities:
      ${UNI_DATA.facilities.map(f => `- ${f}`).join('\n')}
      
      For more information, please contact us.
    `;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'xyz-university-brochure.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleApplyNow = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const courseIcons = {
    "BBA": "💼",
    "MCA": "💻",
    "B.Com": "📊",
    "B.A.": "📝"
  };

  const facilityIcons = {
    "Sports Complex & Recreation Center": "⚽",
    "Well-stocked Library": "📚",
    "Modern Cafeteria": "🍽️",
    "Hostel Facilities": "🏠",
    "Computer & Science Laboratories": "💻",
    "Seminar Halls": "🎓",
    "Student Activity Center": "🎭",
    "Health & Wellness Center": "🏥"
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/university2" className="navbar-brand">XYZ University</Link>
          <ul className="navbar-links">
            <li><a href="#overview" onClick={(e) => { e.preventDefault(); document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a></li>
            <li><a href="#courses" onClick={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}>Courses</a></li>
            <li><a href="#placements" onClick={(e) => { e.preventDefault(); document.getElementById('placements')?.scrollIntoView({ behavior: 'smooth' }); }}>Placements</a></li>
            <li><a href="#facilities" onClick={(e) => { e.preventDefault(); document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' }); }}>Facilities</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
            <li><Link to="/" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>View LPU University →</Link></li>
          </ul>
        </div>
      </nav>

      <header className="page-header" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f59e0b 100%)' }}>
        <div className="page-header-content">
          <div className="header-badge">🌟 Innovative Global University</div>
          <h1>{UNI_DATA.name}</h1>
          <p className="tagline">Innovation in Education Since 2015</p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginTop: '20px' }}>
            Empowering Students with Global Perspective and Industry Excellence
          </p>
        </div>
      </header>

      <section id="overview" className="section overview-section">
        <h2>About Our University</h2>
        <p className="section-subtitle">
          A modern institution dedicated to holistic development and industry excellence
        </p>
        <p className="overview-text">{UNI_DATA.overview}</p>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <span className="stat-number">9+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <span className="stat-number">8K+</span>
            <span className="stat-label">Alumni Network</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <span className="stat-number">{UNI_DATA.placements.placementRate}</span>
            <span className="stat-label">Placement Rate</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <span className="stat-number">4.6/5</span>
            <span className="stat-label">Student Rating</span>
          </div>
        </div>
      </section>

      <section id="courses" className="section courses-section section-alt">
        <h2>Our Programs</h2>
        <p className="section-subtitle">
          Diverse programs designed to prepare you for success in the global marketplace
        </p>
        <div className="courses-grid">
          {UNI_DATA.courses.map((course, index) => (
            <div key={index} className="course-card">
              <span className="course-icon">{courseIcons[course] || "📖"}</span>
              <h3>{course}</h3>
              <p>Industry-aligned curriculum with practical training and global exposure</p>
            </div>
          ))}
        </div>
      </section>

      <section id="placements" className="section placements-section">
        <h2>Career Opportunities</h2>
        <p className="section-subtitle">
          Strong industry partnerships ensuring excellent placement opportunities
        </p>
        <div className="placement-info">
          <div className="placement-stat">
            <span className="stat-label">Average Package</span>
            <span className="stat-value">{UNI_DATA.placements.averagePackage}</span>
          </div>
          <div className="placement-stat">
            <span className="stat-label">Highest Package</span>
            <span className="stat-value">{UNI_DATA.placements.highestPackage}</span>
          </div>
          <div className="placement-stat">
            <span className="stat-label">Placement Rate</span>
            <span className="stat-value">{UNI_DATA.placements.placementRate}</span>
          </div>
        </div>
        <div className="recruiters">
          <h3>Our Top Recruiters</h3>
          <div className="recruiters-list">
            {UNI_DATA.placements.topRecruiters.map((recruiter, index) => (
              <span key={index} className="recruiter-tag">{recruiter}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="section facilities-section section-alt">
        <h2>Campus Facilities</h2>
        <p className="section-subtitle">
          Modern infrastructure supporting academic excellence and student well-being
        </p>
        <div className="facilities-grid">
          {UNI_DATA.facilities.map((facility, index) => (
            <div key={index} className="facility-item">
              <span className="facility-icon">{facilityIcons[facility] || "✓"}</span>
              <span>{facility}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-content">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Explore our course fees, download the brochure, or start your application today</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              💰 Check Course-wise Fees
            </button>
            <button className="btn btn-secondary" onClick={handleDownloadBrochure}>
              📄 Download Brochure
            </button>
            <button className="btn btn-success" onClick={handleApplyNow}>
              ✍️ Apply Now
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="section form-section" ref={formRef}>
        <h2>Start Your Journey</h2>
        <p className="form-description">
          Take the first step towards a brighter future. Fill out the form below and our admission team will guide you through the process.
        </p>
        <LeadForm 
          pipedreamUrl={process.env.REACT_APP_PIPEDREAM_URL}
          universityId="2"
        />
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>XYZ Global University</h3>
          <p>Empowering students to achieve their dreams through quality education</p>
          <div className="footer-links">
            <a href="#overview" onClick={(e) => { e.preventDefault(); document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' }); }}>About Us</a>
            <a href="#courses" onClick={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}>Courses</a>
            <a href="#placements" onClick={(e) => { e.preventDefault(); document.getElementById('placements')?.scrollIntoView({ behavior: 'smooth' }); }}>Placements</a>
            <a href="#facilities" onClick={(e) => { e.preventDefault(); document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' }); }}>Facilities</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
            <Link to="/" style={{ color: 'white', opacity: 0.9 }}>View LPU University</Link>
          </div>
          <p style={{ marginTop: '30px', fontSize: '0.9rem' }}>
            © 2024 XYZ Global University. All rights reserved.
          </p>
        </div>
      </footer>

      {showModal && (
        <Modal 
          onClose={() => setShowModal(false)} 
          universityId="2"
        />
      )}
    </div>
  );
}
