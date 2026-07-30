import React from 'react';
import { Plus, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Educate transformed my learning path completely! The hands-on project labs and 1-on-1 mentorship helped me secure a full-time Senior UI Engineer role within 3 months of graduation.",
      author: "Eleanor Vance",
      role: "Software Engineering Alumni",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      quote: "The quality of instruction and structured curriculum is second to none. I gained real-world cloud deployment skills that immediately impacted my day-to-day work.",
      author: "Marcus Aurelius",
      role: "Cloud Architect Lead",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section style={{ padding: '90px 0', backgroundColor: '#F8FAFC' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }} className="testimonial-grid">

          {/* Left Column Graphic */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              backgroundColor: '#00C58D',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              boxShadow: '0 20px 40px rgba(0, 197, 141, 0.3)',
              position: 'relative'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
                alt="Happy Learner"
                style={{
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '6px solid #FFFFFF'
                }}
              />

              {/* Floating Quote Icon Pill */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#0F172A',
                color: '#00C58D',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
              }}>
                <Quote size={28} />
              </div>
            </div>
          </div>

          {/* Right Column Reviews Showcase */}
          <div>
            <div className="section-subtitle">
              <Plus size={16} /> TESTIMONIALS
            </div>
            <h2 className="section-title">
              Real Experiences From Our Dedicated Learners
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {reviews.map((rev) => (
                <div 
                  key={rev.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '32px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  <p style={{
                    fontSize: '1.05rem',
                    color: '#334155',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '20px'
                  }}>
                    "{rev.quote}"
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <img 
                      src={rev.avatar} 
                      alt={rev.author}
                      style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem' }}>
                        {rev.author}
                      </div>
                      <div style={{ color: '#00C58D', fontSize: '0.85rem', fontWeight: 600 }}>
                        {rev.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
