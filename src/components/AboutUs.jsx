import React from 'react';
import { Plus, CheckCircle2, ArrowRight, BookOpenCheck, Globe, Users } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" style={{
      padding: '90px 0',
      backgroundColor: '#F8FAFC',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '70px',
          alignItems: 'center'
        }} className="about-grid">

          {/* Left Column Image Collage */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              zIndex: 2,
              backgroundColor: '#FFFFFF',
              padding: '12px'
            }}>
              <img 
                src="/about_students.png" 
                alt="About EducateX Students" 
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  display: 'block'
                }}
              />
            </div>

            {/* Floating Tag: SMART ONLINE */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '-20px',
              zIndex: 3,
              backgroundColor: '#00C58D',
              color: '#FFFFFF',
              fontWeight: 800,
              padding: '10px 22px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              boxShadow: '0 10px 25px rgba(0, 197, 141, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span>SMART ONLINE</span>
            </div>

            {/* Stack of 3D Books Illustration Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-20px',
              zIndex: 3,
              backgroundColor: '#FFFFFF',
              padding: '20px 28px',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
              border: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }} className="animate-float">
              <div style={{
                fontSize: '2.5rem',
                lineHeight: 1
              }}>
                📚
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.1rem' }}>
                  Interactive Library
                </div>
                <div style={{ color: '#64748B', fontSize: '0.85rem' }}>
                  10,000+ E-books & Video Guides
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div>
            <div className="section-subtitle">
              <Plus size={16} /> ABOUT US
            </div>
            <h2 className="section-title">
              Who We Are – Introduction to Educate Online Platform
            </h2>
            <p style={{
              color: '#475569',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              marginBottom: '28px'
            }}>
              Educate is the ultimate destination for knowledge seekers and educators alike.
              We are committed to transforming education through modern interactive platforms and world-class instructors across global channels.
            </p>

            {/* Checkmark points */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '36px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F8F3',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <CheckCircle2 size={16} color="#00C58D" />
                </div>
                <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>
                  Innovative Learning System
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F8F3',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <CheckCircle2 size={16} color="#00C58D" />
                </div>
                <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>
                  Worldwide Intelligent Learner
                </span>
              </div>
            </div>

            {/* Stats Counter Row */}
            <div style={{
              display: 'flex',
              gap: '40px',
              marginBottom: '40px',
              padding: '24px 0',
              borderTop: '1px solid #E2E8F0',
              borderBottom: '1px solid #E2E8F0'
            }}>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#00C58D',
                  fontFamily: 'Outfit, sans-serif',
                  lineHeight: 1
                }}>
                  30+
                </div>
                <div style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 600, marginTop: '6px' }}>
                  Expert & Professional <br /> Instructors
                </div>
              </div>

              <div style={{ width: '1px', backgroundColor: '#E2E8F0' }} />

              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  fontFamily: 'Outfit, sans-serif',
                  lineHeight: 1
                }}>
                  6k+
                </div>
                <div style={{ color: '#64748B', fontSize: '0.85rem', fontWeight: 600, marginTop: '6px' }}>
                  Enrolled Students <br /> All Over The World
                </div>
              </div>
            </div>

            {/* Button */}
            <a 
              href="#courses"
              className="btn-primary"
              style={{ padding: '14px 30px' }}
            >
              MORE ABOUT
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center'
              }}>
                <ArrowRight size={14} color="#FFFFFF" />
              </div>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
