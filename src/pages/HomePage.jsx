import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Globe, GraduationCap, FileText, Users,
  Plane, Calendar, CheckCircle2
} from 'lucide-react';
import TickerBanner from '../components/TickerBanner';

export default function HomePage() {

  const features = [
    { icon: Globe,         label: 'Global Universities',     sub: '1,500+ Institutions'    },
    { icon: GraduationCap, label: 'Scholarship Assistance',  sub: 'Tuition Waivers & Aid'  },
    { icon: FileText,      label: 'Visa & Admission Support', sub: 'End-to-End Guidance'   },
    { icon: Users,         label: 'Expert Counselors',        sub: '10+ Years Experience'  },
  ];

  const destinations = [
    { country: 'Study in USA',         image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/USA-UNIVERSITY.jpg',        desc: 'STEM programs, 3-yr OPT work permit & Ivy League access.',          link: '/study-in-usa'         },
    { country: 'Study in Australia',   image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/AUSTRALIA-UNIVERSITY.webp', desc: 'Group of Eight universities, up to 4-yr post-study work rights.',    link: '/study-in-australia'   },
    { country: 'Study in Canada',      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Canada-University.jpg',     desc: 'PGWP work permits, co-op programs & direct PR pathways.',           link: '/study-in-canada'      },
    { country: 'Study in UK',          image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/UK-university.jpg',         desc: "1-Year Master's degrees & 2-yr Graduate Route visa.",               link: '/study-in-uk'          },
    { country: 'Study in Germany',     image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/German-University.webp',    desc: 'Tuition-free public universities for engineering & tech.',           link: '/study-in-germany'     },
    { country: 'Study in Singapore',   image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Singapore-University.jpg',  desc: 'NUS & NTU top 15 global ranking with elite career placements.',     link: '/study-in-singapore'   },
    { country: 'Study in New Zealand', image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/New-zealand.jpg',           desc: '3-yr post-study work visa & pristine quality of life.',             link: '/study-in-new-zealand' },
    { country: 'Study in Ireland',     image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Ireland.jpg',               desc: "EU's English-speaking Silicon Valley hub with 2-yr stay-back.",     link: '/study-in-ireland'     },
    { country: 'Study in Finland',     image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Finland.jpg',               desc: 'World #1 education system with 100% tuition waiver scholarships.',  link: '/study-in-finland'     },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>

      {/* ═══════════════════════════════════════════════════════════════
          PREMIUM HERO — 100vh, Framer-quality, Apple-level spacing
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        minHeight:       '100vh',
        background:      'linear-gradient(145deg, #F0FAF7 0%, #EBF5FF 45%, #F4F0FF 100%)',
        position:        'relative',
        overflow:        'hidden',
        display:         'flex',
        alignItems:      'center',
      }}>

        {/* ── BG layer 1: large soft radial ── */}
        <div style={{
          position:        'absolute', inset: 0, pointerEvents: 'none',
          background:      'radial-gradient(ellipse 70% 80% at 75% 50%, rgba(0,197,141,0.09) 0%, transparent 65%)',
        }} />
        <div style={{
          position:        'absolute', inset: 0, pointerEvents: 'none',
          background:      'radial-gradient(ellipse 50% 60% at 20% 80%, rgba(14,165,233,0.07) 0%, transparent 60%)',
        }} />

        {/* ── BG layer 2: world-map dot grid ── */}
        <svg
          viewBox="0 0 900 500" preserveAspectRatio="xMidYMid slice"
          style={{ position:'absolute', top:0, right:0, width:'60%', height:'100%', opacity:0.04, pointerEvents:'none' }}
        >
          {Array.from({ length: 300 }).map((_, i) => (
            <circle key={i}
              cx={(i % 25) * 38 + 8}
              cy={Math.floor(i / 25) * 42 + 8}
              r={2.5} fill="#0F172A" />
          ))}
        </svg>

        {/* ── BG layer 3: animated dashed airplane arc ── */}
        <svg
          viewBox="0 0 500 200" width="500" height="200"
          style={{ position:'absolute', top:'8%', right:'3%', opacity:0.55, pointerEvents:'none' }}
        >
          <path
            d="M30 170 C120 120 280 20 470 45"
            stroke="#00C58D" strokeWidth="1.8"
            strokeDasharray="6 6" fill="none" strokeLinecap="round"
            className="hero-dash-path"
          />
          <g transform="translate(455,40) rotate(-25)">
            <polygon points="0,-9 5,9 0,5 -5,9" fill="#00C58D" />
          </g>
        </svg>

        {/* ═══ INNER CONTAINER ═══ */}
        <div style={{
          maxWidth:        '1400px',
          margin:          '0 auto',
          paddingInline:   '80px',
          width:           '100%',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          gap:             '80px',
          paddingTop:      '40px',
          paddingBottom:   '40px',
        }} className="hero-container">

          {/* ═══════════════════════════
              LEFT COLUMN
          ═══════════════════════════ */}
          <div style={{
            flex:      '0 0 46%',
            display:   'flex',
            flexDirection: 'column',
            gap:       '0',
          }} className="hero-left">

            {/* Badge pill */}
            <div style={{
              display:         'inline-flex',
              alignItems:      'center',
              gap:             '8px',
              backgroundColor: 'rgba(255,255,255,0.85)',
              backdropFilter:  'blur(12px)',
              border:          '1.5px solid rgba(0,197,141,0.25)',
              padding:         '8px 18px',
              borderRadius:    '999px',
              fontSize:        '0.8rem',
              fontWeight:      700,
              color:           '#0F172A',
              width:           'fit-content',
              marginBottom:    '32px',
              boxShadow:       '0 4px 16px rgba(0,197,141,0.12)',
            }}>
              <Plane size={14} color="#00C58D" />
              <span>Your Dream. Our Guidance.</span>
              <span style={{ color:'#00C58D' }}>Global Success.</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily:    'Outfit, sans-serif',
              fontSize:      'clamp(2.8rem, 4.5vw, 4.2rem)',
              fontWeight:    800,
              lineHeight:    1.08,
              letterSpacing: '-2px',
              marginBottom:  '24px',
            }}>
              <span style={{ color:'#0F172A', display:'block' }}>Study Abroad.</span>
              <span style={{ color:'#00C58D', display:'block' }}>Shape Your Future.</span>
            </h1>

            {/* Sub-copy */}
            <p style={{
              fontSize:     '1.05rem',
              color:        '#475569',
              lineHeight:   1.75,
              maxWidth:     '460px',
              marginBottom: '40px',
            }}>
              Expert guidance for top universities, scholarship assistance
              and a smooth journey to your dream destination.
            </p>

            {/* Feature Cards — 2×2 grid */}
            <div style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '12px',
              marginBottom:        '40px',
            }}>
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="feat-card"
                    style={{
                      display:         'flex',
                      alignItems:      'center',
                      gap:             '12px',
                      backgroundColor: 'rgba(255,255,255,0.78)',
                      backdropFilter:  'blur(16px)',
                      border:          '1.5px solid rgba(255,255,255,0.9)',
                      borderRadius:    '16px',
                      padding:         '14px 16px',
                      boxShadow:       '0 4px 20px rgba(0,0,0,0.05)',
                      transition:      'all 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,197,141,0.15)';
                      e.currentTarget.style.borderColor = 'rgba(0,197,141,0.3)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.9)';
                    }}
                  >
                    <div style={{
                      width:'38px', height:'38px', borderRadius:'10px', flexShrink:0,
                      background:'linear-gradient(135deg,#E8F8F3,#D1F5E8)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                    }}>
                      <Icon size={18} color="#00C58D" />
                    </div>
                    <div>
                      <div style={{ fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.85rem', color:'#0F172A', lineHeight:1.2 }}>
                        {f.label}
                      </div>
                      <div style={{ fontSize:'0.72rem', color:'#64748B', fontWeight:500, marginTop:'2px' }}>
                        {f.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div style={{ display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap' }}>
              <Link
                to="/destinations"
                className="cta-primary"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '12px',
                  height:         '56px',
                  padding:        '0 32px',
                  borderRadius:   '999px',
                  backgroundColor:'#00C58D',
                  color:          '#FFFFFF',
                  fontFamily:     'Outfit, sans-serif',
                  fontWeight:     700,
                  fontSize:       '0.9rem',
                  letterSpacing:  '0.5px',
                  boxShadow:      '0 8px 28px rgba(0,197,141,0.38)',
                  transition:     'all 0.25s ease',
                }}
              >
                EXPLORE COURSES
                <div style={{
                  width:'28px', height:'28px', borderRadius:'50%',
                  backgroundColor:'rgba(255,255,255,0.22)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  <ArrowRight size={15} color="#FFFFFF" />
                </div>
              </Link>

              <Link
                to="/free-counseling"
                className="cta-outline"
                style={{
                  display:        'inline-flex',
                  alignItems:     'center',
                  gap:            '10px',
                  height:         '56px',
                  padding:        '0 28px',
                  borderRadius:   '999px',
                  backgroundColor:'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(12px)',
                  border:         '2px solid rgba(0,197,141,0.35)',
                  color:          '#0F172A',
                  fontFamily:     'Outfit, sans-serif',
                  fontWeight:     700,
                  fontSize:       '0.9rem',
                  transition:     'all 0.25s ease',
                }}
              >
                <Calendar size={17} color="#00C58D" />
                BOOK FREE CONSULTATION
              </Link>
            </div>
          </div>

          {/* ═══════════════════════════
              RIGHT COLUMN — Illustration
          ═══════════════════════════ */}
          <div style={{
            flex:            '0 0 48%',
            display:         'flex',
            justifyContent:  'center',
            alignItems:      'center',
            position:        'relative',
            height:          '100%',
            minHeight:       '600px',
          }} className="hero-right">

            {/* ── Slow-rotating gradient circle (backdrop) ── */}
            <div style={{
              position:        'absolute',
              width:           '520px',
              height:          '520px',
              borderRadius:    '50%',
              background:      'conic-gradient(from 0deg, #00C58D22, #0EA5E933, #00C58D22, #00996D11, #0EA5E933, #00C58D22)',
              top:             '50%',
              left:            '50%',
              transform:       'translate(-50%,-50%)',
              zIndex:          0,
              animation:       'rotateGrad 18s linear infinite',
            }} />

            {/* Inner solid circle */}
            <div style={{
              position:        'absolute',
              width:           '440px',
              height:          '440px',
              borderRadius:    '50%',
              background:      'radial-gradient(circle, rgba(0,197,141,0.18) 0%, rgba(0,197,141,0.05) 60%, transparent 100%)',
              top:             '50%',
              left:            '50%',
              transform:       'translate(-50%,-50%)',
              zIndex:          0,
            }} />

            {/* ── Glassmorphism accent card – top left ── */}
            <div style={{
              position:        'absolute',
              top:             '60px',
              left:            '-10px',
              zIndex:          4,
              backgroundColor: 'rgba(255,255,255,0.72)',
              backdropFilter:  'blur(20px)',
              border:          '1.5px solid rgba(255,255,255,0.95)',
              borderRadius:    '18px',
              padding:         '14px 18px',
              boxShadow:       '0 10px 30px rgba(0,0,0,0.08)',
              display:         'flex',
              alignItems:      'center',
              gap:             '12px',
              minWidth:        '175px',
              animation:       'floatA 5s ease-in-out infinite',
            }}>
              <div style={{
                width:'40px', height:'40px', borderRadius:'12px', flexShrink:0,
                background:'linear-gradient(135deg,#00C58D,#009E6E)',
                display:'flex', alignItems:'center', justifyContent:'center',
                boxShadow:'0 6px 16px rgba(0,197,141,0.35)',
              }}>
                <GraduationCap size={20} color="#FFF" />
              </div>
              <div>
                <div style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:'1rem', color:'#0F172A', lineHeight:1 }}>10,000+</div>
                <div style={{ fontSize:'0.72rem', color:'#64748B', fontWeight:600, marginTop:'3px' }}>Students Placed</div>
              </div>
            </div>

            {/* ── Glassmorphism accent card – bottom right ── */}
            <div style={{
              position:        'absolute',
              bottom:          '90px',
              right:           '-20px',
              zIndex:          4,
              backgroundColor: 'rgba(255,255,255,0.72)',
              backdropFilter:  'blur(20px)',
              border:          '1.5px solid rgba(255,255,255,0.95)',
              borderRadius:    '18px',
              padding:         '14px 18px',
              boxShadow:       '0 10px 30px rgba(0,0,0,0.08)',
              display:         'flex',
              alignItems:      'center',
              gap:             '12px',
              minWidth:        '195px',
              animation:       'floatB 6s ease-in-out infinite',
            }}>
              <div style={{ display:'flex', alignItems:'center' }}>
                {['#00C58D','#0EA5E9','#F97316','#8B5CF6'].map((c, i) => (
                  <div key={i} style={{
                    width:'30px', height:'30px', borderRadius:'50%',
                    backgroundColor:c, border:'2px solid #FFF',
                    marginLeft: i === 0 ? 0 : '-8px',
                    zIndex: 4 - i, position:'relative',
                  }} />
                ))}
                <div style={{
                  width:'30px', height:'30px', borderRadius:'50%',
                  backgroundColor:'#E8F8F3', border:'2px solid #FFF',
                  marginLeft:'-8px', display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize:'0.58rem', fontWeight:800, color:'#00C58D', position:'relative', zIndex:0,
                }}>+2K</div>
              </div>
              <div>
                <div style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:'0.9rem', color:'#0F172A', lineHeight:1.2 }}>2,000+ Students</div>
                <div style={{ display:'flex', gap:'2px', marginTop:'5px' }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#F59E0B">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Landmark badge – top right ── */}
            <div style={{
              position:        'absolute',
              top:             '30px',
              right:           '10px',
              zIndex:          4,
              backgroundColor: 'rgba(255,255,255,0.72)',
              backdropFilter:  'blur(20px)',
              border:          '1.5px solid rgba(255,255,255,0.95)',
              borderRadius:    '14px',
              padding:         '10px 16px',
              boxShadow:       '0 8px 24px rgba(0,0,0,0.07)',
              display:         'flex',
              alignItems:      'center',
              gap:             '8px',
              animation:       'floatC 7s ease-in-out infinite',
            }}>
              <Globe size={18} color="#00C58D" />
              <span style={{ fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.82rem', color:'#0F172A' }}>
                50+ Countries
              </span>
            </div>

            {/* ── Student photo — the focal point ── */}
            <div style={{
              position:  'relative',
              zIndex:    2,
              display:   'flex',
              alignItems:'center',
              justifyContent:'center',
              width:     '100%',
              height:    '100%',
            }}>
              <img
                src="/hero_study_abroad.png"
                alt="LPS Global Edu – Study Abroad Student"
                style={{
                  height:          '85%',
                  maxHeight:       '580px',
                  width:           'auto',
                  objectFit:       'contain',
                  objectPosition:  'top center',
                  transform:       'translateY(-15px)',
                  filter:          'drop-shadow(0 28px 40px rgba(0,0,0,0.16))',
                  animation:       'floatStudent 5s ease-in-out infinite',
                  display:         'block',
                }}
              />
            </div>

          </div>
        </div>

        {/* Animation keyframes */}
        <style>{`
          @keyframes rotateGrad {
            from { transform: translate(-50%,-50%) rotate(0deg); }
            to   { transform: translate(-50%,-50%) rotate(360deg); }
          }
          @keyframes floatStudent {
            0%,100% { transform: translateY(-15px); }
            50%      { transform: translateY(-19px); }
          }
          @keyframes floatA {
            0%,100% { transform: translateY(0px); }
            50%      { transform: translateY(-8px); }
          }
          @keyframes floatB {
            0%,100% { transform: translateY(0px); }
            50%      { transform: translateY(8px); }
          }
          @keyframes floatC {
            0%,100% { transform: translateY(0px); }
            50%      { transform: translateY(-6px); }
          }
          @keyframes fadeInUp {
            from { opacity:0; transform:translateY(24px); }
            to   { opacity:1; transform:translateY(0); }
          }
          .hero-left > * {
            animation: fadeInUp 0.6s ease both;
          }
          .hero-left > *:nth-child(1) { animation-delay: 0.05s; }
          .hero-left > *:nth-child(2) { animation-delay: 0.15s; }
          .hero-left > *:nth-child(3) { animation-delay: 0.22s; }
          .hero-left > *:nth-child(4) { animation-delay: 0.30s; }
          .hero-left > *:nth-child(5) { animation-delay: 0.38s; }

          .cta-primary:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 14px 36px rgba(0,197,141,0.48) !important;
          }
          .cta-outline:hover {
            transform: translateY(-3px) !important;
            background-color: rgba(0,197,141,0.06) !important;
            border-color: rgba(0,197,141,0.6) !important;
          }

          @media (max-width: 1100px) {
            .hero-container {
              padding-inline: 40px !important;
              gap: 48px !important;
            }
          }
          @media (max-width: 900px) {
            .hero-container {
              flex-direction: column !important;
              padding-inline: 24px !important;
              gap: 40px !important;
            }
            .hero-left  { flex: none !important; width: 100% !important; }
            .hero-right { flex: none !important; width: 100% !important; min-height: 360px !important; }
          }
        `}</style>
      </section>

      {/* ── Ticker ── */}
      <TickerBanner />

      {/* ═══════════════════════════════════════
          DESTINATIONS GRID
      ═══════════════════════════════════════ */}
      <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 40px' }}>
          <div style={{ textAlign:'center', marginBottom:'60px' }}>
            <div className="section-subtitle">GLOBAL REACH</div>
            <h2 className="section-title" style={{ margin:'0 auto' }}>
              Explore Top Study Abroad Destinations
            </h2>
            <p style={{ color:'#64748B', maxWidth:'580px', margin:'12px auto 0', fontSize:'0.97rem', lineHeight:1.75 }}>
              We partner with 1,500+ accredited universities worldwide to help you choose the ideal country and course.
            </p>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'28px',
          }} className="dest-grid">
            {destinations.map((d, i) => (
              <div key={i} style={{
                borderRadius:'22px', border:'1px solid #F1F5F9',
                boxShadow:'0 8px 26px rgba(0,0,0,0.05)',
                overflow:'hidden', transition:'all 0.3s ease',
                display:'flex', flexDirection:'column', backgroundColor:'#FFFFFF',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-7px)'; e.currentTarget.style.boxShadow='0 18px 38px rgba(0,0,0,0.11)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 26px rgba(0,0,0,0.05)'; }}
              >
                <div style={{ height:'210px', position:'relative', overflow:'hidden' }}>
                  <img src={d.image} alt={d.country} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                  <div style={{
                    position:'absolute', top:'14px', left:'14px',
                    backgroundColor:'#00C58D', color:'#FFF',
                    fontFamily:'Outfit,sans-serif', fontWeight:700,
                    padding:'5px 14px', borderRadius:'999px', fontSize:'0.82rem',
                  }}>{d.country}</div>
                </div>
                <div style={{ padding:'24px', display:'flex', flexDirection:'column', flexGrow:1 }}>
                  <p style={{ color:'#64748B', fontSize:'0.88rem', lineHeight:1.65, flexGrow:1, marginBottom:'18px' }}>{d.desc}</p>
                  <Link to={d.link} style={{
                    display:'inline-flex', alignItems:'center', gap:'6px',
                    color:'#00C58D', fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.85rem',
                  }}>
                    EXPLORE DETAILS <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign:'center', marginTop:'52px' }}>
            <Link to="/destinations" style={{
              display:'inline-flex', alignItems:'center', gap:'10px',
              height:'52px', padding:'0 36px', borderRadius:'999px',
              backgroundColor:'#00C58D', color:'#FFF',
              fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.9rem',
              boxShadow:'0 8px 22px rgba(0,197,141,0.30)',
              transition:'all 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 32px rgba(0,197,141,0.42)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 22px rgba(0,197,141,0.30)'; }}
            >
              VIEW ALL DESTINATIONS & UNIVERSITIES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor:'#00C58D', padding:'72px 0' }}>
        <div style={{ maxWidth:'1280px', margin:'0 auto', padding:'0 40px' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'32px' }}>
            <div>
              <div style={{
                backgroundColor:'rgba(255,255,255,0.2)', padding:'5px 18px',
                borderRadius:'999px', display:'inline-block',
                fontSize:'0.82rem', fontWeight:700, color:'#FFF', marginBottom:'14px',
              }}>100% FREE COUNSELING</div>
              <h2 style={{ fontFamily:'Outfit,sans-serif', fontSize:'2.2rem', fontWeight:800, color:'#FFF', lineHeight:1.2, maxWidth:'520px' }}>
                Ready to Study Abroad at Your Dream University?
              </h2>
            </div>
            <Link to="/free-counseling" style={{
              backgroundColor:'#0F172A', color:'#FFF',
              fontFamily:'Outfit,sans-serif', fontWeight:700,
              padding:'16px 36px', borderRadius:'999px',
              display:'inline-flex', alignItems:'center', gap:'10px',
              fontSize:'0.92rem', boxShadow:'0 12px 28px rgba(15,23,42,0.28)', flexShrink:0,
              transition:'all 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; }}
            >
              BOOK FREE CONSULTATION NOW <ArrowRight size={16} color="#00C58D" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .dest-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          .dest-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
