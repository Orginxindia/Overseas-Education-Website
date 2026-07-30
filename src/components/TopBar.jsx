import React from 'react';
import { Phone, Mail, Sparkles } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      backgroundColor: '#0B1320',
      color: '#94A3B8',
      fontSize: '0.8rem',
      padding: '9px 0',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        {/* Left: phone + email */}
        <div style={{ display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap' }}>
          <a href="tel:+917639557272" style={{
            display:'flex', alignItems:'center', gap:'5px',
            color:'#E2E8F0', fontWeight:500, whiteSpace:'nowrap',
          }}>
            <Phone size={13} color="#00C58D" />
            <span>+91 76395 57272</span>
          </a>
          <a href="mailto:info@lpsglobaledu.com" className="hide-on-mobile" style={{
            display:'flex', alignItems:'center', gap:'5px',
            color:'#E2E8F0', fontWeight:500,
          }}>
            <Mail size={13} color="#00C58D" />
            <span>info@lpsglobaledu.com</span>
          </a>
        </div>

        {/* Right: FREE consultancy tag */}
        <div style={{
          display:'flex', alignItems:'center', gap:'6px',
          color:'#00C58D', fontWeight:700, fontSize:'0.78rem', whiteSpace:'nowrap',
        }}>
          <Sparkles size={13} />
          <span className="hide-on-mobile">FREE Overseas Education Consultancy</span>
          <span className="show-on-mobile" style={{ display:'none' }}>FREE Consultancy</span>
        </div>
      </div>
    </div>
  );
}
