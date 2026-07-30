import React from 'react';
import { Plus, Globe, Mail, Share2, Star } from 'lucide-react';

export default function Instructors() {
  const instructors = [
    {
      id: 1,
      name: 'John O. Nelson',
      role: 'Senior Computer Science Professor',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      name: 'Angela Jenkins',
      role: 'Lead Business Strategist',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      name: 'David M. Nelson',
      role: 'Full Stack Web Architect',
      rating: '5.0',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 4,
      name: 'Sarah C. Miller',
      role: 'Creative UI/UX Design Lead',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section id="instructors" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-subtitle">
            <Plus size={16} /> OUR INSTRUCTORS
          </div>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            Introducing the Educators and Professional Instructor
          </h2>
        </div>

        {/* Instructors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px'
        }} className="instructors-grid">
          {instructors.map((inst) => (
            <div 
              key={inst.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #F1F5F9',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                textAlign: 'center',
                padding: '24px',
                transition: 'all 0.3s ease'
              }}
              className="instructor-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
              }}
            >
              <div style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', marginBottom: '20px' }}>
                <img 
                  src={inst.image} 
                  alt={inst.name}
                  style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                />
                
                {/* Rating Badge */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                  <span>{inst.rating}</span>
                </div>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                {inst.name}
              </h3>
              <p style={{ color: '#00C58D', fontWeight: 600, fontSize: '0.85rem', marginBottom: '16px' }}>
                {inst.role}
              </p>

              {/* Social links */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#F8FAFC',
                  color: '#64748B',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <Globe size={14} />
                </button>
                <button style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#F8FAFC',
                  color: '#64748B',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <Mail size={14} />
                </button>
                <button style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  backgroundColor: '#F8FAFC',
                  color: '#64748B',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <Share2 size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .instructors-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
          .instructors-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
