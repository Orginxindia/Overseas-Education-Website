import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Send, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" style={{
      backgroundColor: '#0B1320',
      color: '#94A3B8',
      paddingTop: '80px',
      paddingBottom: '30px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 2fr',
          gap: '40px',
          marginBottom: '60px'
        }} className="footer-grid">

          {/* Col 1: Brand Info */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00C58D 0%, #00996D 100%)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center'
              }}>
                <GraduationCap size={26} color="#FFFFFF" />
              </div>
              <span style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif'
              }}>
                LPS Global <span style={{ color: '#00C58D' }}>Edu</span>
              </span>
            </Link>

            <p style={{ lineHeight: 1.7, marginBottom: '20px', fontSize: '0.95rem' }}>
              LP Saravanaa Educational Consultants Pvt Ltd is one of the premier overseas education consultancies with 10+ years of proven student placement records across 50+ countries.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} color="#00C58D" />
                <span>+91 76395 57272</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} color="#00C58D" />
                <span>info@lpsglobaledu.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800, marginBottom: '24px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/destinations">Study Destinations</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Study Abroad */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800, marginBottom: '24px' }}>
              Destinations
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <li><Link to="/destinations">Study in USA</Link></li>
              <li><Link to="/destinations">Study in UK</Link></li>
              <li><Link to="/destinations">Study in Australia</Link></li>
              <li><Link to="/destinations">Study in Canada</Link></li>
              <li><Link to="/destinations">Study in Germany</Link></li>
              <li><Link to="/destinations">Study in Singapore</Link></li>
            </ul>
          </div>

          {/* Col 4: Branch Offices */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 800, marginBottom: '20px' }}>
              Head Office & Branches
            </h4>
            
            <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#E2E8F0', marginBottom: '14px' }}>
              <strong style={{ color: '#00C58D' }}>Head Office:</strong> 62/63, WeWork The Pavilion, Church Street, M.G.Road, Bengaluru – 560 001, Karnataka, India.
            </p>

            <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '10px' }}>
              <strong style={{ color: '#FFFFFF' }}>Domestic Branches:</strong> Chennai | Coimbatore | Tirunelveli | Madurai | Erode
            </div>

            <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
              <strong style={{ color: '#FFFFFF' }}>Overseas Branches:</strong> Johannesburg (South Africa) | Surrey (UK) | San Francisco (USA)
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem'
        }}>
          <div>
            Copyright © 2026 <strong style={{ color: '#00C58D' }}>LPS Global Education</strong> (LP Saravanaa Educational Consultants Pvt Ltd). All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <a href="https://wa.me/917639557272" target="_blank" rel="noreferrer" style={{ color: '#00C58D', fontWeight: 700 }}>
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
