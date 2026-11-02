import React, { useState } from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle2, MessageSquare } from 'lucide-react';

const AboutContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper container section-padding">
      {/* Hero Header */}
      <div className="section-title-wrap" style={{ marginTop: '2rem' }}>
        <span className="section-eyebrow">Direct FCT Artisan Network</span>
        <h1 className="section-title">About AbujaArtisans</h1>
        <p className="section-desc">
          Empowering Abuja homeowners and commercial businesses with trusted, background-checked craftsmen across all 18 local districts.
        </p>
      </div>

      {/* Grid: Story + Contact Form */}
      <div className="about-contact-grid">
        {/* Left: About Mission & Credentials */}
        <div className="about-details-card">
          <h2>Our Core Mission</h2>
          <p>
            Finding dependable, honest, and technically proficient artisans in Abuja has traditionally relied on unverified word-of-mouth. AbujaArtisans bridges this gap by offering a transparent directory featuring verified phone numbers, direct WhatsApp connectivity, transparent starting diagnostic fees, and genuine client ratings.
          </p>

          <div className="pillar-list">
            <div className="pillar-item">
              <ShieldCheck className="pillar-icon" size={24} />
              <div>
                <strong>Zero Commission Markup</strong>
                <p>Clients pay craftsmen directly without middleman cuts, ensuring fair compensation and honest quotes.</p>
              </div>
            </div>

            <div className="pillar-item">
              <Award className="pillar-icon" size={24} />
              <div>
                <strong>District-Centric Logistics</strong>
                <p>Filter pros stationed right in your neighborhood—from Maitama and Apo to Gwarinpa and Kubwa—ensuring fast dispatch times.</p>
              </div>
            </div>
          </div>

          <div className="contact-info-strip">
            <div className="info-row">
              <MapPin size={18} color="#10b981" />
              <span>Area 3 Garki / Apo Resettlement, Abuja FCT, Nigeria</span>
            </div>
            <div className="info-row">
              <Phone size={18} color="#10b981" />
              <span>+234 814 868 0782</span>
            </div>
            <div className="info-row">
              <Mail size={18} color="#10b981" />
              <span>support@abujaartisans.com</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-card">
          <h2>Send Us an Inquiry</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
            Have a question, feedback, or need enterprise artisan vetting? Drop our support team a note.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 1rem auto' }} />
              <h3>Message Received</h3>
              <p style={{ color: '#94a3b8' }}>Thank you for reaching out. We will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Full Name</label>
                <input type="text" required placeholder="e.g. Fatima Bello" className="form-input" />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Email or Phone Number</label>
                <input type="text" required placeholder="e.g. 08123456789 or mail@domain.com" className="form-input" />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Subject</label>
                <input type="text" required placeholder="e.g. Corporate Artisan Partnership" className="form-input" />
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">Message</label>
                <textarea rows={4} required placeholder="Your message here..." className="form-input" />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                <MessageSquare size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutContactPage;