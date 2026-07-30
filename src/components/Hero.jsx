import React from 'react';
import { ArrowRight, CheckCircle2, Star, Play, Sparkles } from 'lucide-react';

export default function Hero({ onOpenTrial }) {
  return (
    <section id="home" style={{
      position: 'relative',
      backgroundColor: '#F2FAF7',
      paddingTop: '60px',
      paddingBottom: '90px',
      overflow: 'hidden',
      backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(0, 197, 141, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(0, 197, 141, 0.05) 0%, transparent 40%)'
    }}>
      {/* Background Decorative Shapes */}
      <div style={{
        position: 'absolute',
        top: '40px',
        right: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,197,141,0.12) 0%, rgba(0,197,141,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column Text Content */}
          <div style={{ zIndex: 2 }}>
            {/* Guarantee Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0, 197, 141, 0.3)',
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#0F172A',
              boxShadow: '0 4px 15px rgba(0, 197, 141, 0.1)',
              marginBottom: '24px'
            }}>
              <CheckCircle2 size={16} color="#00C58D" />
              <span>100% SATISFACTION GUARANTEE</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: '3.6rem',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#0F172A',
              marginBottom: '24px',
              letterSpacing: '-1px'
            }} className="hero-title">
              Growup Your Learning <br />
              Skills with <span style={{ 
                color: '#00C58D',
                position: 'relative',
                display: 'inline-block'
              }}>
                Educate
              </span>
            </h1>

            {/* Sub-description */}
            <p style={{
              fontSize: '1.125rem',
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '540px'
            }}>
              Educate the ultimate destination for knowledge seekers and educators alike.
              We are committed to transforming education through modern interactive platforms and world-class instructors.
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '48px'
            }}>
              <button 
                onClick={onOpenTrial}
                className="btn-primary"
                style={{ padding: '16px 32px', fontSize: '1rem' }}
              >
                GET STARTED
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <ArrowRight size={16} color="#FFFFFF" />
                </div>
              </button>

              <a 
                href="#courses"
                className="btn-outline"
                style={{ padding: '16px 32px', fontSize: '1rem' }}
              >
                FIND COURSE
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Rating & Social Proof Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(0,0,0,0.06)'
            }}>
              <div style={{
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                borderRadius: '999px',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 10px 20px rgba(15, 23, 42, 0.2)'
              }}>
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>4.7 Rating</span>
              </div>

              <div style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>
                <span style={{ color: '#00C58D', fontWeight: 800 }}>12k+</span> students learn daily with <br /> educate platform
              </div>
            </div>
          </div>

          {/* Right Column Hero Graphic */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Background Backdrop Shape */}
            <div style={{
              position: 'absolute',
              width: '85%',
              height: '92%',
              backgroundColor: '#00C58D',
              borderRadius: '160px 40px 160px 40px',
              top: '5%',
              left: '10%',
              opacity: 0.9,
              transform: 'rotate(-3deg)'
            }} />

            {/* Hero Main Image */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              borderRadius: '30px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxWidth: '480px'
            }}>
              <img 
                src="/hero_student.png" 
                alt="EducateX Student" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Floating Courses Badge */}
            <div 
              className="animate-float"
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '-10px',
                zIndex: 3,
                backgroundColor: '#FFFFFF',
                padding: '14px 24px',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                border: '1px solid #E2E8F0'
              }}
            >
              <div style={{ display: 'flex', marginStyle: '-6px' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#00C58D',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  border: '2px solid #FFFFFF'
                }}>
                  🎓
                </div>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#0F172A',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  border: '2px solid #FFFFFF',
                  marginLeft: '-10px'
                }}>
                  ⭐
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>
                  130+
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>
                  Open courses
                </div>
              </div>
            </div>

            {/* Floating Sparkle Icon Badge */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              zIndex: 3,
              backgroundColor: '#FFFFFF',
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              boxShadow: '0 12px 25px rgba(0,0,0,0.1)'
            }}>
              <Sparkles size={24} color="#00C58D" />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-title { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
