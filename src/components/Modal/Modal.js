import React from "react";

// Local fees data
const FEES_DATA = {
  "1": {
    university: "LPU Private University",
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
  },
  "2": {
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
  }
};

export default function Modal({ universityId, onClose }) {
  const feesData = FEES_DATA[universityId];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Course-wise Fees</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        {feesData && (
          <div className="fees-content">
            <p className="university-name">{feesData.university}</p>
            <div className="fees-list">
              {Object.entries(feesData.fees).map(([course, feeInfo]) => (
                <div key={course} className="fee-item">
                  <div className="fee-header">
                    <h4>{course}</h4>
                    <span className="fee-annual">{feeInfo.annual} per year</span>
                  </div>
                  <div className="fee-total">Total: {feeInfo.total}</div>
                  <div className="fee-breakdown">
                    <div className="breakdown-item">
                      <span>Tuition:</span>
                      <span>{feeInfo.breakdown.tuition}</span>
                    </div>
                    <div className="breakdown-item">
                      <span>Hostel:</span>
                      <span>{feeInfo.breakdown.hostel}</span>
                    </div>
                    <div className="breakdown-item">
                      <span>Other:</span>
                      <span>{feeInfo.breakdown.other}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
