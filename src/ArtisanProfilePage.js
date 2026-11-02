import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, ShieldCheck, Star, Phone, MessageCircle, 
  Calendar, Award, CheckCircle2, ArrowLeft, Clock, Briefcase 
} from 'lucide-react';
import BookingModal from './BookingModal';

const FALLBACK_AVATAR = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop";

const ArtisanProfilePage = ({ artisans = [] }) => {
  const { id } = useParams();
  const [bookingOpen, setBookingOpen] = useState(false);

  const artisan = artisans.find((a) => String(a.id) === String(id));

  if (!artisan) {
    return (
      <div className="page-wrapper container text-center" style={{ padding: '6rem 1rem' }}>
        <h2>Artisan Profile Not Found</h2>
        <p style={{ color: '#94a3b8', margin: '1rem 0 2rem 0' }}>The requested artisan could not be found or has been relocated.</p>
        <Link to="/find-artisans" className="btn btn-primary">
          Return to Directory
        </Link>
      </div>
    );
  }

  const handleCall = () => {
    window.location.href = `tel:${artisan.phone}`;
  };

  const handleWhatsApp = () => {
    const cleanNumber = artisan.whatsapp.replace(/\D/g, '');
    const message = encodeURIComponent(`Hello ${artisan.name}, I found your profile on AbujaArtisans and need your assistance with ${artisan.trade} services.`);
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="profile-page-wrapper">
      <div className="container">
        <Link to="/find-artisans" className="back-link">
          <ArrowLeft size={16} /> Back to Directory
        </Link>

        <div className="profile-layout-grid">
          {/* Main Info Column */}
          <div className="profile-main-col">
            <div className="profile-hero-card">
              <div className="profile-avatar-wrap">
                <img 
                  src={artisan.avatar} 
                  alt={artisan.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FALLBACK_AVATAR;
                  }}
                />
              </div>

              <div className="profile-meta-info">
                <div className="meta-badge-row">
                  <span className="profile-trade-badge">{artisan.trade}</span>
                  {artisan.verified && (
                    <span className="profile-verified-badge">
                      <ShieldCheck size={14} /> Identity Verified
                    </span>
                  )}
                </div>

                <h1 className="profile-name">{artisan.name}</h1>

                <div className="profile-location">
                  <MapPin size={16} color="#10b981" />
                  <span>{artisan.area}, Abuja FCT</span>
                </div>

                <div className="profile-stats-row">
                  <div className="profile-stat">
                    <Star size={16} fill="#f59e0b" color="#f59e0b" />
                    <strong>{artisan.rating}</strong>
                    <span>({artisan.reviewsCount} verified reviews)</span>
                  </div>
                  <div className="profile-stat">
                    <Briefcase size={16} color="#34d399" />
                    <strong>{artisan.completedJobs || 120}+</strong>
                    <span>Jobs completed</span>
                  </div>
                  <div className="profile-stat">
                    <Clock size={16} color="#38bdf8" />
                    <strong>{artisan.experience || '4+ years'}</strong>
                    <span>Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About / Bio Card */}
            <div className="profile-section-card">
              <h2 className="card-section-title">About the Artisan</h2>
              <p className="profile-bio-text">{artisan.bio}</p>
            </div>

            {/* Standard Services Card */}
            <div className="profile-section-card">
              <h2 className="card-section-title">Standard Services & Pricing</h2>
              <div className="services-list">
                {artisan.services && artisan.services.length > 0 ? (
                  artisan.services.map((srv, idx) => (
                    <div key={idx} className="service-row-item">
                      <div className="service-name">
                        <CheckCircle2 size={16} color="#10b981" />
                        <span>{srv.name}</span>
                      </div>
                      <strong className="service-cost">{srv.price}</strong>
                    </div>
                  ))
                ) : (
                  <div className="service-row-item">
                    <div className="service-name">
                      <CheckCircle2 size={16} color="#10b981" />
                      <span>Standard Diagnostic & Service Inspection</span>
                    </div>
                    <strong className="service-cost">₦{artisan.basePrice.toLocaleString()}</strong>
                  </div>
                )}
              </div>
            </div>

            {/* Reviews Card */}
            <div className="profile-section-card">
              <h2 className="card-section-title">Recent Client Reviews</h2>
              <div className="reviews-list">
                {artisan.reviews && artisan.reviews.length > 0 ? (
                  artisan.reviews.map((rev, idx) => (
                    <div key={idx} className="review-item-card">
                      <div className="review-top">
                        <strong>{rev.name}</strong>
                        <div className="review-stars">
                          {[...Array(rev.rating || 5)].map((_, i) => (
                            <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                          ))}
                        </div>
                      </div>
                      <span className="review-area">{rev.area} • {rev.date}</span>
                      <p className="review-text">{rev.comment}</p>
                    </div>
                  ))
                ) : (
                  <p style={{ color: '#94a3b8' }}>No reviews yet for this artisan.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sticky Contact Sidebar */}
          <aside className="profile-action-sidebar">
            <div className="contact-action-card">
              <span className="action-card-label">Starting Diagnostic Fee</span>
              <h2 className="action-card-price">₦{artisan.basePrice.toLocaleString()}</h2>
              <p className="action-card-note">Pay directly to the artisan upon service inspection.</p>

              <div className="action-buttons-stack">
                <button onClick={handleCall} className="action-btn btn-call">
                  <Phone size={18} />
                  <span>Call {artisan.phone}</span>
                </button>

                <button onClick={handleWhatsApp} className="action-btn btn-whatsapp">
                  <MessageCircle size={18} />
                  <span>Message on WhatsApp</span>
                </button>

                <button onClick={() => setBookingOpen(true)} className="action-btn btn-book">
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </button>
              </div>

              <div className="safety-box">
                <ShieldCheck size={20} color="#10b981" />
                <div>
                  <strong>AbujaArtisans Safety Guarantee</strong>
                  <p>Never pay full job costs upfront. Inspect all completed work before finalizing payments.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {bookingOpen && (
        <BookingModal 
          artisan={artisan} 
          onClose={() => setBookingOpen(false)} 
        />
      )}
    </div>
  );
};

export default ArtisanProfilePage;