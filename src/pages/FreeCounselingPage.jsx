import React, { useState } from 'react';
import { 
  CheckCircle2, Send, Phone, Mail, MapPin, Globe, ShieldCheck, 
  Award, University, GraduationCap, DollarSign, Clock, Users, ArrowRight, MessageCircle 
} from 'lucide-react';

export default function FreeCounselingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    destination: 'USA',
    degree: 'Master\'s Degree / MBA',
    fieldOfStudy: 'Computer Science & IT',
    targetYear: '2026',
    comments: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { step: '01', title: 'Free Profile Evaluation', desc: 'Our senior counselors evaluate your academic transcripts, GPA, and test scores.' },
    { step: '02', title: 'University Shortlisting', desc: 'We select the top 5-8 matched universities across your target destination country.' },
    { step: '03', title: 'Scholarships & SOP Guidance', desc: 'We assist with SOP/LOR drafting and apply for university tuition waivers.' },
    { step: '04', title: 'VISA Filing & Pre-Departure', desc: 'End-to-end embassy visa filing, mock interviews, Forex, and flight booking.' }
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC', paddingTop: '40px', paddingBottom: '90px' }}>
      <div className="container">
        
        {/* Top Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-subtitle">APPLICATION TO ADMISSION @ YOUR DOOR STEP</div>
          <h1 className="section-title" style={{ margin: '0 auto', fontSize: '3rem' }}>
            Book Your FREE Overseas Education Counseling
          </h1>
          <p style={{ color: '#64748B', maxWidth: '680px', margin: '16px auto 0', fontSize: '1.1rem', lineHeight: 1.7 }}>
            Fill out the official consultation request form below to connect directly with an expert overseas advisor from LP Saravanaa Educational Consultants Pvt Ltd (LPS Global Education).
          </p>
        </div>

        {/* 2-Column Main Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '50px',
          alignItems: 'start',
          marginBottom: '80px'
        }} className="counseling-grid">

          {/* Left Column: Counseling Process & Perks */}
          <div>
            <div style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              borderRadius: '28px',
              padding: '40px',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
              marginBottom: '30px'
            }}>
              <div style={{ color: '#00C58D', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                100% FREE CONSULTANCY
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '16px', lineHeight: 1.25 }}>
                Why Register for Counseling with LPS Global Edu?
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Over the past 10 years, our team has helped 10,000+ students secure admissions and visas in top institutions across the USA, UK, Canada, Australia, Germany, and Europe.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Zero Consultation Fee – 100% Free Service',
                  'Direct University Representative Guidance',
                  'Highest VISA Approval Rate with Mock Interview Drills',
                  'Exclusive Tuition Waiver & Merit Scholarship Support',
                  'Assistance with Forex, Blocked Accounts & Student Visas'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 size={20} color="#00C58D" style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#E2E8F0' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Helpline Box */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '30px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 25px rgba(0,0,0,0.03)'
            }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                Need Immediate Help?
              </h4>
              <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '16px' }}>
                Call our senior counselors directly or send us a WhatsApp message for instant response.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a 
                  href="tel:+917639557272"
                  style={{
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    padding: '12px 20px',
                    borderRadius: '999px',
                    color: '#0F172A',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Phone size={16} color="#00C58D" /> +91 76395 57272
                </a>

                <a 
                  href="https://wa.me/917639557272"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#FFFFFF',
                    padding: '12px 20px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <MessageCircle size={16} /> WHATSAPP US NOW
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Dedicated Consultation Form */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '28px',
            padding: '40px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '50px 20px' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F8F3',
                  color: '#00C58D',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '20px'
                }}>
                  <CheckCircle2 size={40} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                  Counseling Request Received!
                </h3>
                <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you, <strong>{formData.name}</strong>! An expert overseas education counselor from LPS Global Edu will contact you on <strong>{formData.phone}</strong> within 2 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="btn-outline" 
                  style={{ padding: '12px 28px' }}
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                  Free Counseling Registration
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '28px' }}>
                  Please fill in your academic details so our advisor can prepare profile-matched options.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                      Student Full Name *
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Ananya Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem' }}
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
                        placeholder="ananya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                        Phone / WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                        Current City / Location
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Bengaluru / Chennai"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                        Target Country
                      </label>
                      <select 
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', backgroundColor: '#FFFFFF' }}
                      >
                        <option value="USA">Study in USA</option>
                        <option value="Australia">Study in Australia</option>
                        <option value="Canada">Study in Canada</option>
                        <option value="UK">Study in UK</option>
                        <option value="Singapore">Study in Singapore</option>
                        <option value="Germany">Study in Germany</option>
                        <option value="New Zealand">Study in New Zealand</option>
                        <option value="Ireland">Study in Ireland</option>
                        <option value="Finland">Study in Finland</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                        Target Degree Level
                      </label>
                      <select 
                        value={formData.degree}
                        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', backgroundColor: '#FFFFFF' }}
                      >
                        <option value="Bachelor's Degree">Bachelor's Degree</option>
                        <option value="Master's Degree / MBA">Master's Degree / MBA</option>
                        <option value="Doctorate / PhD">Doctorate / PhD</option>
                        <option value="Diploma / Pathway">Diploma / Pathway</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                        Target Intake Year
                      </label>
                      <select 
                        value={formData.targetYear}
                        onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', backgroundColor: '#FFFFFF' }}
                      >
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', display: 'block', marginBottom: '6px' }}>
                      Additional Notes / Questions
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Specify your academic marks, IELTS status, or specific college preferences..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', fontSize: '0.95rem', fontFamily: 'inherit' }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    style={{ width: '100%', justifyContent: 'center', padding: '16px', marginTop: '10px', fontSize: '1rem' }}
                  >
                    SUBMIT COUNSELING REQUEST
                    <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* 4 Step Process Cards */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '32px', padding: '60px 40px', border: '1px solid #E2E8F0' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A' }}>
              Our 4-Step Admission Journey
            </h3>
            <p style={{ color: '#64748B' }}>From initial application to stepping foot inside your international university.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="steps-grid">
            {steps.map((s) => (
              <div key={s.step} style={{ backgroundColor: '#F8FAFC', borderRadius: '20px', padding: '28px 24px', position: 'relative' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#00C58D', fontFamily: 'Outfit', lineHeight: 1, marginBottom: '12px' }}>
                  {s.step}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  {s.title}
                </h4>
                <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .counseling-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 576px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
