import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });

  const inputStyle = {
    width:'100%', padding:'12px 14px', borderRadius:'12px',
    border:'1.5px solid #E2E8F0', outline:'none',
    fontSize:'0.95rem', fontFamily:'inherit',
    transition:'border-color 0.2s',
  };

  return (
    <div style={{ backgroundColor:'#FFFFFF', paddingBottom:'80px' }}>

      {/* Hero band */}
      <div style={{
        background:'linear-gradient(135deg,#F0FAF7 0%,#EBF5FF 100%)',
        padding:'52px 0 44px', textAlign:'center',
      }}>
        <div className="container">
          <div className="section-subtitle">GET IN TOUCH</div>
          <h1 style={{
            fontFamily:'Outfit,sans-serif',
            fontSize:'clamp(1.8rem,4.5vw,2.8rem)',
            fontWeight:800, color:'#0F172A', margin:'0 auto 14px', maxWidth:'600px', lineHeight:1.15,
          }}>
            Contact LPS Global Education
          </h1>
          <p style={{ color:'#64748B', maxWidth:'580px', margin:'0 auto', fontSize:'clamp(0.875rem,2vw,1.02rem)', lineHeight:1.75 }}>
            Visit our Head Office in Bengaluru or reach any of our domestic and overseas branches.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'52px' }}>

        {/* Quick contact pills */}
        <div className="contact-pills" style={{ marginBottom:'40px' }}>
          <a href="tel:+917639557272" style={{
            display:'flex', alignItems:'center', gap:'10px',
            backgroundColor:'#F0FAF7', border:'1.5px solid #D1FAE5',
            padding:'14px 20px', borderRadius:'16px',
            color:'#0F172A', fontWeight:700, fontSize:'0.9rem', textDecoration:'none',
          }}>
            <div style={{ width:'36px', height:'36px', borderRadius:'10px', backgroundColor:'#00C58D',
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <Phone size={17} color="#FFF" />
            </div>
            <div>
              <div style={{ fontSize:'0.68rem', color:'#64748B', fontWeight:600 }}>CALL US</div>
              <div>+91 76395 57272</div>
            </div>
          </a>
          <a href="mailto:info@lpsglobaledu.com" style={{
            display:'flex', alignItems:'center', gap:'10px',
            backgroundColor:'#F0FAF7', border:'1.5px solid #D1FAE5',
            padding:'14px 20px', borderRadius:'16px',
            color:'#0F172A', fontWeight:700, fontSize:'0.9rem', textDecoration:'none',
          }}>
            <div style={{ width:'36px', height:'36px', borderRadius:'10px', backgroundColor:'#00C58D',
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <Mail size={17} color="#FFF" />
            </div>
            <div>
              <div style={{ fontSize:'0.68rem', color:'#64748B', fontWeight:600 }}>EMAIL US</div>
              <div>info@lpsglobaledu.com</div>
            </div>
          </a>
          <a href="https://wa.me/917639557272" target="_blank" rel="noreferrer" style={{
            display:'flex', alignItems:'center', gap:'10px',
            backgroundColor:'#F0FFF4', border:'1.5px solid #B7EBD1',
            padding:'14px 20px', borderRadius:'16px',
            color:'#0F172A', fontWeight:700, fontSize:'0.9rem', textDecoration:'none',
          }}>
            <div style={{ width:'36px', height:'36px', borderRadius:'10px', backgroundColor:'#25D366',
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <MessageCircle size={17} color="#FFF" />
            </div>
            <div>
              <div style={{ fontSize:'0.68rem', color:'#64748B', fontWeight:600 }}>WHATSAPP</div>
              <div>Chat with Us</div>
            </div>
          </a>
        </div>

        {/* Main 2-col layout */}
        <div className="contact-grid" style={{ marginBottom:'52px' }}>

          {/* Left: Office info */}
          <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>
            <div style={{
              backgroundColor:'#0F172A', color:'#FFF',
              borderRadius:'24px', padding:'clamp(24px,4vw,36px)',
              boxShadow:'0 20px 48px rgba(15,23,42,0.14)',
            }}>
              <div style={{ color:'#00C58D', fontWeight:800, fontSize:'0.78rem', letterSpacing:'1px', marginBottom:'8px' }}>
                HEAD OFFICE
              </div>
              <h3 style={{ fontSize:'clamp(1.1rem,2.5vw,1.6rem)', fontWeight:800, color:'#FFF', marginBottom:'20px', lineHeight:1.2 }}>
                LP Saravanaa Educational Consultants Pvt Ltd
              </h3>

              <div style={{ display:'flex', flexDirection:'column', gap:'16px', fontSize:'0.92rem', color:'#94A3B8' }}>
                <div style={{ display:'flex', alignItems:'flex-start', gap:'12px' }}>
                  <MapPin size={20} color="#00C58D" style={{ flexShrink:0, marginTop:'2px' }} />
                  <span>62/63, WeWork The Pavilion, Church Street, M.G. Road, Bengaluru – 560 001, Karnataka, India.</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                  <Phone size={18} color="#00C58D" style={{ flexShrink:0 }} />
                  <a href="tel:+917639557272" style={{ color:'#FFF', fontWeight:700 }}>+91 76395 57272</a>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                  <Mail size={18} color="#00C58D" style={{ flexShrink:0 }} />
                  <a href="mailto:info@lpsglobaledu.com" style={{ color:'#FFF', fontWeight:700 }}>info@lpsglobaledu.com</a>
                </div>
              </div>

              <div style={{ marginTop:'24px', paddingTop:'20px', borderTop:'1px solid rgba(255,255,255,0.1)' }}>
                <a href="https://wa.me/917639557272" target="_blank" rel="noreferrer" style={{
                  backgroundColor:'#25D366', color:'#FFF', fontWeight:800,
                  padding:'11px 22px', borderRadius:'999px',
                  display:'inline-flex', alignItems:'center', gap:'9px', fontSize:'0.88rem',
                }}>
                  <MessageCircle size={17} /> CONNECT ON WHATSAPP
                </a>
              </div>
            </div>

            <div style={{
              backgroundColor:'#F8FAFC', borderRadius:'20px',
              padding:'clamp(20px,3vw,28px)', border:'1px solid #E2E8F0',
            }}>
              <h4 style={{ fontSize:'1.05rem', fontWeight:800, color:'#0F172A', marginBottom:'12px' }}>
                Domestic & Overseas Branch Network
              </h4>
              <p style={{ color:'#64748B', fontSize:'0.88rem', marginBottom:'10px', lineHeight:1.6 }}>
                <strong style={{ color:'#00C58D' }}>India Branches: </strong>
                Chennai | Coimbatore | Tirunelveli | Madurai | Erode
              </p>
              <p style={{ color:'#64748B', fontSize:'0.88rem', lineHeight:1.6 }}>
                <strong style={{ color:'#00C58D' }}>International: </strong>
                Johannesburg (SA) | Surrey (UK) | San Francisco (USA)
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            backgroundColor:'#FFFFFF', borderRadius:'24px',
            padding:'clamp(24px,4vw,36px)', border:'1px solid #E2E8F0',
            boxShadow:'0 8px 28px rgba(0,0,0,0.05)',
          }}>
            {submitted ? (
              <div style={{ textAlign:'center', padding:'40px 0' }}>
                <CheckCircle2 size={52} color="#00C58D" style={{ margin:'0 auto 16px' }} />
                <h4 style={{ fontFamily:'Outfit,sans-serif', fontSize:'1.5rem', fontWeight:800, color:'#0F172A', marginBottom:'8px' }}>
                  Message Sent!
                </h4>
                <p style={{ color:'#64748B', lineHeight:1.7 }}>
                  Thank you for reaching out. Our counseling team will respond within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} style={{
                  marginTop:'20px', backgroundColor:'#F0FAF7', color:'#00C58D',
                  border:'1.5px solid #00C58D', padding:'11px 24px',
                  borderRadius:'999px', fontFamily:'Outfit,sans-serif',
                  fontWeight:700, fontSize:'0.9rem', cursor:'pointer',
                }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily:'Outfit,sans-serif', fontSize:'clamp(1.2rem,2.5vw,1.6rem)', fontWeight:800, color:'#0F172A', marginBottom:'6px' }}>
                  Send Us a Message
                </h3>
                <p style={{ color:'#64748B', fontSize:'0.9rem', marginBottom:'22px' }}>
                  Have questions about admissions, visa, or fees? Drop us a line.
                </p>

                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                  style={{ display:'flex', flexDirection:'column', gap:'15px' }}>
                  <div>
                    <label style={{ fontSize:'0.82rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Full Name *</label>
                    <input type="text" required placeholder="Enter your name"
                      value={form.name} onChange={e => setForm({...form, name:e.target.value})}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor='#00C58D'}
                      onBlur={e => e.target.style.borderColor='#E2E8F0'} />
                  </div>

                  <div className="form-row">
                    <div>
                      <label style={{ fontSize:'0.82rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Email *</label>
                      <input type="email" required placeholder="name@example.com"
                        value={form.email} onChange={e => setForm({...form, email:e.target.value})}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor='#00C58D'}
                        onBlur={e => e.target.style.borderColor='#E2E8F0'} />
                    </div>
                    <div>
                      <label style={{ fontSize:'0.82rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Phone *</label>
                      <input type="tel" required placeholder="+91 98765 43210"
                        value={form.phone} onChange={e => setForm({...form, phone:e.target.value})}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor='#00C58D'}
                        onBlur={e => e.target.style.borderColor='#E2E8F0'} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize:'0.82rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Subject</label>
                    <input type="text" placeholder="e.g. Inquiry about Master's in USA"
                      value={form.subject} onChange={e => setForm({...form, subject:e.target.value})}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor='#00C58D'}
                      onBlur={e => e.target.style.borderColor='#E2E8F0'} />
                  </div>

                  <div>
                    <label style={{ fontSize:'0.82rem', fontWeight:700, color:'#0F172A', display:'block', marginBottom:'5px' }}>Your Message *</label>
                    <textarea rows={4} required placeholder="Write your message or specific queries..."
                      value={form.message} onChange={e => setForm({...form, message:e.target.value})}
                      style={{ ...inputStyle, resize:'vertical' }}
                      onFocus={e => e.target.style.borderColor='#00C58D'}
                      onBlur={e => e.target.style.borderColor='#E2E8F0'} />
                  </div>

                  <button type="submit" style={{
                    width:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:'10px',
                    backgroundColor:'#00C58D', color:'#FFF', padding:'14px',
                    borderRadius:'999px', fontFamily:'Outfit,sans-serif', fontWeight:700,
                    fontSize:'0.95rem', border:'none', cursor:'pointer',
                    boxShadow:'0 8px 24px rgba(0,197,141,0.30)',
                    transition:'all 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                    onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
                  >
                    SEND MESSAGE <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map */}
        <div style={{ borderRadius:'24px', overflow:'hidden', border:'1px solid #E2E8F0', height:'clamp(240px,40vw,400px)' }}>
          <iframe
            src="https://maps.google.com/maps?q=62%2F63%2C%20The%20Pavilion%2C%20Church%20Street%2C%20M.G.%20Road%2C%20Bangalore%20-560%20001&t=m&z=15&output=embed"
            width="100%" height="100%" style={{ border:0 }}
            allowFullScreen="" loading="lazy"
            title="LPS Global Education Head Office"
          />
        </div>
      </div>

      <style>{`
        .contact-pills {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-pills { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .contact-pills { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 400px) {
          .contact-pills { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
