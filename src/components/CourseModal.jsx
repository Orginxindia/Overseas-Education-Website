import React from 'react';
import { X, Star, CheckCircle, Clock, BookOpen, Users, ShieldCheck } from 'lucide-react';

export default function CourseModal({ course, onClose, onAddToCart }) {
  if (!course) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '28px',
        maxWidth: '650px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        animation: 'fadeIn 0.3s ease'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10,
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            color: '#0F172A'
          }}
        >
          <X size={20} />
        </button>

        {/* Cover Image */}
        <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
          <img 
            src={course.image} 
            alt={course.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '20px',
            backgroundColor: '#00C58D',
            color: '#FFFFFF',
            fontWeight: 800,
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '0.9rem'
          }}>
            {course.price}
          </div>
        </div>

        {/* Body details */}
        <div style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>
              {course.rating} ({course.reviewsCount} verified reviews)
            </span>
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.3 }}>
            {course.title}
          </h2>

          <p style={{ color: '#64748B', lineHeight: 1.7, marginBottom: '24px' }}>
            Master core fundamentals and practical skills with step-by-step video lessons, downloadable resources, and live coding exercises.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            backgroundColor: '#F8FAFC',
            padding: '16px',
            borderRadius: '16px',
            marginBottom: '24px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <BookOpen size={18} color="#00C58D" style={{ marginBottom: '4px' }} />
              <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{course.lessons}</div>
              <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Lessons</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Clock size={18} color="#00C58D" style={{ marginBottom: '4px' }} />
              <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{course.duration}</div>
              <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Duration</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Users size={18} color="#00C58D" style={{ marginBottom: '4px' }} />
              <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{course.students}</div>
              <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Students</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              onClick={() => { onAddToCart(course); onClose(); }}
              className="btn-primary"
              style={{ flexGrow: 1, justifyContent: 'center', padding: '16px' }}
            >
              ENROLL IN COURSE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
