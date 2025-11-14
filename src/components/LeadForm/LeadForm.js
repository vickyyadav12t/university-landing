import React, { useState } from "react";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir"
];

const INTAKE_YEARS = ["2024", "2025", "2026", "2027", "2028"];

// Local courses data
const COURSES_DATA = {
  "1": ["B.Tech", "MBA", "B.Sc", "Pharm.D"],
  "2": ["BBA", "MCA", "B.Com", "B.A."]
};

export default function LeadForm({ pipedreamUrl, universityId }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    course: "",
    year: "",
    consent: false
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"
  const [loading, setLoading] = useState(false);

  const courses = COURSES_DATA[universityId] || [];

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    // Clear status when user starts typing
    if (status) {
      setStatus("");
      setStatusType("");
    }
  }

  function validateForm() {
    if (!form.name.trim()) {
      setStatus("Please enter your full name.");
      setStatusType("error");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus("Please enter a valid email address.");
      setStatusType("error");
      return false;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      setStatus("Please enter a valid 10-digit phone number.");
      setStatusType("error");
      return false;
    }
    if (!form.state) {
      setStatus("Please select your state.");
      setStatusType("error");
      return false;
    }
    if (!form.course) {
      setStatus("Please select a course.");
      setStatusType("error");
      return false;
    }
    if (!form.year) {
      setStatus("Please select intake year.");
      setStatusType("error");
      return false;
    }
    if (!form.consent) {
      setStatus("Please provide consent to be contacted.");
      setStatusType("error");
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setStatus("");
    setStatusType("");

    const formData = {
      ...form,
      universityId: universityId,
      timestamp: new Date().toISOString()
    };

    // If Pipedream URL is provided, submit to it
    if (pipedreamUrl) {
      try {
        const res = await fetch(pipedreamUrl, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          setStatus("Form submitted successfully! We'll contact you soon.");
          setStatusType("success");
          // Reset form
          setForm({
            name: "",
            email: "",
            phone: "",
            state: "",
            course: "",
            year: "",
            consent: false
          });
        } else {
          setStatus("Submission error. Please try again.");
          setStatusType("error");
        }
      } catch (err) {
        setStatus("Network error. Please check your connection and try again.");
        setStatusType("error");
      } finally {
        setLoading(false);
      }
    } else {
      // No Pipedream URL - store in localStorage and show success
      try {
        // Get existing leads from localStorage
        const existingLeads = JSON.parse(localStorage.getItem('universityLeads') || '[]');
        existingLeads.push(formData);
        localStorage.setItem('universityLeads', JSON.stringify(existingLeads));
        
        setStatus("Form submitted successfully! We'll contact you soon. (Data saved locally)");
        setStatusType("success");
        
        // Reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          state: "",
          course: "",
          year: "",
          consent: false
        });
      } catch (err) {
        setStatus("Error saving form data. Please try again.");
        setStatusType("error");
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="lead-form">
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number (10-digit) *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter 10-digit phone number"
          required
          maxLength="10"
          pattern="[0-9]{10}"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="state">State *</label>
        <select
          id="state"
          name="state"
          required
          value={form.state}
          onChange={handleChange}
        >
          <option value="">Select State</option>
          {INDIAN_STATES.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="course">Course Interested *</label>
        <select
          id="course"
          name="course"
          required
          value={form.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="year">Intake Year *</label>
        <select
          id="year"
          name="year"
          required
          value={form.year}
          onChange={handleChange}
        >
          <option value="">Select Intake Year</option>
          {INTAKE_YEARS.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            name="consent"
            type="checkbox"
            checked={form.consent}
            onChange={handleChange}
            required
          />
          <span>I consent to be contacted by the university *</span>
        </label>
      </div>

      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>

      {status && (
        <div className={`status-message ${statusType}`}>
          {status}
        </div>
      )}
    </form>
  );
}
