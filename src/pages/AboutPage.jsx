import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Globe, Building2, MapPin, Award, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const domesticBranches = ['Chennai','Coimbatore','Tirunelveli','Madurai','Erode','Bengaluru (HQ)'];
  const overseasBranches = ['Johannesburg, South Africa','Surrey, United Kingdom','San Francisco, USA'];

  return (
    <div style={{ backgroundColor:'#FFFFFF', paddingBottom:'80px' }}>

      {/* ── Header ── */}
      <div style={{
        background:'linear-gradient(135deg,#F0FAF7 0%,#EBF5FF 100%)',
        padding:'56px 0 48px', textAlign:'center', marginBottom:'0',
      }}>
        <div className="container">
          <div className="section-subtitle">ABOUT LP SARAVANAA EDUCATIONAL CONSULTANTS</div>
          <h1 style={{
            fontFamily:'Outfit,sans-serif',
            fontSize:'clamp(1.8rem,4.5vw,3rem)',
            fontWeight:800, color:'#0F172A', margin:'0 auto 16px',
            maxWidth:'700px', lineHeight:1.15,
          }}>
            Your Gateway to World-Class Overseas Education
          </h1>
          <p style={{ color:'#64748B', maxWidth:'640px', margin:'0 auto', fontSize:'clamp(0.9rem,2vw,1.05rem)', lineHeight:1.75 }}>
            LP Saravanaa Educational Consultants Pvt Ltd (LPS Global Education) is a premier ISO-aligned overseas education consultancy with over 10 years of student counseling experience.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'60px' }}>

        {/* 2-col banner */}
        <div className="about-hero-grid" style={{ marginBottom:'64px' }}>

          {/* Image side */}
          <div style={{ position:'relative' }}>
            <div style={{
              borderRadius:'24px', overflow:'hidden',
              boxShadow:'0 20px 48px rgba(0,0,0,0.10)',
              backgroundColor:'#F8FAFC', padding:'10px',
            }}>
              <img src="/about_students.png" alt="LPS Global Edu Team"
                style={{ width:'100%', height:'auto', borderRadius:'18px', display:'block' }} />
            </div>
            <div style={{
              position:'absolute', bottom:'-20px', right:'-10px',
              backgroundColor:'#00C58D', color:'#FFF',
              padding:'16px 22px', borderRadius:'18px',
              boxShadow:'0 14px 30px rgba(0,197,141,0.35)',
              display:'flex', alignItems:'center', gap:'12px',
            }} className="about-badge">
              <Award size={28} />
              <div>
                <div style={{ fontSize:'1.35rem', fontWeight:800, lineHeight:1 }}>10+ Years</div>
                <div style={{ fontSize:'0.8rem', opacity:0.9 }}>Excellence & Trust</div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div style={{ paddingTop:'8px' }}>
            <h2 style={{
              fontFamily:'Outfit,sans-serif',
              fontSize:'clamp(1.5rem,3vw,2.2rem)',
              fontWeight:800, color:'#0F172A', marginBottom:'16px', lineHeight:1.25,
            }}>
              Application to Admission @ Your Door Step
            </h2>
            <p style={{ color:'#475569', fontSize:'clamp(0.9rem,2vw,1.02rem)', lineHeight:1.8, marginBottom:'24px' }}>
              At LPS Global Edu, we simplify the journey of studying abroad. From initial university shortlisting and scholarship search to visa preparation, forex support, and pre-departure briefings — our dedicated team is with you every step of the way.
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:'13px', marginBottom:'28px' }}>
              {[
                'Proven track record of placing 10,000+ students in top global universities',
                'Official ties with 1,500+ universities across 50+ countries',
                '100% Free counseling & transparent visa guidance',
                'End-to-end support: IELTS prep, Forex & Accommodation',
              ].map((item,i) => (
                <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'10px' }}>
                  <CheckCircle2 size={18} color="#00C58D" style={{ flexShrink:0, marginTop:'2px' }} />
                  <span style={{ fontWeight:600, color:'#1E293B', fontSize:'0.93rem', lineHeight:1.5 }}>{item}</span>
                </div>
              ))}
            </div>

            <Link to="/free-counseling" style={{
              display:'inline-flex', alignItems:'center', gap:'10px',
              backgroundColor:'#00C58D', color:'#FFF', padding:'14px 28px',
              borderRadius:'999px', fontFamily:'Outfit,sans-serif',
              fontWeight:700, fontSize:'0.9rem',
              boxShadow:'0 8px 24px rgba(0,197,141,0.32)',
            }}>
              BOOK FREE APPOINTMENT <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="stats-row" style={{ marginBottom:'64px' }}>
          {[
            { num:'10,000+', label:'Students Placed' },
            { num:'50+',     label:'Countries Served' },
            { num:'1,500+',  label:'University Partners' },
            { num:'10+',     label:'Years Experience' },
          ].map((s,i) => (
            <div key={i} style={{
              backgroundColor:'#F8FAFC', borderRadius:'20px',
              padding:'28px 20px', textAlign:'center',
              border:'1px solid #E2E8F0',
            }}>
              <div style={{
                fontFamily:'Outfit,sans-serif', fontSize:'clamp(1.8rem,4vw,2.5rem)',
                fontWeight:800, color:'#00C58D', lineHeight:1,
              }}>{s.num}</div>
              <div style={{ fontSize:'0.88rem', color:'#64748B', fontWeight:600, marginTop:'6px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Branch network */}
        <section style={{
          backgroundColor:'#F8FAFC', borderRadius:'28px',
          padding:'clamp(28px,5vw,56px)', marginBottom:'0',
        }}>
          <div style={{ textAlign:'center', marginBottom:'36px' }}>
            <h2 style={{
              fontFamily:'Outfit,sans-serif',
              fontSize:'clamp(1.5rem,3vw,2rem)',
              fontWeight:800, color:'#0F172A',
            }}>Our Global & Domestic Network</h2>
            <p style={{ color:'#64748B', marginTop:'8px' }}>
              Connecting students directly with local and international branches.
            </p>
          </div>

          <div className="branches-grid">
            <div style={{ backgroundColor:'#FFF', padding:'clamp(20px,4vw,32px)', borderRadius:'20px', border:'1px solid #E2E8F0' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px' }}>
                <Building2 size={24} color="#00C58D" />
                <h3 style={{ fontSize:'clamp(1rem,2.5vw,1.25rem)', fontWeight:800, color:'#0F172A' }}>
                  Domestic Branches (India)
                </h3>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
                {domesticBranches.map((b,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:'7px', fontSize:'0.9rem', color:'#475569' }}>
                    <MapPin size={14} color="#00C58D" style={{ flexShrink:0 }} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor:'#FFF', padding:'clamp(20px,4vw,32px)', borderRadius:'20px', border:'1px solid #E2E8F0' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px' }}>
                <Globe size={24} color="#00C58D" />
                <h3 style={{ fontSize:'clamp(1rem,2.5vw,1.25rem)', fontWeight:800, color:'#0F172A' }}>
                  Overseas Offices
                </h3>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
                {overseasBranches.map((b,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:'8px', fontSize:'0.9rem' }}>
                    <Globe size={14} color="#00C58D" style={{ flexShrink:0 }} />
                    <span style={{ fontWeight:700, color:'#0F172A' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .about-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 20px;
        }
        .branches-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-badge { right: 10px !important; bottom: -16px !important; }
          .stats-row { grid-template-columns: repeat(2,1fr) !important; }
          .branches-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
