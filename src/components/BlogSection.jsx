import React from 'react';
import { Plus, Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: 'Top 10 Career Tech Skills to Master in 2026',
      category: 'Career Advice',
      date: 'July 28, 2026',
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      title: 'How Online Mentorship Accelerates Learning Speed',
      category: 'Education',
      date: 'July 25, 2026',
      author: 'Educate Team',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 3,
      title: 'Designing Accessible Web Experiences for All Learners',
      category: 'UI/UX Design',
      date: 'July 20, 2026',
      author: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1542744094-3a3172720449?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section id="blog" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-subtitle">
            <Plus size={16} /> OUR BLOG
          </div>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            Read the Latest Insights and Updates Educate Blog
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }} className="blog-grid">
          {blogs.map((b) => (
            <div 
              key={b.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #F1F5F9',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img 
                  src={b.image} 
                  alt={b.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '28px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  fontSize: '0.85rem',
                  color: '#64748B',
                  marginBottom: '14px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} color="#00C58D" />
                    <span>{b.date}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <User size={14} color="#00C58D" />
                    <span>{b.author}</span>
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  lineHeight: 1.4,
                  marginBottom: '20px'
                }}>
                  {b.title}
                </h3>

                <button style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#00C58D',
                  fontWeight: 800,
                  fontSize: '0.9rem'
                }}>
                  READ MORE <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
