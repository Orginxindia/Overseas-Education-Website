import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      backgroundColor: '#0B1320',
      color: '#94A3B8',
      fontSize: '0.875rem',
      padding: '10px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Left Info: Contact & Address */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', color: '#E2E8F0', fontWeight: 500 }}>
          <a href="tel:+917639557272" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#E2E8F0' }}>
            <Phone size={14} color="#00C58D" />
            <span>+91 76395 57272</span>
          </a>
          
          <a href="mailto:info@lpsglobaledu.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#E2E8F0' }}>
            <Mail size={14} color="#00C58D" />
            <span>info@lpsglobaledu.com</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8' }} className="hide-mobile">
            <MapPin size={14} color="#00C58D" />
            <span>Bengaluru | Chennai | Surrey, UK | San Francisco, USA</span>
          </div>
        </div>

        {/* Right Info: Free Consultancy Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00C58D', fontWeight: 700, fontSize: '0.85rem' }}>
          <Sparkles size={14} />
          <span>FREE Overseas Education Consultancy</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
