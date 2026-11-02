import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Search, MapPin, Wrench, ShieldCheck, Star, 
  ArrowRight, Phone, CheckCircle2, Award, Zap, Sparkles 
} from 'lucide-react';
import { ABUJA_AREAS, TRADES } from './artisansData';

const FALLBACK_AVATAR = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop";

const HomePage = ({ artisans = [] }) => {
  const navigate = useNavigate();
  const [selectedTrade, setSelectedTrade] = useState('All Trades');
  const [selectedArea, setSelectedArea] = useState('All Areas');
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/find-artisans?trade=${encodeURIComponent(selectedTrade)}&area=${encodeURIComponent(selectedArea)}&q=${encodeURIComponent(keyword)}`);
  };

  const tradeCategories = [
    { name: "Plumber", icon: "🔧", count: "420+ Pros", tag: "Emergency Available" },
    { name: "Electrician", icon: "⚡", count: "510+ Pros", tag: "Certified" },
    { name: "AC Technician", icon: "❄️", count: "330+ Pros", tag: "Fast Response" },
    { name: "Painter", icon: "🎨", count: "280+ Pros", tag: "Interior & Exterior" },
    { name: "Carpenter", icon: "🪚", count: "310+ Pros", tag: "Cabinetry & Doors" },
    { name: "Auto Mechanic", icon: "🚗", count: "240+ Pros", tag: "Diagnostics" },
    { name: "POP Installer", icon: "🏛️", count: "190+ Pros", tag: "Modern Ceilings" },
    { name: "Tailor", icon: "✂️", count: "370+ Pros", tag: "Bespoke & Native" },
  ];

  const featured = artisans.slice(0, 4);

  return (
    <div className="home-cinematic">
      {/* Cinematic Hero */}
      <section className="cinematic-hero">
        <div className="hero-backdrop-overlay"></div>
        <div className="hero-glow-orb hero-glow-1"></div>
        <div className="hero-glow-orb hero-glow-2"></div>

        <div className="container hero-inner">
          <div className="hero-badge">
            <Sparkles size={14} className="badge-spark" />
            <span>Abuja's Verified Artisan Network</span>
          </div>

          <h1 className="hero-headline">
            Elite Craftsmanship.<br />
            Right at Your <span className="headline-gradient">Doorstep.</span>
          </h1>

          <p className="hero-subtext">
            Skip the guesswork. Connect directly with over 3,000 background-checked 
            plumbers, electricians, and technicians across Maitama, Gwarinpa, Wuse, and beyond.
          </p>

          {/* Floating Glassmorphic Search Bar */}
          <form className="cinematic-search-bar" onSubmit={handleSearch}>
            <div className="search-input-group">
              <Search className="field-icon" size={20} />
              <input
                type="text"
                placeholder="What service do you need today? (e.g. leaking pipe, AC gas)..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            <div className="search-dropdown-group">
              <Wrench className="field-icon" size={18} />
              <select value={selectedTrade} onChange={(e) => setSelectedTrade(e.target.value)}>
                {TRADES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="search-dropdown-group">
              <MapPin className="field-icon" size={18} />
              <select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
                {ABUJA_AREAS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="hero-cta-btn">
              <span>Find Artisan</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Quick Stat Badges */}
          <div className="hero-stats-strip">
            <div className="stat-item">
              <strong>3,000+</strong>
              <span>Verified Artisans</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <strong>18</strong>
              <span>Abuja Districts</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <strong>4.8 ★</strong>
              <span>Average Rating</span>
            </div>
            <div className="stat-separator"></div>
            <div className="stat-item">
              <strong>100%</strong>
              <span>Direct Contacts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Trade Grid */}
      <section className="trades-section container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Services On Demand</span>
          <h2 className="section-title">Explore Popular Trades</h2>
          <p className="section-desc">Handpicked master craftsmen ready to handle commercial and home projects.</p>
        </div>

        <div className="trades-grid">
          {tradeCategories.map((trade, idx) => (
            <div 
              key={idx} 
              className="trade-card"
              onClick={() => navigate(`/find-artisans?trade=${encodeURIComponent(trade.name)}`)}
            >
              <div className="trade-card-top">
                <span className="trade-icon">{trade.icon}</span>
                <span className="trade-tag">{trade.tag}</span>
              </div>
              <h3 className="trade-name">{trade.name}</h3>
              <p className="trade-count">{trade.count}</p>
              <div className="trade-hover-arrow">
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Artisans Gallery */}
      <section className="featured-section">
        <div className="container">
          <div className="section-title-wrap between">
            <div>
              <span className="section-eyebrow">Top Performers</span>
              <h2 className="section-title">Featured Masters of the Trade</h2>
              <p className="section-desc">Highly requested, verified professionals with 5-star ratings.</p>
            </div>
            <Link to="/find-artisans" className="view-all-button">
              View All 3,000 Artisans <ArrowRight size={16} />
            </Link>
          </div>

          <div className="featured-grid">
            {featured.map((artisan) => (
              <div key={artisan.id} className="cinematic-artisan-card">
                <div className="card-image-wrap">
                  <img 
                    src={artisan.avatar} 
                    alt={artisan.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = FALLBACK_AVATAR;
                    }}
                  />
                  {artisan.verified && (
                    <div className="verified-pill">
                      <ShieldCheck size={14} /> Verified
                    </div>
                  )}
                  <div className="rating-pill">
                    <Star size={13} fill="#f59e0b" color="#f59e0b" />
                    <span>{artisan.rating}</span>
                    <span className="reviews-num">({artisan.reviewsCount})</span>
                  </div>
                </div>

                <div className="card-details">
                  <span className="artisan-trade-label">{artisan.trade}</span>
                  <h3 className="artisan-full-name">{artisan.name}</h3>
                  <div className="artisan-location-row">
                    <MapPin size={14} />
                    <span>{artisan.area}, Abuja</span>
                  </div>

                  <p className="artisan-brief">{artisan.bio}</p>

                  <div className="card-action-bar">
                    <div className="fee-box">
                      <span className="fee-label">Starting fee</span>
                      <strong className="fee-amount">₦{artisan.basePrice.toLocaleString()}</strong>
                    </div>

                    <Link to={`/artisan/${artisan.id}`} className="card-profile-btn">
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - High-End Minimalist */}
      <section className="how-it-works-section container">
        <div className="section-title-wrap">
          <span className="section-eyebrow">Simple & Transparent</span>
          <h2 className="section-title">How AbujaArtisans Works</h2>
        </div>

        <div className="steps-container">
          <div className="step-box">
            <div className="step-badge">01</div>
            <div className="step-icon-wrap"><Search size={24} /></div>
            <h3>Filter & Discover</h3>
            <p>Filter by trade and your exact Abuja district (Gwarinpa, Wuse II, Apo, Maitama).</p>
          </div>

          <div className="step-connector"></div>

          <div className="step-box">
            <div className="step-badge">02</div>
            <div className="step-icon-wrap"><Award size={24} /></div>
            <h3>Review Credentials</h3>
            <p>Inspect verified badges, client reviews, transparent base pricing, and previous jobs.</p>
          </div>

          <div className="step-connector"></div>

          <div className="step-box">
            <div className="step-badge">03</div>
            <div className="step-icon-wrap"><Zap size={24} /></div>
            <h3>Direct Contact</h3>
            <p>Call or WhatsApp the artisan directly. No middleman markups or booking delays.</p>
          </div>
        </div>
      </section>

      {/* Cinematic Join Banner */}
      <section className="container">
        <div className="cinematic-cta-banner">
          <div className="cta-left">
            <span className="cta-kicker">For Skilled Professionals</span>
            <h2>Are You a Master Craftsman in Abuja?</h2>
            <p>Join over 3,000 artisans getting direct calls from homeowners, estate managers, and corporate offices daily.</p>
            <div className="cta-perks">
              <span><CheckCircle2 size={16} /> Free Profile Listing</span>
              <span><CheckCircle2 size={16} /> Keep 100% of Your Earnings</span>
              <span><CheckCircle2 size={16} /> Verification Badge</span>
            </div>
          </div>
          <div className="cta-right">
            <Link to="/join" className="cta-gold-btn">
              Join as an Artisan Today
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;