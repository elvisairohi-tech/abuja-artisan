import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';

const BookingModal = ({ artisan, onClose }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    address: '',
    date: '',
    time: 'Morning (8AM - 12PM)',
    details: ''
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="modal-backdrop">
      <div className="cinematic-modal-card">
        <button className="modal-close-icon" onClick={onClose}>
          <X size={20} />
        </button>

        {confirmed ? (
          <div className="modal-success-wrap">
            <CheckCircle size={56} color="#10b981" style={{ margin: '0 auto 1.5rem auto' }} />
            <h2>Appointment Request Sent!</h2>
            <p>
              Your booking details have been dispatched to <strong>{artisan.name}</strong>. They will contact you shortly on <strong>{formData.phone}</strong> to confirm the exact time and diagnostic fee.
            </p>
            <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '2rem', width: '100%' }}>
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <h2>Book an Appointment</h2>
              <p>Schedule a diagnostic visit with <strong>{artisan.name}</strong> ({artisan.trade}).</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-form-group">
                <label>Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ibrahim Danladi"
                  className="form-input"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                />
              </div>

              <div className="modal-form-group">
                <label>Your Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 08012345678"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="modal-form-group">
                <label>Your Exact Address (House / Estate in Abuja)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Flat 4, 3rd Avenue, Gwarinpa"
                  className="form-input"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="modal-form-group">
                  <label>Preferred Date</label>
                  <input
                    type="date"
                    required
                    className="form-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="modal-form-group">
                  <label>Time Slot</label>
                  <select 
                    className="form-input"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                    <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                    <option value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>

              <div className="modal-form-group">
                <label>Job Description / Fault Details</label>
                <textarea
                  rows={3}
                  placeholder="Describe the issue (e.g. leaking overhead tank pipe)..."
                  className="form-input"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                Confirm Appointment Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;