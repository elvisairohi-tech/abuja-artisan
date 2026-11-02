import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, ShieldCheck, MapPin, Phone, Mail, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="cinematic-footer">
      <div className="container footer-top-grid">
        {/* Column 1: Brand Info & Credit */}
        <div className="footer-col brand-col">
          <Link to="/" className="nav-brand">
            <div className="brand-icon-box">
              <Hammer size={20} className="brand-hammer" />
            </div>
            <div className="brand-text-block">
              <span className="brand-title">Abuja<span className="brand-accent">Artisans</span></span>
              <span className="brand-tagline">Trusted Local Services</span>
            </div>
          </Link>

          <p className="footer-mission">
            Connecting Abuja residents with verified, vetted, and trusted local artisans across every district in the FCT.
          </p>

          <div className="developer-badge">
            <ShieldCheck size={16} className="dev-badge-icon" />
            <span>Built by <strong>Elvis Ohis Airohi</strong> (Front-End Development)</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/"><ArrowUpRight size={14} /> Home</Link></li>
            <li><Link to="/find-artisans"><ArrowUpRight size={14} /> Find Artisans in Abuja</Link></li>
            <li><Link to="/join"><ArrowUpRight size={14} /> Register as an Artisan</Link></li>
            <li><Link to="/about"><ArrowUpRight size={14} /> About & Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Top Districts */}
        <div className="footer-col">
          <h4 className="footer-heading">Top Abuja Areas</h4>
          <ul className="footer-links">
            <li><Link to="/find-artisans?area=Gwarinpa">Gwarinpa Estate</Link></li>
            <li><Link to="/find-artisans?area=Wuse II">Wuse II & Zone 1-6</Link></li>
            <li><Link to="/find-artisans?area=Maitama">Maitama District</Link></li>
            <li><Link to="/find-artisans?area=Apo">Apo & Resettlement</Link></li>
            <li><Link to="/find-artisans?area=Lugbe">Lugbe Airport Road</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Support */}
        <div className="footer-col">
          <h4 className="footer-heading">Support & Info</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>Federal Capital Territory, Abuja, Nigeria</span>
            </li>
            <li>
              <Phone size={16} className="contact-icon" />
              <span>+234 814 868 0782</span>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <span>help@abujaartisans.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-inner">
          <p>© 2026 AbujaArtisans. All rights reserved.</p>
          <p className="credit-text">
            Engineered with pride in Abuja, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;