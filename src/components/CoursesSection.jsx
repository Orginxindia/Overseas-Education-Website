import React, { useState } from 'react';
import { Plus, Star, BookOpen, Clock, Users, ArrowRight } from 'lucide-react';

export default function CoursesSection({ onSelectCourse }) {
  const [activeCategory, setActiveCategory] = useState('All Categories');

  const categories = [
    'All Categories',
    'WordPress',
    'Business',
    'Networking',
    'Finance',
    'Designing'
  ];

  const courses = [
    {
      id: 1,
      title: 'Business Innovation And Development',
      category: 'Business',
      price: '$30',
      isFree: false,
      rating: 4.8,
      reviewsCount: 124,
      lessons: 18,
      duration: '12 Hours',
      students: 1420,
      image: '/course_business.png',
      instructor: {
        name: 'Dr. Alex Smith',
        role: 'Business Strategist',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
      }
    },
    {
      id: 2,
      title: 'Fundamentals of Network And Domains',
      category: 'Networking',
      price: 'Free',
      isFree: true,
      rating: 4.9,
      reviewsCount: 98,
      lessons: 14,
      duration: '8 Hours',
      students: 2310,
      image: '/course_networking.png',
      instructor: {
        name: 'Sarah Jenkins',
        role: 'Cloud Engineer',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
      }
    },
    {
      id: 3,
      title: 'Creative Graphic Design with Adobe Suite',
      category: 'Designing',
      price: '$35',
      isFree: false,
      rating: 4.7,
      reviewsCount: 156,
      lessons: 24,
      duration: '16 Hours',
      students: 980,
      image: '/course_design.png',
      instructor: {
        name: 'Michael Chen',
        role: 'Senior UI/UX Director',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
      }
    },
    {
      id: 4,
      title: 'WordPress Masterclass: Build Professional Sites',
      category: 'WordPress',
      price: '$29',
      isFree: false,
      rating: 4.9,
      reviewsCount: 210,
      lessons: 20,
      duration: '10 Hours',
      students: 3100,
      image: '/course_business.png',
      instructor: {
        name: 'Dr. Alex Smith',
        role: 'Web Architect',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
      }
    },
    {
      id: 5,
      title: 'Financial Analysis & Investment Portfolio',
      category: 'Finance',
      price: '$45',
      isFree: false,
      rating: 4.8,
      reviewsCount: 88,
      lessons: 16,
      duration: '14 Hours',
      students: 850,
      image: '/course_networking.png',
      instructor: {
        name: 'Sarah Jenkins',
        role: 'Financial Analyst',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
      }
    },
    {
      id: 6,
      title: 'Advanced UI/UX Motion Design Principles',
      category: 'Designing',
      price: 'Free',
      isFree: true,
      rating: 5.0,
      reviewsCount: 340,
      lessons: 12,
      duration: '6 Hours',
      students: 4500,
      image: '/course_design.png',
      instructor: {
        name: 'Michael Chen',
        role: 'Design Lead',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
      }
    }
  ];

  const filteredCourses = activeCategory === 'All Categories'
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <section id="courses" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-subtitle">
            <Plus size={16} /> OUR COURSES
          </div>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            Our Courses – Comprehensive Available All Programs
          </h2>
        </div>

        {/* Filter Categories Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '999px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  backgroundColor: isActive ? '#00C58D' : '#F1F5F9',
                  color: isActive ? '#FFFFFF' : '#475569',
                  boxShadow: isActive ? '0 10px 20px rgba(0, 197, 141, 0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }} className="courses-grid">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #F1F5F9',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="course-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
              }}
            >
              {/* Thumbnail Container */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={course.image} 
                  alt={course.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                
                {/* Price Tag Pill */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: course.isFree ? '#00C58D' : '#00C58D',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}>
                  {course.price}
                </div>

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.8rem'
                }}>
                  {course.category}
                </div>
              </div>

              {/* Body Content */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>
                    {course.rating} ({course.reviewsCount})
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0F172A',
                  lineHeight: 1.4,
                  marginBottom: '20px',
                  flexGrow: 1
                }}>
                  {course.title}
                </h3>

                {/* Info Metadata */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  padding: '12px 0',
                  borderTop: '1px solid #F1F5F9',
                  borderBottom: '1px solid #F1F5F9',
                  fontSize: '0.85rem',
                  color: '#64748B',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BookOpen size={14} color="#00C58D" />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} color="#00C58D" />
                    <span>{course.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Users size={14} color="#00C58D" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Instructor Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name}
                      style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>
                        {course.instructor.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
                        {course.instructor.role}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => onSelectCourse(course)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: '#E8F8F3',
                      color: '#00C58D',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#00C58D'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E8F8F3'; e.currentTarget.style.color = '#00C58D'; }}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .courses-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
