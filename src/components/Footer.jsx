import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor:'#0B1320', color:'#94A3B8',
      paddingTop:'64px', paddingBottom:'28px',
      borderTop:'1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container">

        {/* 4-col grid */}
        <div className="footer-grid" style={{ marginBottom:'52px' }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'18px' }}>
              <div style={{
                width:'40px', height:'40px', borderRadius:'11px', flexShrink:0,
                background:'linear-gradient(135deg,#00C58D,#00996D)',
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <GraduationCap size={22} color="#FFF" />
              </div>
              <span style={{ fontSize:'1.6rem', fontWeight:800, color:'#FFF', fontFamily:'Outfit,sans-serif' }}>
                LPS Global <span style={{ color:'#00C58D' }}>Edu</span>
              </span>
            </Link>
            <p style={{ lineHeight:1.7, marginBottom:'18px', fontSize:'0.9rem' }}>
              LP Saravanaa Educational Consultants Pvt Ltd — premier overseas education consultancy with 10+ years of proven placement records across 50+ countries.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:'8px', fontSize:'0.88rem', color:'#E2E8F0' }}>
              <a href="tel:+917639557272" style={{ display:'flex', alignItems:'center', gap:'8px', color:'#E2E8F0' }}>
                <Phone size={13} color="#00C58D" /> +91 76395 57272
              </a>
              <a href="mailto:info@lpsglobaledu.com" style={{ display:'flex', alignItems:'center', gap:'8px', color:'#E2E8F0' }}>
                <Mail size={13} color="#00C58D" /> info@lpsglobaledu.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color:'#FFF', fontSize:'1rem', fontWeight:800, marginBottom:'20px' }}>Navigation</h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'11px', fontSize:'0.9rem' }}>
              {[
                { label:'Home',              path:'/'               },
                { label:'About Us',          path:'/about-us'       },
                { label:'Study Destinations',path:'/destinations'   },
                { label:'Services',          path:'/services'       },
                { label:'Contact Us',        path:'/contact'        },
                { label:'Free Counseling',   path:'/free-counseling'},
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} style={{ color:'#94A3B8', transition:'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#00C58D'}
                    onMouseLeave={e => e.currentTarget.style.color='#94A3B8'}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 style={{ color:'#FFF', fontSize:'1rem', fontWeight:800, marginBottom:'20px' }}>Destinations</h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'11px', fontSize:'0.9rem' }}>
              {['USA','Australia','Canada','UK','Germany','Singapore','New Zealand'].map(c => (
                <li key={c}>
                  <Link to={`/study-in-${c.toLowerCase().replace(' ','-')}`}
                    style={{ color:'#94A3B8', transition:'color 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.color='#00C58D'}
                    onMouseLeave={e => e.currentTarget.style.color='#94A3B8'}>
                    Study in {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 style={{ color:'#FFF', fontSize:'1rem', fontWeight:800, marginBottom:'18px' }}>
              Head Office & Branches
            </h4>
            <p style={{ fontSize:'0.83rem', lineHeight:1.55, color:'#E2E8F0', marginBottom:'14px' }}>
              <strong style={{ color:'#00C58D' }}>Head Office:</strong> 62/63, WeWork The Pavilion, Church Street, M.G. Road, Bengaluru – 560 001, Karnataka, India.
            </p>
            <div style={{ fontSize:'0.78rem', color:'#94A3B8', marginBottom:'10px' }}>
              <strong style={{ color:'#FFF' }}>Domestic:</strong> Chennai | Coimbatore | Tirunelveli | Madurai | Erode
            </div>
            <div style={{ fontSize:'0.78rem', color:'#94A3B8' }}>
              <strong style={{ color:'#FFF' }}>Overseas:</strong> Johannesburg (SA) | Surrey (UK) | San Francisco (USA)
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/917639557272" target="_blank" rel="noreferrer"
              style={{
                display:'inline-flex', alignItems:'center', gap:'8px',
                marginTop:'20px', backgroundColor:'#25D366',
                color:'#FFF', fontFamily:'Outfit,sans-serif', fontWeight:700,
                padding:'10px 20px', borderRadius:'999px', fontSize:'0.85rem',
              }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:'22px',
          display:'flex', justifyContent:'space-between', alignItems:'center',
          flexWrap:'wrap', gap:'12px', fontSize:'0.82rem',
        }}>
          <div>
            Copyright © 2026 <strong style={{ color:'#00C58D' }}>LPS Global Education</strong>. All Rights Reserved.
          </div>
          <div style={{ display:'flex', gap:'18px', flexWrap:'wrap' }}>
            <Link to="/about-us" style={{ color:'#94A3B8' }}
              onMouseEnter={e => e.currentTarget.style.color='#00C58D'}
              onMouseLeave={e => e.currentTarget.style.color='#94A3B8'}>About</Link>
            <Link to="/contact" style={{ color:'#94A3B8' }}
              onMouseEnter={e => e.currentTarget.style.color='#00C58D'}
              onMouseLeave={e => e.currentTarget.style.color='#94A3B8'}>Contact</Link>
            <Link to="/privacy-policy" style={{ color:'#94A3B8' }}
              onMouseEnter={e => e.currentTarget.style.color='#00C58D'}
              onMouseLeave={e => e.currentTarget.style.color='#94A3B8'}>Privacy Policy</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.8fr;
          gap: 36px;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 580px) {
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </footer>
  );
}
