import React, { useState } from 'react';
import { CheckCircle2, Send, Phone, MessageCircle } from 'lucide-react';

export default function FreeCounselingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name:'', email:'', phone:'', city:'',
    destination:'USA', degree:"Master's Degree / MBA",
    fieldOfStudy:'Computer Science & IT', targetYear:'2026', comments:'',
  });

  const inp = {
    width:'100%', padding:'13px 14px', borderRadius:'12px',
    border:'1.5px solid #E2E8F0', outline:'none',
    fontSize:'0.93rem', fontFamily:'inherit',
    backgroundColor:'#FFFFFF', transition:'border-color 0.2s',
  };
  const onFocus = e => e.target.style.borderColor='#00C58D';
  const onBlur  = e => e.target.style.borderColor='#E2E8F0';

  const steps = [
    { step:'01', title:'Free Profile Evaluation', desc:'Senior counselors evaluate your academic transcripts, GPA, and test scores.' },
    { step:'02', title:'University Shortlisting', desc:'We select the top 5–8 matched universities for your target country.' },
    { step:'03', title:'Scholarships & SOP Guidance', desc:'We assist with SOP/LOR drafting and apply for tuition waivers.' },
    { step:'04', title:'VISA Filing & Pre-Departure', desc:'End-to-end embassy filing, mock interviews, Forex, and flight booking.' },
  ];

  return (
    <div style={{ backgroundColor:'#F8FAFC', paddingBottom:'80px' }}>

      {/* Hero band */}
      <div style={{
        background:'linear-gradient(135deg,#F0FAF7 0%,#EBF5FF 100%)',
        padding:'52px 0 44px', textAlign:'center',
      }}>
        <div className="container">
          <div className="section-subtitle">APPLICATION TO ADMISSION @ YOUR DOOR STEP</div>
          <h1 style={{
            fontFamily:'Outfit,sans-serif',
            fontSize:'clamp(1.7rem,4.5vw,2.8rem)',
            fontWeight:800, color:'#0F172A', margin:'0 auto 14px',
            maxWidth:'700px', lineHeight:1.15,
          }}>
            Book Your FREE Overseas Education Counseling
          </h1>
          <p style={{ color:'#64748B', maxWidth:'620px', margin:'0 auto', fontSize:'clamp(0.875rem,2vw,1.02rem)', lineHeight:1.75 }}>
            Fill out the consultation request form to connect directly with an expert overseas advisor from LP Saravanaa Educational Consultants Pvt Ltd.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'52px' }}>

        {/* Quick contact row */}
        <div style={{
          display:'flex', gap:'14px', flexWrap:'wrap',
          justifyContent:'center', marginBottom:'40px',
        }}>
          <a href="tel:+917639557272" style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            backgroundColor:'#FFF', border:'1.5px solid #E2E8F0',
            padding:'11px 20px', borderRadius:'999px',
            color:'#0F172A', fontWeight:700, fontSize:'0.88rem',
          }}>
            <Phone size={16} color="#00C58D" /> +91 76395 57272
          </a>
          <a href="https://wa.me/917639557272" target="_blank" rel="noreferrer" style={{
            display:'inline-flex', alignItems:'center', gap:'8px',
            backgroundColor:'#25D366', color:'#FFF',
            padding:'11px 20px', borderRadius:'999px',
            fontWeight:700, fontSize:'0.88rem',
          }}>
            <MessageCircle size={16} /> WHATSAPP US NOW
          </a>
        </div>

        {/* Main 2-col */}
        <div className="counseling-grid" style={{ marginBottom:'44px' }}>

          {/* LEFT: Why LPS */}
          <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
            <div style={{
              backgroundColor:'#0F172A', color:'#FFF',
              borderRadius:'24px', padding:'clamp(24px,4vw,36px)',
              boxShadow:'0 20px 40px rgba(15,23,42,0.15)',
            }}>
              <div style={{ color:'#00C58D', fontWeight:800, fontSize:'0.75rem', letterSpacing:'1px', textTransform:'uppercase', marginBottom:'8px' }}>
                100% FREE CONSULTANCY
              </div>
              <h2 style={{
                fontFamily:'Outfit,sans-serif',
                fontSize:'clamp(1.3rem,3vw,1.9rem)',
                fontWeight:800, color:'#FFF', marginBottom:'14px', lineHeight:1.25,
              }}>
                Why Register with LPS Global Edu?
              </h2>
              <p style={{ color:'#94A3B8', fontSize:'clamp(0.875rem,2vw,0.97rem)', lineHeight:1.75, marginBottom:'24px' }}>
                Over 10 years, our team has helped 10,000+ students secure admissions and visas in top institutions across the USA, UK, Canada, Australia, Germany, and Europe.
              </p>

              <div style={{ display:'flex', flexDirection:'column', gap:'13px' }}>
                {[
                  'Zero Consultation Fee – 100% Free Service',
                  'Direct University Representative Guidance',
                  'Highest VISA Approval Rate with Mock Interviews',
                  'Exclusive Tuition Waiver & Merit Scholarship Support',
                  'Forex, Blocked Accounts & Student Visa Assistance',
                ].map((item,i) => (
                  <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'10px' }}>
                    <CheckCircle2 size={18} color="#00C58D" style={{ flexShrink:0, marginTop:'2px' }} />
                    <span style={{ fontWeight:600, fontSize:'0.9rem', color:'#E2E8F0', lineHeight:1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Helpline box */}
            <div style={{
              backgroundColor:'#FFF', borderRadius:'20px',
              padding:'clamp(20px,3vw,28px)', border:'1px solid #E2E8F0',
            }}>
              <h4 style={{ fontFamily:'Outfit,sans-serif', fontSize:'1.05rem', fontWeight:800, color:'#0F172A', marginBottom:'10px' }}>
                Need Immediate Help?
              </h4>
              <p style={{ color:'#64748B', fontSize:'0.88rem', marginBottom:'16px', lineHeight:1.6 }}>
                Call our senior counselors directly or send a WhatsApp message for an instant response.
              </p>
              <div style={{ display:'flex', gap:'12px', flexWrap:'wrap' }}>
                <a href="tel:+917639557272" style={{
                  flex:'1 1 140px', display:'inline-flex', alignItems:'center',
                  justifyContent:'center', gap:'7px',
                  backgroundColor:'#F8FAFC', border:'1px solid #E2E8F0',
                  padding:'11px 16px', borderRadius:'999px',
                  color:'#0F172A', fontWeight:700, fontSize:'0.85rem',
                }}>
                  <Phone size={15} color="#00C58D" /> Call Us
                </a>
                <a href="https://wa.me/917639557272" target="_blank" rel="noreferrer" style={{
                  flex:'1 1 140px', display:'inline-flex', alignItems:'center',
                  justifyContent:'center', gap:'7px',
                  backgroundColor:'#25D366', color:'#FFF',
                  padding:'11px 16px', borderRadius:'999px',
                  fontWeight:700, fontSize:'0.85rem',
                }}>
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div style={{
            backgroundColor:'#FFF', borderRadius:'24px',
            padding:'clamp(24px,4vw,36px)', border:'1px solid #E2E8F0',
            boxShadow:'0 12px 32px rgba(0,0,0,0.06)',
          }}>
            {submitted ? (
              <div style={{ textAlign:'center', padding:'40px 16px' }}>
                <div style={{
                  width:'68px', height:'68px', borderRadius:'50%',
                  backgroundColor:'#E8F8F3', display:'flex',
                  alignItems:'center', justifyContent:'center', margin:'0 auto 18px',
                }}>
                  <CheckCircle2 size={36} color="#00C58D" />
                </div>
                <h3 style={{ fontFamily:'Outfit,sans-serif', fontSize:'clamp(1.3rem,3vw,1.7rem)', fontWeight:800, color:'#0F172A', marginBottom:'12px' }}>
                  Counseling Request Received!
                </h3>
                <p style={{ color:'#64748B', fontSize:'0.95rem', lineHeight:1.7, marginBottom:'20px' }}>
                  Thank you, <strong>{formData.name}</strong>! An expert counselor will contact you on <strong>{formData.phone}</strong> within 2 hours.
                </p>
                <button onClick={() => setSubmitted(false)} style={{
                  backgroundColor:'#F0FAF7', color:'#00C58D',
                  border:'1.5px solid #00C58D', padding:'11px 24px',
                  borderRadius:'999px', fontFamily:'Outfit,sans-serif',
                  fontWeight:700, fontSize:'0.9rem', cursor:'pointer',
                }}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily:'Outfit,sans-serif', fontSize:'clamp(1.2rem,2.5vw,1.6rem)', fontWeight:800, color:'#0F172A', marginBottom:'6px' }}>
                  Free Counseling Registration
                </h3>
                <p style={{ color:'#64748B', fontSize:'0.88rem', marginBottom:'22px', lineHeight:1.6 }}>
                  Fill in your academic details so our advisor can prepare profile-matched options.
                </p>

                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                  style={{ display:'flex', flexDirection:'column', gap:'16px' }}>

                  <div>
                    <label style={{ fontSize:'0.8rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Student Full Name *</label>
                    <input type="text" required placeholder="e.g. Ananya Roy"
                      value={formData.name} onChange={e => setFormData({...formData,name:e.target.value})}
                      style={inp} onFocus={onFocus} onBlur={onBlur} />
                  </div>

                  <div className="form-2col">
                    <div>
                      <label style={{ fontSize:'0.8rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Email *</label>
                      <input type="email" required placeholder="ananya@example.com"
                        value={formData.email} onChange={e => setFormData({...formData,email:e.target.value})}
                        style={inp} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    <div>
                      <label style={{ fontSize:'0.8rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Phone / WhatsApp *</label>
                      <input type="tel" required placeholder="+91 98765 43210"
                        value={formData.phone} onChange={e => setFormData({...formData,phone:e.target.value})}
                        style={inp} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                  </div>

                  <div className="form-2col">
                    <div>
                      <label style={{ fontSize:'0.8rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>City / Location</label>
                      <input type="text" placeholder="e.g. Chennai"
                        value={formData.city} onChange={e => setFormData({...formData,city:e.target.value})}
                        style={inp} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    <div>
                      <label style={{ fontSize:'0.8rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Target Country</label>
                      <select value={formData.destination} onChange={e => setFormData({...formData,destination:e.target.value})}
                        style={{ ...inp }}>
                        {['USA','Australia','Canada','UK','Singapore','Germany','New Zealand','Ireland','Finland'].map(c => (
                          <option key={c} value={c}>Study in {c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-2col">
                    <div>
                      <label style={{ fontSize:'0.8rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Degree Level</label>
                      <select value={formData.degree} onChange={e => setFormData({...formData,degree:e.target.value})}
                        style={{ ...inp }}>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree / MBA</option>
                        <option>Doctorate / PhD</option>
                        <option>Diploma / Pathway</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize:'0.8rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Target Year</label>
                      <select value={formData.targetYear} onChange={e => setFormData({...formData,targetYear:e.target.value})}
                        style={{ ...inp }}>
                        <option>2026</option>
                        <option>2027</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize:'0.8rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Additional Notes</label>
                    <textarea rows={3} placeholder="Specify academic marks, IELTS status, or college preferences..."
                      value={formData.comments} onChange={e => setFormData({...formData,comments:e.target.value})}
                      style={{ ...inp, resize:'vertical' }} onFocus={onFocus} onBlur={onBlur} />
                  </div>

                  <button type="submit" style={{
                    width:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px',
                    backgroundColor:'#00C58D', color:'#FFF', padding:'15px',
                    borderRadius:'999px', fontFamily:'Outfit,sans-serif', fontWeight:700,
                    fontSize:'0.95rem', border:'none', cursor:'pointer',
                    boxShadow:'0 8px 24px rgba(0,197,141,0.30)', transition:'all 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                    onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
                  >
                    SUBMIT COUNSELING REQUEST <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* 4-step process */}
        <div style={{
          backgroundColor:'#FFF', borderRadius:'24px',
          padding:'clamp(28px,5vw,52px)', border:'1px solid #E2E8F0',
        }}>
          <div style={{ textAlign:'center', marginBottom:'36px' }}>
            <h3 style={{ fontFamily:'Outfit,sans-serif', fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:800, color:'#0F172A' }}>
              Our 4-Step Admission Journey
            </h3>
            <p style={{ color:'#64748B', marginTop:'8px', fontSize:'0.93rem' }}>
              From initial application to stepping foot inside your international university.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map(s => (
              <div key={s.step} style={{
                backgroundColor:'#F8FAFC', borderRadius:'18px',
                padding:'clamp(20px,3vw,28px)',
              }}>
                <div style={{
                  fontFamily:'Outfit,sans-serif', fontSize:'2.2rem',
                  fontWeight:800, color:'#00C58D', lineHeight:1, marginBottom:'12px',
                }}>{s.step}</div>
                <h4 style={{ fontFamily:'Outfit,sans-serif', fontSize:'clamp(0.95rem,2vw,1.1rem)', fontWeight:800, color:'#0F172A', marginBottom:'8px' }}>
                  {s.title}
                </h4>
                <p style={{ color:'#64748B', fontSize:'0.87rem', lineHeight:1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .counseling-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .form-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 900px) {
          .counseling-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
