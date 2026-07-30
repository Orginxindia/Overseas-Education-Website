import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Globe, Building2, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingTop: '40px', paddingBottom: '90px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-subtitle">GET IN TOUCH</div>
          <h1 className="section-title" style={{ margin: '0 auto', fontSize: '3rem' }}>
            Contact LPS Global Education
          </h1>
          <p style={{ color: '#64748B', maxWidth: '650px', margin: '16px auto 0', fontSize: '1.05rem' }}>
            Visit our Head Office in Bengaluru or reach out to our domestic and overseas branch offices.
          </p>
        </div>

        {/* 2 Column Contact Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          marginBottom: '80px'
        }} className="contact-grid">

          {/* Left Column: Office Details & Branches */}
          <div>
            <div style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              borderRadius: '28px',
              padding: '40px',
              boxShadow: '0 25px 50px rgba(15, 23, 42, 0.15)',
              marginBottom: '30px'
            }}>
              <div style={{ color: '#00C58D', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '8px' }}>
                HEAD OFFICE
              </div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px' }}>
                LP Saravanaa Educational Consultants Pvt Ltd
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', color: '#94A3B8', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={22} color="#00C58D" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    62/63, WeWork The Pavilion, Church Street, <br />
                    M.G.Road, Bengaluru – 560 001, Karnataka, India.
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={20} color="#00C58D" style={{ flexShrink: 0 }} />
                  <a href="tel:+917639557272" style={{ color: '#FFFFFF', fontWeight: 700 }}>
                    +91 76395 57272
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={20} color="#00C58D" style={{ flexShrink: 0 }} />
                  <a href="mailto:info@lpsglobaledu.com" style={{ color: '#FFFFFF', fontWeight: 700 }}>
                    info@lpsglobaledu.com
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <a 
                  href="https://wa.me/917639557272" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    fontWeight: 800,
                    padding: '12px 24px',
                    borderRadius: '999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.9rem'
                  }}
                >
                  <MessageCircle size={18} /> CONNECT ON WHATSAPP
                </a>
              </div>
            </div>

            {/* Branch Offices Summary */}
            <div style={{ backgroundColor: '#F8FAFC', borderRadius: '24px', padding: '30px', border: '1px solid #E2E8F0' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                Domestic & Overseas Branch Network
              </h4>
              <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '16px' }}>
                <strong style={{ color: '#00C58D' }}>India Branches:</strong> Chennai | Coimbatore | Tirunelveli | Madurai | Erode
              </p>
              <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
                <strong style={{ color: '#00C58D' }}>International Offices:</strong> Johannesburg (South Africa) | Surrey (UK) | San Francisco (USA)
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '40px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Send Us a Message
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '24px' }}>
              Have questions about university admissions, VISA processes, or fees? Drop us a line.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '50px 0' }}>
                <CheckCircle2 size={48} color="#00C58D" style={{ marginBottom: '16px' }} />
                <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ color: '#64748B' }}>
                  Thank you for reaching out to LPS Global Education. Our counseling team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                    Subject
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Inquiry about Master's in USA"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                    Your Message *
                  </label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Write your message or specific queries..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', fontFamily: 'inherit' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: '10px' }}>
                  SEND MESSAGE NOW <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Map */}
        <div style={{ borderRadius: '28px', overflow: 'hidden', border: '1px solid #E2E8F0', height: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
          <iframe 
            src="https://maps.google.com/maps?q=62%2F63%2C%20The%20Pavilion%2C%20Church%20Street%2C%20M.G.%20Road%2C%20Bangalore%20-560%20001&t=m&z=15&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
            title="LPS Global Education Head Office Location"
          />
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
