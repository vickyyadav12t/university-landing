import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../LeadForm/LeadForm';
import Modal from '../Modal/Modal';

// Local university data
const UNI_DATA = {
  id: 1,
  name: "LPU Private University",
  overview: "LPU University is a premier private institution established in 2010, known for excellence in engineering, management, and science. We offer world-class education with state-of-the-art infrastructure and experienced faculty.",
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
};

export default function LandingPage1() {
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
    a.download = 'lpu-university-brochure.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleApplyNow = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const courseIcons = {
    "B.Tech": "⚙️",
    "MBA": "📊",
    "B.Sc": "🔬",
    "Pharm.D": "💊"
  };

  const facilityIcons = {
    "Modern Hostel Accommodation": "🏠",
    "WiFi Enabled Campus": "📶",
    "Sports Grounds & Gymnasium": "⚽",
    "Auditorium & Conference Halls": "🎭",
    "Central Library with Digital Resources": "📚",
    "Laboratories with Latest Equipment": "🔬",
    "Cafeteria & Food Courts": "🍽️",
    "Medical Facilities": "🏥"
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">LPU University</Link>
          <ul className="navbar-links">
            <li><a href="#overview" onClick={(e) => { e.preventDefault(); document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a></li>
            <li><a href="#courses" onClick={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}>Courses</a></li>
            <li><a href="#placements" onClick={(e) => { e.preventDefault(); document.getElementById('placements')?.scrollIntoView({ behavior: 'smooth' }); }}>Placements</a></li>
            <li><a href="#facilities" onClick={(e) => { e.preventDefault(); document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' }); }}>Facilities</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
            <li><Link to="/university2" style={{ color: 'var(--primary-color)', fontWeight: '600' }}>View XYZ University →</Link></li>
          </ul>
        </div>
      </nav>

      <header className="page-header">
        <div className="page-header-content">
          <div className="header-badge">🎓 Premier Private University</div>
          <h1>{UNI_DATA.name}</h1>
          <p className="tagline">Excellence in Education Since 2010</p>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, marginTop: '20px' }}>
            Shaping Future Leaders with World-Class Education
          </p>
        </div>
      </header>

      <section id="overview" className="section overview-section">
        <h2>About Our University</h2>
        <p className="section-subtitle">
          A premier institution committed to academic excellence and holistic development
        </p>
        <p className="overview-text">{UNI_DATA.overview}</p>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <span className="stat-number">14+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <span className="stat-number">10K+</span>
            <span className="stat-label">Alumni Network</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <span className="stat-number">{UNI_DATA.placements.placementRate}</span>
            <span className="stat-label">Placement Rate</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <span className="stat-number">4.8/5</span>
            <span className="stat-label">Student Rating</span>
          </div>
        </div>
      </section>

      <section id="courses" className="section courses-section section-alt">
        <h2>Our Programs</h2>
        <p className="section-subtitle">
          Choose from our wide range of accredited programs designed for your success
        </p>
        <div className="courses-grid">
          {UNI_DATA.courses.map((course, index) => (
            <div key={index} className="course-card">
              <span className="course-icon">{courseIcons[course] || "📖"}</span>
              <h3>{course}</h3>
              <p>Comprehensive curriculum with industry-focused learning and hands-on experience</p>
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
          State-of-the-art infrastructure supporting academic and personal growth
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
          universityId="1"
        />
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>LPU Private University</h3>
          <p>Empowering students to achieve their dreams through quality education</p>
          <div className="footer-links">
            <a href="#overview" onClick={(e) => { e.preventDefault(); document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' }); }}>About Us</a>
            <a href="#courses" onClick={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}>Courses</a>
            <a href="#placements" onClick={(e) => { e.preventDefault(); document.getElementById('placements')?.scrollIntoView({ behavior: 'smooth' }); }}>Placements</a>
            <a href="#facilities" onClick={(e) => { e.preventDefault(); document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' }); }}>Facilities</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
            <Link to="/university2" style={{ color: 'white', opacity: 0.9 }}>View XYZ University</Link>
          </div>
          <p style={{ marginTop: '30px', fontSize: '0.9rem' }}>
            © 2024 LPU Private University. All rights reserved.
          </p>
        </div>
      </footer>

      {showModal && (
        <Modal 
          onClose={() => setShowModal(false)} 
          universityId="1"
        />
      )}
    </div>
  );
}
