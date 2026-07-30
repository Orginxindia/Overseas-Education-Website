import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Globe, GraduationCap, Search, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ctaHovered, setCtaHovered]     = useState(false);
  const dropdownRef                      = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const countryLinks = [
    { name: 'Study in USA',         path: '/study-in-usa'         },
    { name: 'Study in Australia',   path: '/study-in-australia'   },
    { name: 'Study in Canada',      path: '/study-in-canada'      },
    { name: 'Study in UK',          path: '/study-in-uk'          },
    { name: 'Study in Singapore',   path: '/study-in-singapore'   },
    { name: 'Study in Germany',     path: '/study-in-germany'     },
    { name: 'Study in New Zealand', path: '/study-in-new-zealand' },
    { name: 'Study in Ireland',     path: '/study-in-ireland'     },
    { name: 'Study in Finland',     path: '/study-in-finland'     },
  ];

  return (
    <>
      {/* Wrapper — relative in flow, shrinks on scroll */}
      <div style={{
        position:        'relative',
        zIndex:          'unset',
        padding:         isScrolled ? '8px 16px' : '14px 16px',
        backgroundColor: '#F4F8FF',
        transition:      'padding 0.3s ease',
      }}>
        {/* ── Pill Card ── */}
        <div style={{
          maxWidth:        '1240px',
          margin:          '0 auto',
          borderRadius:    '16px',
          backgroundColor: '#FFFFFF',
          boxShadow:       isScrolled
            ? '0 8px 36px rgba(0,0,0,0.13)'
            : '0 2px 20px rgba(0,0,0,0.07)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          height:          '72px',
          padding:         '0 20px',
          transition:      'box-shadow 0.3s ease',
          position:        'relative',
        }}>

          {/* ── LOGO ── */}
          <Link to="/" onClick={() => setMobileOpen(false)} style={{
            display:'flex', alignItems:'center', gap:'12px',
            flexShrink:0, textDecoration:'none',
          }}>
            <div style={{
              width:'46px', height:'46px', borderRadius:'12px', flexShrink:0,
              background:'linear-gradient(145deg,#00C58D,#009E6E)',
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow:'0 4px 14px rgba(0,197,141,0.28)', position:'relative',
            }}>
              <Globe size={16} color="rgba(255,255,255,0.6)"
                style={{ position:'absolute', bottom:'6px', left:'6px' }} />
              <GraduationCap size={22} color="#FFFFFF"
                style={{ position:'absolute', top:'6px', right:'6px' }} />
            </div>
            <div style={{ display:'flex', flexDirection:'column' }}>
              <span style={{
                fontFamily:'Outfit,sans-serif', fontSize:'1.25rem',
                fontWeight:800, color:'#0F172A', lineHeight:1.1,
                letterSpacing:'-0.3px', whiteSpace:'nowrap',
              }}>
                LPS Global <span style={{ color:'#00C58D' }}>Edu</span>
              </span>
              <span className="hide-on-mobile" style={{
                fontFamily:'Plus Jakarta Sans,sans-serif',
                fontSize:'0.65rem', fontWeight:600,
                color:'#94A3B8', letterSpacing:'0.2px',
                marginTop:'2px', whiteSpace:'nowrap',
              }}>
                Trusted Overseas Education Partner
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV (center) ── */}
          <nav className="pill-nav" style={{
            display:'flex', alignItems:'center', gap:'32px',
            position:'absolute', left:'50%', transform:'translateX(-50%)',
          }}>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>
              Home
            </NavLink>

            {/* All Courses */}
            <div ref={dropdownRef} style={{ position:'relative' }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button onClick={() => setDropdownOpen(o => !o)} className="pnl"
                style={{ display:'inline-flex', alignItems:'center', gap:'3px',
                  background:'none', border:'none', cursor:'pointer', padding:0 }}>
                All Courses
                <ChevronDown size={13} style={{
                  transition:'transform 0.2s',
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                }} />
              </button>

              {/* Bridge */}
              <div style={{
                position:'absolute', top:'100%', left:'-20px', right:'-20px',
                height:'14px', pointerEvents: dropdownOpen ? 'auto' : 'none',
              }} />

              {/* Dropdown */}
              <div style={{
                position:'absolute', top:'calc(100% + 14px)', left:'50%',
                backgroundColor:'#FFFFFF', borderRadius:'14px',
                padding:'8px 0', boxShadow:'0 16px 44px rgba(0,0,0,0.12)',
                border:'1px solid #EEF2F7', minWidth:'210px', zIndex:300,
                opacity: dropdownOpen ? 1 : 0,
                visibility: dropdownOpen ? 'visible' : 'hidden',
                transform: dropdownOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
                transition:'opacity 0.18s,transform 0.18s,visibility 0s linear '+(dropdownOpen?'0s':'0.18s'),
                pointerEvents: dropdownOpen ? 'auto' : 'none',
              }}>
                <Link to="/all-courses" onClick={() => setDropdownOpen(false)} style={{
                  display:'block', padding:'10px 18px 11px',
                  fontSize:'0.73rem', fontWeight:800, color:'#00C58D',
                  fontFamily:'Outfit,sans-serif', letterSpacing:'0.6px',
                  textTransform:'uppercase', borderBottom:'1px solid #F1F5F9', marginBottom:'4px',
                }}>VIEW ALL COURSES →</Link>
                {countryLinks.map(item => (
                  <Link key={item.path} to={item.path} onClick={() => setDropdownOpen(false)}
                    style={{ display:'block', padding:'8px 18px',
                      fontSize:'0.86rem', fontWeight:600, color:'#334155',
                      fontFamily:'Plus Jakarta Sans,sans-serif', transition:'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor='#F0FBF7'; e.currentTarget.style.color='#00C58D'; e.currentTarget.style.paddingLeft='22px'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#334155'; e.currentTarget.style.paddingLeft='18px'; }}
                  >{item.name}</Link>
                ))}
              </div>
            </div>

            <NavLink to="/about-us"       className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>About Us</NavLink>
            <NavLink to="/services"       className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>Services</NavLink>
            <NavLink to="/contact"        className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>Contact</NavLink>
            <NavLink to="/privacy-policy" className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>Privacy Policy</NavLink>
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div style={{ display:'flex', alignItems:'center', gap:'12px', flexShrink:0 }}>
            {/* Search – hide on small mobile */}
            <button onClick={onOpenSearch} title="Search" className="search-btn hide-xs"
              style={{
                width:'40px', height:'40px', borderRadius:'50%',
                backgroundColor:'#F4F7FA', border:'1.5px solid transparent',
                display:'flex', alignItems:'center', justifyContent:'center',
                color:'#475569', cursor:'pointer', transition:'all 0.2s',
              }}>
              <Search size={17} />
            </button>

            {/* CTA */}
            <Link to="/free-counseling"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
              style={{
                display:'inline-flex', alignItems:'center', gap:'8px',
                height:'44px', padding:'0 20px',
                borderRadius:'999px', backgroundColor:'#00C58D', color:'#FFF',
                fontFamily:'Outfit,sans-serif', fontWeight:700,
                fontSize:'0.85rem', letterSpacing:'0.4px', flexShrink:0, whiteSpace:'nowrap',
                boxShadow: ctaHovered ? '0 10px 26px rgba(0,197,141,0.45)' : '0 4px 16px rgba(0,197,141,0.28)',
                transform: ctaHovered ? 'translateY(-1px)' : 'translateY(0)',
                transition:'all 0.22s',
              }}>
              <span className="hide-xs">APPLY NOW</span>
              <span className="show-xs" style={{ display:'none' }}>Apply</span>
              <div style={{
                width:'22px', height:'22px', borderRadius:'50%',
                backgroundColor:'rgba(255,255,255,0.22)',
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <ArrowRight size={12} color="#FFF" />
              </div>
            </Link>

            {/* Mobile hamburger */}
            <button className="mob-toggle" onClick={() => setMobileOpen(!mobileOpen)}
              style={{ display:'none', padding:'6px', color:'#0F172A', flexShrink:0 }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE DRAWER ── */}
        {mobileOpen && (
          <div style={{
            maxWidth:'1240px', margin:'8px auto 0',
            borderRadius:'14px', backgroundColor:'#FFFFFF',
            boxShadow:'0 8px 30px rgba(0,0,0,0.10)',
            overflow:'hidden',
          }}>
            {/* Search bar in drawer */}
            <div style={{ padding:'16px 20px 0' }}>
              <button onClick={() => { onOpenSearch(); setMobileOpen(false); }}
                style={{
                  width:'100%', display:'flex', alignItems:'center', gap:'10px',
                  backgroundColor:'#F4F7FA', border:'1px solid #E2E8F0',
                  borderRadius:'10px', padding:'10px 14px',
                  color:'#64748B', fontFamily:'Plus Jakarta Sans,sans-serif',
                  fontSize:'0.875rem',
                }}>
                <Search size={16} color="#00C58D" />
                Search destinations, courses...
              </button>
            </div>

            {/* Nav links */}
            <div style={{ padding:'12px 0 8px' }}>
              {[
                { label:'Home',           path:'/'               },
                { label:'All Courses',    path:'/all-courses'    },
                { label:'About Us',       path:'/about-us'       },
                { label:'Services',       path:'/services'       },
                { label:'Contact',        path:'/contact'        },
                { label:'Privacy Policy', path:'/privacy-policy' },
              ].map(item => (
                <NavLink key={item.path} to={item.path} onClick={() => setMobileOpen(false)}
                  style={({ isActive }) => ({
                    display:'block', padding:'12px 20px',
                    fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.95rem',
                    color: isActive ? '#00C58D' : '#0F172A',
                    borderLeft: isActive ? '3px solid #00C58D' : '3px solid transparent',
                    backgroundColor: isActive ? '#F0FBF7' : 'transparent',
                    transition:'all 0.15s',
                  })}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Country sub-links */}
            <div style={{ borderTop:'1px solid #F1F5F9', padding:'12px 0 8px' }}>
              <div style={{ padding:'4px 20px 8px', fontSize:'0.72rem', fontWeight:800, color:'#94A3B8', letterSpacing:'1px', textTransform:'uppercase' }}>
                Study Destinations
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0' }}>
                {countryLinks.map(c => (
                  <Link key={c.path} to={c.path} onClick={() => setMobileOpen(false)}
                    style={{ display:'block', padding:'9px 20px', fontSize:'0.85rem', color:'#475569', fontWeight:600 }}
                    onMouseEnter={e => { e.currentTarget.style.color='#00C58D'; e.currentTarget.style.backgroundColor='#F8FFFE'; }}
                    onMouseLeave={e => { e.currentTarget.style.color='#475569'; e.currentTarget.style.backgroundColor='transparent'; }}
                  >
                    › {c.name.replace('Study in ','')}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA row */}
            <div style={{ padding:'12px 20px 20px', display:'flex', gap:'12px' }}>
              <Link to="/free-counseling" onClick={() => setMobileOpen(false)} style={{
                flex:1, display:'flex', alignItems:'center', justifyContent:'center',
                height:'48px', borderRadius:'999px',
                backgroundColor:'#00C58D', color:'#FFF',
                fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.9rem',
              }}>
                APPLY NOW
              </Link>
              <a href="tel:+917639557272" style={{
                flex:1, display:'flex', alignItems:'center', justifyContent:'center',
                height:'48px', borderRadius:'999px',
                border:'2px solid #00C58D', color:'#0F172A',
                fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.9rem',
              }}>
                Call Us
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .pnl {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem; font-weight: 600; color: #475569;
          position: relative; padding: 0; white-space: nowrap;
          text-decoration: none; transition: color 0.18s; line-height: 1;
        }
        .pnl:hover { color: #00C58D; }
        .pnl-active { color: #00C58D !important; font-weight: 700 !important; }
        .pnl-active::after {
          content: ''; position: absolute;
          bottom: -4px; left: 0; right: 0;
          height: 2px; background: #00C58D; border-radius: 2px;
        }
        .search-btn:hover {
          background-color: #F0FBF7 !important;
          border-color: #A8EDD3 !important;
          color: #00C58D !important;
        }

        /* Desktop nav hidden on mobile */
        @media (max-width: 1024px) {
          .pill-nav  { display: none !important; }
          .mob-toggle { display: flex !important; }
        }

        /* XS: hide text labels to save space */
        @media (max-width: 480px) {
          .hide-xs { display: none !important; }
          .show-xs { display: inline !important; }
        }
      `}</style>
    </>
  );
}
