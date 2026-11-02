import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Search, MapPin, Filter, Star, ShieldCheck, 
  RotateCcw, ChevronLeft, ChevronRight, Phone 
} from 'lucide-react';
import { ABUJA_AREAS, TRADES } from './artisansData';

const FALLBACK_AVATAR = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=400&w=400&fit=crop";

const FindArtisansPage = ({ artisans = [] }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const initialTrade = searchParams.get('trade') || 'All Trades';
  const initialArea = searchParams.get('area') || 'All Areas';
  const initialQ = searchParams.get('q') || '';

  const [tradeFilter, setTradeFilter] = useState(initialTrade);
  const [areaFilter, setAreaFilter] = useState(initialArea);
  const [searchQuery, setSearchQuery] = useState(initialQ);
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredArtisans = useMemo(() => {
    return artisans.filter((artisan) => {
      const matchTrade = tradeFilter === 'All Trades' || artisan.trade.toLowerCase() === tradeFilter.toLowerCase();
      const matchArea = areaFilter === 'All Areas' || artisan.area.toLowerCase() === areaFilter.toLowerCase();
      const matchVerified = !onlyVerified || artisan.verified;
      const matchQuery = !searchQuery || 
        artisan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artisan.trade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artisan.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (artisan.bio && artisan.bio.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchTrade && matchArea && matchVerified && matchQuery;
    });
  }, [artisans, tradeFilter, areaFilter, onlyVerified, searchQuery]);

  const totalPages = Math.ceil(filteredArtisans.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArtisans = filteredArtisans.slice(startIndex, startIndex + itemsPerPage);

  const resetFilters = () => {
    setTradeFilter('All Trades');
    setAreaFilter('All Areas');
    setSearchQuery('');
    setOnlyVerified(false);
    setCurrentPage(1);
  };

  return (
    <div className="directory-page-wrapper">
      <div className="container">
        {/* Page Header */}
        <div className="directory-header">
          <span className="section-eyebrow">Abuja Verified Registry</span>
          <h1 className="directory-title">Find Trusted Artisans in Abuja</h1>
          <p className="directory-subtitle">
            Browse verified, skilled professionals across all 18 FCT districts.
          </p>
        </div>

        {/* Directory Layout: Sidebar + Grid */}
        <div className="directory-layout">
          {/* Filters Sidebar */}
          <aside className="filters-sidebar">
            <div className="filter-header-row">
              <div className="filter-heading-text">
                <Filter size={18} />
                <span>Filters</span>
              </div>
              <button onClick={resetFilters} className="reset-btn">
                <RotateCcw size={14} /> Reset
              </button>
            </div>

            <div className="filter-group">
              <label className="filter-label">Search Keyword</label>
              <div className="filter-input-wrap">
                <Search size={16} className="filter-icon" />
                <input
                  type="text"
                  placeholder="Name, trade, skill..."
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                />
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Trade / Specialty</label>
              <select 
                value={tradeFilter} 
                onChange={(e) => { setTradeFilter(e.target.value); setCurrentPage(1); }}
                className="filter-select"
              >
                {TRADES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Abuja District / Area</label>
              <select 
                value={areaFilter} 
                onChange={(e) => { setAreaFilter(e.target.value); setCurrentPage(1); }}
                className="filter-select"
              >
                {ABUJA_AREAS.map((a) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

            <div className="filter-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={onlyVerified}
                  onChange={(e) => { setOnlyVerified(e.target.checked); setCurrentPage(1); }}
                />
                <span>Verified Profiles Only</span>
              </label>
            </div>

            <div className="sidebar-stat-card">
              <span className="stat-label">Total Matches</span>
              <strong className="stat-number">{filteredArtisans.length}</strong>
              <span className="stat-note">Available pros in database</span>
            </div>
          </aside>

          {/* Results Main Content */}
          <main className="directory-results">
            <div className="results-top-bar">
              <p className="results-count">
                Showing <strong>{filteredArtisans.length > 0 ? startIndex + 1 : 0} - {Math.min(startIndex + itemsPerPage, filteredArtisans.length)}</strong> of <strong>{filteredArtisans.length}</strong> available artisans
              </p>
            </div>

            {currentArtisans.length === 0 ? (
              <div className="no-results-card">
                <h3>No Artisans Found</h3>
                <p>Try resetting filters or searching a different district/trade.</p>
                <button onClick={resetFilters} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="directory-grid">
                {currentArtisans.map((artisan) => (
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
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pagination-wrapper">
                <button 
                  className="page-nav-btn"
                  disabled={currentPage === 1}
                  onClick={() => { setCurrentPage(p => p - 1); window.scrollTo({ top: 100, behavior: 'smooth' }); }}
                >
                  <ChevronLeft size={16} /> Previous
                </button>

                <span className="pagination-indicator">
                  Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
                </span>

                <button 
                  className="page-nav-btn"
                  disabled={currentPage === totalPages}
                  onClick={() => { setCurrentPage(p => p + 1); window.scrollTo({ top: 100, behavior: 'smooth' }); }}
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindArtisansPage;