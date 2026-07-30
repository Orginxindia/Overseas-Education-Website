import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Globe, GraduationCap, FileText, Users,
  Plane, Calendar
} from 'lucide-react';
import TickerBanner from '../components/TickerBanner';

export default function HomePage() {

  const features = [
    { icon: Globe,         label: 'Global Universities',      sub: '1,500+ Institutions'   },
    { icon: GraduationCap, label: 'Scholarship Assistance',   sub: 'Tuition Waivers & Aid' },
    { icon: FileText,      label: 'Visa & Admission Support',  sub: 'End-to-End Guidance'  },
    { icon: Users,         label: 'Expert Counselors',         sub: '10+ Years Experience' },
  ];

  const destinations = [
    { country:'Study in USA',         image:'https://lpsglobaledu.com/wp-content/uploads/2023/03/USA-UNIVERSITY.jpg',        desc:'STEM programs, 3-yr OPT work permit & Ivy League access.',         link:'/study-in-usa'         },
    { country:'Study in Australia',   image:'https://lpsglobaledu.com/wp-content/uploads/2023/03/AUSTRALIA-UNIVERSITY.webp', desc:'Group of Eight universities, up to 4-yr post-study work rights.',  link:'/study-in-australia'   },
    { country:'Study in Canada',      image:'https://lpsglobaledu.com/wp-content/uploads/2023/03/Canada-University.jpg',     desc:'PGWP work permits, co-op programs & direct PR pathways.',          link:'/study-in-canada'      },
    { country:'Study in UK',          image:'https://lpsglobaledu.com/wp-content/uploads/2023/03/UK-university.jpg',         desc:"1-Year Master's degrees & 2-yr Graduate Route visa.",              link:'/study-in-uk'          },
    { country:'Study in Germany',     image:'https://lpsglobaledu.com/wp-content/uploads/2023/03/German-University.webp',    desc:'Tuition-free public universities for engineering & tech.',          link:'/study-in-germany'     },
    { country:'Study in Singapore',   image:'https://lpsglobaledu.com/wp-content/uploads/2023/03/Singapore-University.jpg',  desc:'NUS & NTU top 15 global ranking with elite career placements.',    link:'/study-in-singapore'   },
    { country:'Study in New Zealand', image:'https://lpsglobaledu.com/wp-content/uploads/2023/03/New-zealand.jpg',           desc:'3-yr post-study work visa & pristine quality of life.',            link:'/study-in-new-zealand' },
    { country:'Study in Ireland',     image:'https://lpsglobaledu.com/wp-content/uploads/2023/03/Ireland.jpg',               desc:"EU's English-speaking Silicon Valley hub with 2-yr stay-back.",   link:'/study-in-ireland'     },
    { country:'Study in Finland',     image:'https://lpsglobaledu.com/wp-content/uploads/2023/03/Finland.jpg',               desc:'World #1 education system with generous scholarships.',            link:'/study-in-finland'     },
  ];

  return (
    <div style={{ backgroundColor:'#FFFFFF' }}>

      {/* ═══════ HERO ═══════ */}
      <section style={{
        background:'linear-gradient(145deg,#F0FAF7 0%,#EBF5FF 45%,#F4F0FF 100%)',
        position:'relative', overflow:'hidden',
        minHeight:'100vh', display:'flex', alignItems:'center',
      }}>
        {/* BG radial glows */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none',
          background:'radial-gradient(ellipse 70% 80% at 75% 50%,rgba(0,197,141,0.09) 0%,transparent 65%)' }} />
        <div style={{ position:'absolute', inset:0, pointerEvents:'none',
          background:'radial-gradient(ellipse 50% 60% at 20% 80%,rgba(14,165,233,0.07) 0%,transparent 60%)' }} />

        {/* Dot map */}
        <svg viewBox="0 0 900 500" preserveAspectRatio="xMidYMid slice"
          style={{ position:'absolute', top:0, right:0, width:'60%', height:'100%', opacity:0.04, pointerEvents:'none' }}>
          {Array.from({ length:300 }).map((_,i) => (
            <circle key={i} cx={(i%25)*38+8} cy={Math.floor(i/25)*42+8} r={2.5} fill="#0F172A" />
          ))}
        </svg>

        {/* Plane arc – hidden on mobile */}
        <svg viewBox="0 0 500 200" width="500" height="200"
          className="hide-on-mobile"
          style={{ position:'absolute', top:'8%', right:'3%', opacity:0.55, pointerEvents:'none' }}>
          <path d="M30 170 C120 120 280 20 470 45" stroke="#00C58D" strokeWidth="1.8"
            strokeDasharray="6 6" fill="none" strokeLinecap="round" />
          <g transform="translate(455,40) rotate(-25)">
            <polygon points="0,-9 5,9 0,5 -5,9" fill="#00C58D" />
          </g>
        </svg>

        {/* ── INNER ── */}
        <div className="hero-inner">

          {/* LEFT */}
          <div className="hero-left">
            {/* Badge */}
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'7px',
              backgroundColor:'rgba(255,255,255,0.85)', backdropFilter:'blur(12px)',
              border:'1.5px solid rgba(0,197,141,0.25)',
              padding:'7px 16px', borderRadius:'999px', fontSize:'0.78rem',
              fontWeight:700, color:'#0F172A', width:'fit-content',
              marginBottom:'24px', boxShadow:'0 4px 16px rgba(0,197,141,0.10)',
              flexWrap:'wrap',
            }}>
              <Plane size={13} color="#00C58D" />
              <span>Your Dream. Our Guidance.</span>
              <span style={{ color:'#00C58D' }}>Global Success.</span>
            </div>

            {/* H1 */}
            <h1 style={{ marginBottom:'20px' }}>
              <span style={{ color:'#0F172A', display:'block',
                fontFamily:'Outfit,sans-serif', fontSize:'clamp(2.2rem,5vw,4.2rem)',
                fontWeight:800, lineHeight:1.08, letterSpacing:'-1.5px' }}>
                Study Abroad.
              </span>
              <span style={{ color:'#00C58D', display:'block',
                fontFamily:'Outfit,sans-serif', fontSize:'clamp(2.2rem,5vw,4.2rem)',
                fontWeight:800, lineHeight:1.08, letterSpacing:'-1.5px' }}>
                Shape Your Future.
              </span>
            </h1>

            {/* Sub */}
            <p style={{ fontSize:'clamp(0.9rem,2.5vw,1.05rem)', color:'#475569',
              lineHeight:1.75, maxWidth:'460px', marginBottom:'32px' }}>
              Expert guidance for top universities, scholarship assistance
              and a smooth journey to your dream destination.
            </p>

            {/* Feature cards */}
            <div className="feat-grid" style={{ marginBottom:'32px' }}>
              {features.map((f,i) => {
                const Icon = f.icon;
                return (
                  <div key={i} style={{
                    display:'flex', alignItems:'center', gap:'10px',
                    backgroundColor:'rgba(255,255,255,0.78)', backdropFilter:'blur(16px)',
                    border:'1.5px solid rgba(255,255,255,0.9)', borderRadius:'14px',
                    padding:'12px 14px', boxShadow:'0 4px 20px rgba(0,0,0,0.05)',
                    transition:'all 0.25s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 28px rgba(0,197,141,0.15)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(0,0,0,0.05)'; }}
                  >
                    <div style={{
                      width:'34px', height:'34px', borderRadius:'9px', flexShrink:0,
                      background:'linear-gradient(135deg,#E8F8F3,#D1F5E8)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                    }}>
                      <Icon size={16} color="#00C58D" />
                    </div>
                    <div>
                      <div style={{ fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.82rem', color:'#0F172A', lineHeight:1.2 }}>
                        {f.label}
                      </div>
                      <div style={{ fontSize:'0.68rem', color:'#64748B', fontWeight:500, marginTop:'2px' }}>
                        {f.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="hero-ctas">
              <Link to="/destinations" className="cta-primary"
                style={{
                  display:'inline-flex', alignItems:'center', gap:'10px',
                  height:'52px', padding:'0 28px', borderRadius:'999px',
                  backgroundColor:'#00C58D', color:'#FFF',
                  fontFamily:'Outfit,sans-serif', fontWeight:700,
                  fontSize:'0.88rem', letterSpacing:'0.5px',
                  boxShadow:'0 8px 28px rgba(0,197,141,0.38)', transition:'all 0.25s',
                  whiteSpace:'nowrap',
                }}>
                EXPLORE COURSES
                <div style={{ width:'24px', height:'24px', borderRadius:'50%',
                  backgroundColor:'rgba(255,255,255,0.22)',
                  display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <ArrowRight size={13} color="#FFF" />
                </div>
              </Link>
              <Link to="/free-counseling" className="cta-outline"
                style={{
                  display:'inline-flex', alignItems:'center', gap:'9px',
                  height:'52px', padding:'0 24px', borderRadius:'999px',
                  backgroundColor:'rgba(255,255,255,0.75)', backdropFilter:'blur(12px)',
                  border:'2px solid rgba(0,197,141,0.35)', color:'#0F172A',
                  fontFamily:'Outfit,sans-serif', fontWeight:700,
                  fontSize:'0.88rem', transition:'all 0.25s', whiteSpace:'nowrap',
                }}>
                <Calendar size={16} color="#00C58D" />
                BOOK FREE CONSULTATION
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            {/* Rotating halo */}
            <div style={{
              position:'absolute', width:'440px', height:'440px', borderRadius:'50%',
              background:'conic-gradient(from 0deg,#00C58D22,#0EA5E933,#00C58D22,#00996D11,#0EA5E933,#00C58D22)',
              top:'50%', left:'50%', transform:'translate(-50%,-50%)',
              zIndex:0, animation:'rotateGrad 18s linear infinite',
            }} className="hide-on-mobile" />
            <div style={{
              position:'absolute', width:'360px', height:'360px', borderRadius:'50%',
              background:'radial-gradient(circle,rgba(0,197,141,0.18) 0%,rgba(0,197,141,0.05) 60%,transparent 100%)',
              top:'50%', left:'50%', transform:'translate(-50%,-50%)', zIndex:0,
            }} />

            {/* Glassmorphism badge: top left */}
            <div style={{
              position:'absolute', top:'48px', left:'-10px', zIndex:4,
              backgroundColor:'rgba(255,255,255,0.78)', backdropFilter:'blur(20px)',
              border:'1.5px solid rgba(255,255,255,0.95)', borderRadius:'16px',
              padding:'12px 16px', boxShadow:'0 10px 30px rgba(0,0,0,0.08)',
              display:'flex', alignItems:'center', gap:'10px', minWidth:'160px',
              animation:'floatA 5s ease-in-out infinite',
            }} className="hero-badge">
              <div style={{
                width:'36px', height:'36px', borderRadius:'10px', flexShrink:0,
                background:'linear-gradient(135deg,#00C58D,#009E6E)',
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <GraduationCap size={18} color="#FFF" />
              </div>
              <div>
                <div style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:'0.95rem', color:'#0F172A', lineHeight:1 }}>10,000+</div>
                <div style={{ fontSize:'0.68rem', color:'#64748B', fontWeight:600, marginTop:'3px' }}>Students Placed</div>
              </div>
            </div>

            {/* Glassmorphism badge: bottom right */}
            <div style={{
              position:'absolute', bottom:'80px', right:'-15px', zIndex:4,
              backgroundColor:'rgba(255,255,255,0.78)', backdropFilter:'blur(20px)',
              border:'1.5px solid rgba(255,255,255,0.95)', borderRadius:'16px',
              padding:'12px 16px', boxShadow:'0 10px 30px rgba(0,0,0,0.08)',
              display:'flex', alignItems:'center', gap:'10px', minWidth:'180px',
              animation:'floatB 6s ease-in-out infinite',
            }} className="hero-badge">
              <div style={{ display:'flex', alignItems:'center' }}>
                {['#00C58D','#0EA5E9','#F97316','#8B5CF6'].map((c,i) => (
                  <div key={i} style={{
                    width:'26px', height:'26px', borderRadius:'50%',
                    backgroundColor:c, border:'2px solid #FFF',
                    marginLeft: i===0?0:'-7px', zIndex:4-i, position:'relative',
                  }} />
                ))}
                <div style={{
                  width:'26px', height:'26px', borderRadius:'50%',
                  backgroundColor:'#E8F8F3', border:'2px solid #FFF',
                  marginLeft:'-7px', display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.55rem', fontWeight:800, color:'#00C58D', position:'relative', zIndex:0,
                }}>+2K</div>
              </div>
              <div>
                <div style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:'0.85rem', color:'#0F172A', lineHeight:1.2 }}>2,000+ Students</div>
                <div style={{ display:'flex', gap:'2px', marginTop:'4px' }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="#F59E0B">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Student image */}
            <div style={{ position:'relative', zIndex:2, width:'100%', height:'100%',
              display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img
                src="/hero_study_abroad.png"
                alt="LPS Global Edu Student"
                style={{
                  height:'85%', maxHeight:'520px', width:'auto',
                  objectFit:'contain', objectPosition:'top center',
                  transform:'translateY(-15px)',
                  filter:'drop-shadow(0 24px 36px rgba(0,0,0,0.16))',
                  animation:'floatStudent 5s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>

        <style>{`
          /* ── Hero layout ── */
          .hero-inner {
            max-width: 1400px; margin: 0 auto;
            padding: 48px 80px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 64px;
            min-height: 100vh;
          }
          .hero-left  { flex: 0 0 48%; }
          .hero-right { flex: 0 0 46%; position: relative; min-height: 540px; display: flex; align-items: center; justify-content: center; }

          /* Feature grid */
          .feat-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          /* CTA row */
          .hero-ctas {
            display: flex;
            align-items: center;
            gap: 14px;
            flex-wrap: wrap;
          }

          .cta-primary:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 14px 36px rgba(0,197,141,0.48) !important;
          }
          .cta-outline:hover {
            transform: translateY(-3px) !important;
            background-color: rgba(0,197,141,0.06) !important;
            border-color: rgba(0,197,141,0.6) !important;
          }

          /* Keyframes */
          @keyframes rotateGrad {
            from { transform: translate(-50%,-50%) rotate(0deg); }
            to   { transform: translate(-50%,-50%) rotate(360deg); }
          }
          @keyframes floatStudent {
            0%,100% { transform: translateY(-15px); }
            50%      { transform: translateY(-19px); }
          }
          @keyframes floatA {
            0%,100% { transform: translateY(0); }
            50%      { transform: translateY(-8px); }
          }
          @keyframes floatB {
            0%,100% { transform: translateY(0); }
            50%      { transform: translateY(8px); }
          }

          /* ── TABLET (≤1100px) ── */
          @media (max-width: 1100px) {
            .hero-inner { padding: 40px 40px; gap: 40px; }
          }

          /* ── TABLET PORTRAIT (≤900px) ── */
          @media (max-width: 900px) {
            .hero-inner {
              flex-direction: column;
              padding: 40px 24px 0;
              gap: 0;
              min-height: unset;
              align-items: flex-start;
            }
            .hero-left  { flex: none; width: 100%; }
            .hero-right {
              flex: none; width: 100%;
              min-height: 320px;
              margin-top: 32px;
            }
            .hero-badge { display: none !important; }
          }

          /* ── MOBILE (≤640px) ── */
          @media (max-width: 640px) {
            .hero-inner { padding: 32px 16px 0; }
            .feat-grid  { grid-template-columns: 1fr 1fr; gap: 8px; }
            .hero-ctas  { flex-direction: column; align-items: stretch; }
            .hero-ctas a { justify-content: center; width: 100%; }
            .hero-right { min-height: 260px; }
          }

          /* ── SMALL MOBILE (≤480px) ── */
          @media (max-width: 480px) {
            .feat-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      {/* ── Ticker ── */}
      <TickerBanner />

      {/* ═══════ DESTINATIONS ═══════ */}
      <section style={{ padding:'72px 0', backgroundColor:'#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'48px' }}>
            <div className="section-subtitle">GLOBAL REACH</div>
            <h2 className="section-title" style={{ margin:'0 auto', textAlign:'center' }}>
              Explore Top Study Abroad Destinations
            </h2>
            <p style={{ color:'#64748B', maxWidth:'560px', margin:'12px auto 0', fontSize:'0.95rem', lineHeight:1.75 }}>
              We partner with 1,500+ accredited universities worldwide.
            </p>
          </div>

          <div className="dest-grid">
            {destinations.map((d,i) => (
              <div key={i} className="dest-card"
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 18px 38px rgba(0,0,0,0.11)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 26px rgba(0,0,0,0.05)'; }}
              >
                <div style={{ height:'190px', position:'relative', overflow:'hidden' }}>
                  <img src={d.image} alt={d.country} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                  <div style={{
                    position:'absolute', top:'12px', left:'12px',
                    backgroundColor:'#00C58D', color:'#FFF',
                    fontFamily:'Outfit,sans-serif', fontWeight:700,
                    padding:'4px 12px', borderRadius:'999px', fontSize:'0.8rem',
                  }}>{d.country}</div>
                </div>
                <div style={{ padding:'20px', display:'flex', flexDirection:'column', flexGrow:1 }}>
                  <p style={{ color:'#64748B', fontSize:'0.87rem', lineHeight:1.65, flexGrow:1, marginBottom:'16px' }}>{d.desc}</p>
                  <Link to={d.link} style={{
                    display:'inline-flex', alignItems:'center', gap:'5px',
                    color:'#00C58D', fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.83rem',
                  }}>EXPLORE DETAILS <ArrowRight size={12} /></Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center', marginTop:'44px' }}>
            <Link to="/destinations" style={{
              display:'inline-flex', alignItems:'center', gap:'10px',
              height:'50px', padding:'0 32px', borderRadius:'999px',
              backgroundColor:'#00C58D', color:'#FFF',
              fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.88rem',
              boxShadow:'0 8px 22px rgba(0,197,141,0.30)',
            }}>
              VIEW ALL DESTINATIONS <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <style>{`
          .dest-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .dest-card {
            border-radius: 20px;
            border: 1px solid #F1F5F9;
            box-shadow: 0 8px 26px rgba(0,0,0,0.05);
            overflow: hidden;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            background: #FFF;
          }
          @media (max-width: 900px) {
            .dest-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          }
          @media (max-width: 540px) {
            .dest-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor:'#00C58D', padding:'56px 0' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
            flexWrap:'wrap', gap:'24px' }}>
            <div>
              <div style={{
                backgroundColor:'rgba(255,255,255,0.2)', padding:'5px 16px',
                borderRadius:'999px', display:'inline-block',
                fontSize:'0.8rem', fontWeight:700, color:'#FFF', marginBottom:'12px',
              }}>100% FREE COUNSELING</div>
              <h2 style={{ fontFamily:'Outfit,sans-serif',
                fontSize:'clamp(1.5rem,3.5vw,2.2rem)',
                fontWeight:800, color:'#FFF', lineHeight:1.2, maxWidth:'500px' }}>
                Ready to Study Abroad at Your Dream University?
              </h2>
            </div>
            <Link to="/free-counseling" style={{
              backgroundColor:'#0F172A', color:'#FFF',
              fontFamily:'Outfit,sans-serif', fontWeight:700,
              padding:'15px 30px', borderRadius:'999px',
              display:'inline-flex', alignItems:'center', gap:'10px',
              fontSize:'0.9rem', boxShadow:'0 12px 28px rgba(15,23,42,0.28)',
              flexShrink:0, whiteSpace:'nowrap',
            }}>
              BOOK FREE CONSULTATION <ArrowRight size={15} color="#00C58D" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
