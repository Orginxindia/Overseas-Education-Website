import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Globe, Building2, MapPin, Award, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const domesticBranches = ['Chennai', 'Coimbatore', 'Tirunelveli', 'Madurai', 'Erode', 'Bengaluru (Head Office)'];
  const overseasBranches = ['Johannesburg, South Africa', 'Surrey, United Kingdom', 'San Francisco, USA'];

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingTop: '40px', paddingBottom: '90px' }}>
      <div className="container">
        
        {/* Header Breadcrumb */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-subtitle">ABOUT LP SARAVANAA EDUCATIONAL CONSULTANTS</div>
          <h1 className="section-title" style={{ margin: '0 auto', fontSize: '3rem' }}>
            Your Gateway to World-Class Overseas Education
          </h1>
          <p style={{ color: '#64748B', maxWidth: '680px', margin: '16px auto 0', fontSize: '1.1rem', lineHeight: 1.7 }}>
            LP Saravanaa Educational Consultants Pvt Ltd (LPS Global Education) is a premier ISO-aligned overseas education consultancy with over 10 years of student counseling experience.
          </p>
        </div>

        {/* 2-Column Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '80px'
        }} className="about-hero-grid">

          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
              backgroundColor: '#F8FAFC',
              padding: '12px'
            }}>
              <img 
                src="/about_students.png" 
                alt="LPS Global Edu Team & Students" 
                style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block' }}
              />
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              right: '-15px',
              backgroundColor: '#00C58D',
              color: '#FFFFFF',
              padding: '20px 28px',
              borderRadius: '20px',
              boxShadow: '0 15px 30px rgba(0, 197, 141, 0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <Award size={32} />
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>10+ Years</div>
                <div style={{ fontSize: '0.85rem' }}>Excellence & Trust</div>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '20px', lineHeight: 1.25 }}>
              Application to Admission @ Your Door Step
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
              At LPS Global Edu, we simplify the journey of studying abroad. From initial university shortlisting and scholarship search to visa preparation, forex support, and pre-departure briefings—our dedicated team is with you every step of the way.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                'Proven track record of placing 10,000+ students in top global universities',
                'Official ties with 1,500+ universities across 50+ countries',
                '100% Free counseling & transparent visa guidance',
                'End-to-end support including IELTS prep, Forex, & Accommodation'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#00C58D" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, color: '#1E293B', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>

            <Link to="/free-counseling" className="btn-primary" style={{ padding: '14px 32px' }}>
              BOOK FREE APPOINTMENT
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Global Network & Office Branches */}
        <section style={{ backgroundColor: '#F8FAFC', borderRadius: '32px', padding: '60px 40px', marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A' }}>
              Our Global & Domestic Network
            </h2>
            <p style={{ color: '#64748B' }}>Connecting students directly with local and international branches.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="branches-grid">
            {/* Domestic */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <Building2 size={28} color="#00C58D" />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>Domestic Branches (India)</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {domesticBranches.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#475569' }}>
                    <MapPin size={16} color="#00C58D" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Overseas */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <Globe size={28} color="#00C58D" />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>Overseas Offices</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {overseasBranches.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#475569' }}>
                    <Globe size={16} color="#00C58D" />
                    <span style={{ fontWeight: 700, color: '#0F172A' }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-hero-grid, .branches-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
