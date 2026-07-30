import React from 'react';
import { Plus, Check, Play, Award, Zap, Users } from 'lucide-react';

export default function LearningApproaches() {
  const points = [
    { title: 'Interactive Live Coding & Project Labs', desc: 'Real-time code compiler labs and instant feedback on your assignments.' },
    { title: 'Personalized 1-on-1 Instructor Mentorship', desc: 'Dedicated office hours with expert advisors to clear your technical doubts.' },
    { title: 'Global Accredited Certification', desc: 'Industry-recognized certificate upon completing each verified course track.' }
  ];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }} className="approaches-grid">

          {/* Left Column Content */}
          <div>
            <div className="section-subtitle">
              <Plus size={16} /> WHY CHOOSE US
            </div>
            <h2 className="section-title">
              Innovative and Effective Learning Approaches
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px' }}>
              We combine cutting-edge learning methodology with hands-on practice, ensuring every student masters practical skills for career advancement.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {points.map((p, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '16px',
                  backgroundColor: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#E8F8F3',
                    color: '#00C58D',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>
                      {p.title}
                    </h4>
                    <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Interactive Visual Box */}
          <div style={{ position: 'relative' }}>
            <div style={{
              backgroundColor: '#0F172A',
              borderRadius: '30px',
              padding: '40px',
              color: '#FFFFFF',
              boxShadow: '0 25px 50px rgba(15, 23, 42, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background gradient glow */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 197, 141, 0.25)',
                filter: 'blur(40px)'
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Zap size={24} color="#00C58D" />
                <span style={{ fontWeight: 800, letterSpacing: '1px', fontSize: '0.9rem', color: '#00C58D' }}>
                  CAMPUS HIGHLIGHTS
                </span>
              </div>

              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', lineHeight: 1.3 }}>
                Transforming Education with Next-Gen Digital Classrooms
              </h3>

              <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
                Join over 12,000 active students experiencing interactive video streaming, group discussion hubs, and direct instructor Q&A sessions.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '16px' }}>
                  <Award size={28} color="#00C58D" style={{ marginBottom: '8px' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>98.4%</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Completion Rate</div>
                </div>

                <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '16px' }}>
                  <Users size={28} color="#00C58D" style={{ marginBottom: '8px' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>150+</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.85rem' }}>Global Partners</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .approaches-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
