import React, { useState } from 'react';
import { X, Send, CheckCircle2, Globe, Phone, Mail } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'USA',
    degree: 'Master\'s Degree',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      backgroundColor: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '28px',
        maxWidth: '560px',
        width: '100%',
        padding: '36px',
        position: 'relative',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#F8FAFC',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            color: '#64748B'
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#E8F8F3',
              color: '#00C58D',
              display: 'inline-flex',
              alignItems: 'center',
              justify: 'center',
              marginBottom: '20px'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
              Application Submitted!
            </h3>
            <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.6 }}>
              Thank you! Our expert overseas education counselor from LPS Global Edu will call you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: '#00C58D', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                APPLICATION TO ADMISSION @ YOUR DOOR STEP
              </span>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginTop: '4px' }}>
                Book FREE Overseas Counseling
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
                Get 100% guidance for college selection, VISA processing, and global scholarships.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                    Preferred Destination
                  </label>
                  <select 
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', backgroundColor: '#FFFFFF' }}
                  >
                    <option value="USA">Study in USA</option>
                    <option value="Australia">Study in Australia</option>
                    <option value="Canada">Study in Canada</option>
                    <option value="UK">Study in UK</option>
                    <option value="Germany">Study in Germany</option>
                    <option value="Singapore">Study in Singapore</option>
                    <option value="New Zealand">Study in New Zealand</option>
                    <option value="Ireland">Study in Ireland</option>
                    <option value="Finland">Study in Finland</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                    Intended Degree
                  </label>
                  <select 
                    value={formData.degree}
                    onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', backgroundColor: '#FFFFFF' }}
                  >
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree / MBA</option>
                    <option value="PhD / Doctorate">PhD / Doctorate</option>
                    <option value="Diploma / Pathway">Diploma / Pathway</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: '10px' }}
              >
                REQUEST FREE COUNSELING NOW
                <Send size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
