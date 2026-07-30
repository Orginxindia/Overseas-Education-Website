import React from 'react';

export default function Partners() {
  const partners = [
    "Google Cloud",
    "Microsoft Learn",
    "Adobe Creative",
    "Coursera Org",
    "Udemy Business",
    "Deloitte Tech"
  ];

  return (
    <section style={{
      padding: '40px 0',
      backgroundColor: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '30px',
          opacity: 0.75
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '1px' }}>
            OUR TRUSTED PARTNERS
          </span>
          {partners.map((p, i) => (
            <div 
              key={i} 
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#475569',
                letterSpacing: '-0.5px'
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
