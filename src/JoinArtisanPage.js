import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, CheckCircle, ShieldCheck } from 'lucide-react';
import { ABUJA_AREAS, TRADES } from './artisansData';

const JoinArtisanPage = ({ onRegisterArtisan }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    trade: TRADES.filter(t => t !== 'All Trades')[0] || 'Plumber',
    area: ABUJA_AREAS.filter(a => a !== 'All Areas')[0] || 'Gwarinpa',
    phone: '',
    whatsapp: '',
    basePrice: '',
    experience: '',
    bio: '',
    photoFile: null
  });

  const [previewUrl, setPreviewUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Convert uploaded local photo file to a previewable Data URL
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setFormData(prev => ({ ...prev, photoFile: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArtisan = {
      id: Date.now(),
      name: formData.name,
      trade: formData.trade,
      area: formData.area,
      rating: 5.0,
      reviewsCount: 1,
      basePrice: Number(formData.basePrice) || 5000,
      phone: formData.phone,
      whatsapp: formData.whatsapp || formData.phone.replace('+', ''),
      verified: false,
      avatar: previewUrl || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: formData.bio || `Certified ${formData.trade} serving ${formData.area} and surrounding Abuja districts.`,
      experience: formData.experience || '3 years',
      completedJobs: 0,
      services: [
        { name: `Standard ${formData.trade} Consultation & Service`, price: `₦${Number(formData.basePrice || 5000).toLocaleString()}` }
      ],
      reviews: [
        { name: "Verified Client", area: formData.area, rating: 5, date: "Recently", comment: "Profile registered on AbujaArtisans." }
      ]
    };

    if (onRegisterArtisan) {
      onRegisterArtisan(newArtisan);
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-wrapper container section-padding text-center">
        <div style={{ maxWidth: '550px', margin: '0 auto', padding: '3rem 2rem', background: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <CheckCircle size={64} color="#059669" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2>Application Submitted Successfully!</h2>
          <p style={{ color: '#64748b', margin: '1rem 0 2rem 0' }}>
            Welcome to AbujaArtisans. Your profile has been created and submitted for verification badge review.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/find-artisans')}>
            View in Directory
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper container section-padding">
      <div style={{ maxWidth: '700px', margin: '0 auto', background: '#ffffff', padding: '2.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1>Join as an Artisan</h1>
          <p style={{ color: '#64748b' }}>Showcase your skills to thousands of verified clients across Abuja[span_1](start_span)[span_1](end_span).</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Picture Upload Area */}
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label" style={{ fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              Profile Photo (Upload from Phone or Computer)
            </label>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              padding: '1.25rem',
              border: '2px dashed #cbd5e1',
              borderRadius: '8px',
              backgroundColor: '#f8fafc'
            }}>
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Uploaded Preview"
                  style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #059669' }}
                />
              ) : (
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <UploadCloud size={32} color="#64748b" />
                </div>
              )}

              <div>
                <input
                  type="file"
                  id="artisan-photo"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor="artisan-photo"
                  className="btn btn-outline btn-sm"
                  style={{ cursor: 'pointer', display: 'inline-block', marginBottom: '0.4rem' }}
                >
                  Choose Picture
                </label>
                <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>
                  PNG, JPG or JPEG up to 5MB.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Aliyu Garba"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="form-label">Primary Trade</label>
              <select name="trade" className="form-input" value={formData.trade} onChange={handleChange}>
                {TRADES.filter(t => t !== 'All Trades').map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label className="form-label">Abuja District / Area</label>
              <select name="area" className="form-input" value={formData.area} onChange={handleChange}>
                {ABUJA_AREAS.filter(a => a !== 'All Areas').map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label">Starting Fee (₦)</label>
              <input
                type="number"
                name="basePrice"
                required
                placeholder="e.g. 5000"
                className="form-input"
                value={formData.basePrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. +2348012345678"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="form-label">Years of Experience</label>
              <input
                type="text"
                name="experience"
                placeholder="e.g. 6 years"
                className="form-input"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Bio & Past Work Description</label>
            <textarea
              name="bio"
              rows={4}
              placeholder="Describe your skills, tools, and the kind of jobs you specialize in..."
              className="form-input"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
            <ShieldCheck size={18} /> Register Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinArtisanPage;