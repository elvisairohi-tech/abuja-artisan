import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hammer, UserPlus, Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="cinematic-nav-header">
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-icon-box">
            <Hammer size={20} className="brand-hammer" />
          </div>
          <div className="brand-text-block">
            <span className="brand-title">Abuja<span className="brand-accent">Artisans</span></span>
            <span className="brand-tagline">Trusted Local Services</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu-desktop">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/find-artisans" className={`nav-link ${isActive('/find-artisans') ? 'active' : ''}`}>
            Find Artisans
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            About & Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="nav-actions-desktop">
          <Link to="/join" className="nav-join-btn">
            <UserPlus size={16} />
            <span>Join as Artisan</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/find-artisans" className={`mobile-nav-link ${isActive('/find-artisans') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            Find Artisans
          </Link>
          <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
            About & Contact
          </Link>
          <Link to="/join" className="mobile-join-btn" onClick={() => setMobileMenuOpen(false)}>
            <UserPlus size={18} /> Join as Artisan
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;