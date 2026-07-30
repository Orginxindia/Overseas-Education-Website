import React from 'react';
import { BookOpen, UserCheck, ShieldCheck, Plus } from 'lucide-react';

export default function KeyFeatures() {
  const features = [
    {
      id: 1,
      icon: BookOpen,
      title: 'Learning Experiences',
      desc: 'The ultimate destination for knowledge seekers. We are committed to transforming traditional education into interactive masterclass learning.',
      color: '#00C58D',
      bgColor: '#E8F8F3'
    },
    {
      id: 2,
      icon: UserCheck,
      title: 'Professional Instructor',
      desc: 'Learn directly from industry leaders, university professors, and expert practitioners with hands-on real world guidance.',
      color: '#F97316',
      bgColor: '#FFF7ED'
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Moneyback Guarantee',
      desc: '100% risk-free 30-day money back guarantee on all courses. If you are not completely satisfied, get a full refund instantly.',
      color: '#0EA5E9',
      bgColor: '#F0F9FF'
    }
  ];

  return (
    <section id="features" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-subtitle">
            <Plus size={16} /> CORE FEATURES
          </div>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            Interactive Online Learning Key Features & Benefits
          </h2>
        </div>

        {/* 3 Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }} className="features-grid">
          {features.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  border: '1px solid #F1F5F9',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="feature-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#F1F5F9';
                }}
              >
                {/* Icon Container */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '20px',
                  backgroundColor: item.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '24px'
                }}>
                  <IconComp size={32} color={item.color} />
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  marginBottom: '16px'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  color: '#64748B',
                  fontSize: '1rem',
                  lineHeight: 1.7
                }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
