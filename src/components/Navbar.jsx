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

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
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
      {/* ── Outer wrapper ── */}
      <div style={{
        position:        'relative',
        zIndex:          'unset',
        padding:         isScrolled ? '10px 24px' : '16px 24px',
        backgroundColor: '#F4F8FF',
        transition:      'padding 0.3s ease',
      }}>
        {/* ── Floating pill card ── */}
        <div style={{
          maxWidth:        '1240px',
          margin:          '0 auto',
          borderRadius:    '18px',
          backgroundColor: '#FFFFFF',
          boxShadow:       isScrolled
            ? '0 8px 36px rgba(0,0,0,0.13), 0 1px 0 rgba(0,0,0,0.04)'
            : '0 2px 20px rgba(0,0,0,0.08)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          height:          '80px',
          padding:         '0 28px',
          transition:      'box-shadow 0.3s ease',
          position:        'relative',
        }}>

          {/* ── LOGO ── */}
          <Link to="/" style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            flexShrink: 0, textDecoration: 'none',
          }}>
            {/* Green icon box */}
            <div style={{
              width: '54px', height: '54px',
              borderRadius: '14px',
              background: 'linear-gradient(145deg, #00C58D 0%, #009E6E 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 4px 14px rgba(0,197,141,0.30)',
              position: 'relative',
            }}>
              <Globe size={18} color="rgba(255,255,255,0.6)"
                style={{ position: 'absolute', bottom: '8px', left: '7px' }} />
              <GraduationCap size={26} color="#FFFFFF"
                style={{ position: 'absolute', top: '8px', right: '7px' }} />
            </div>
            {/* Text */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.45rem',
                fontWeight: 800, color: '#0F172A', lineHeight: 1.1,
                letterSpacing: '-0.4px', whiteSpace: 'nowrap',
              }}>
                LPS Global <span style={{ color: '#00C58D' }}>Edu</span>
              </span>
              <span style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '0.7rem', fontWeight: 600,
                color: '#94A3B8', letterSpacing: '0.2px',
                marginTop: '3px', whiteSpace: 'nowrap',
              }}>
                Trusted Overseas Education Partner
              </span>
            </div>
          </Link>

          {/* ── NAV (absolutely centered) ── */}
          <nav className="pill-nav" style={{
            display: 'flex', alignItems: 'center', gap: '36px',
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          }}>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>
              Home
            </NavLink>

            {/* All Courses dropdown */}
            <div
              ref={dropdownRef}
              style={{ position: 'relative' }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(o => !o)}
                className="pnl"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '3px',
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                }}
              >
                All Courses
                <ChevronDown size={14} style={{
                  transition: 'transform 0.2s',
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }} />
              </button>

              {/* Invisible bridge */}
              <div style={{
                position: 'absolute', top: '100%',
                left: '-20px', right: '-20px', height: '14px',
                pointerEvents: dropdownOpen ? 'auto' : 'none',
              }} />

              {/* Dropdown panel */}
              <div style={{
                position: 'absolute', top: 'calc(100% + 14px)', left: '50%',
                backgroundColor: '#FFFFFF', borderRadius: '16px',
                padding: '8px 0', boxShadow: '0 16px 44px rgba(0,0,0,0.12)',
                border: '1px solid #EEF2F7', minWidth: '215px', zIndex: 300,
                opacity: dropdownOpen ? 1 : 0,
                visibility: dropdownOpen ? 'visible' : 'hidden',
                transform: dropdownOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-8px)',
                transition: 'opacity 0.18s ease, transform 0.18s ease, visibility 0s linear ' + (dropdownOpen ? '0s' : '0.18s'),
                pointerEvents: dropdownOpen ? 'auto' : 'none',
              }}>
                <Link to="/all-courses" onClick={() => setDropdownOpen(false)} style={{
                  display: 'block', padding: '10px 20px 11px',
                  fontSize: '0.75rem', fontWeight: 800, color: '#00C58D',
                  fontFamily: 'Outfit, sans-serif', letterSpacing: '0.6px',
                  textTransform: 'uppercase', borderBottom: '1px solid #F1F5F9', marginBottom: '4px',
                }}>
                  VIEW ALL COURSES →
                </Link>
                {countryLinks.map(item => (
                  <Link key={item.path} to={item.path} onClick={() => setDropdownOpen(false)}
                    style={{
                      display: 'block', padding: '9px 20px',
                      fontSize: '0.875rem', fontWeight: 600, color: '#334155',
                      fontFamily: 'Plus Jakarta Sans, sans-serif', transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#F0FBF7'; e.currentTarget.style.color = '#00C58D'; e.currentTarget.style.paddingLeft = '24px'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#334155'; e.currentTarget.style.paddingLeft = '20px'; }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/about-us"       className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>About Us</NavLink>
            <NavLink to="/services"       className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>Services</NavLink>
            <NavLink to="/contact"        className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>Contact</NavLink>
            <NavLink to="/privacy-policy" className={({ isActive }) => isActive ? 'pnl pnl-active' : 'pnl'}>Privacy Policy</NavLink>
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
            <button onClick={onOpenSearch} title="Search" className="pill-search-btn"
              style={{
                width: '44px', height: '44px', borderRadius: '50%',
                backgroundColor: 'transparent', border: '1.5px solid #E2E8F0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#475569', cursor: 'pointer', transition: 'all 0.2s ease', flexShrink: 0,
              }}>
              <Search size={18} />
            </button>

            <Link to="/free-counseling"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                height: '50px', padding: '0 24px 0 28px',
                borderRadius: '999px', backgroundColor: '#00C58D', color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                fontSize: '0.88rem', letterSpacing: '0.5px',
                flexShrink: 0, whiteSpace: 'nowrap',
                boxShadow: ctaHovered ? '0 10px 26px rgba(0,197,141,0.45)' : '0 4px 16px rgba(0,197,141,0.28)',
                transform: ctaHovered ? 'translateY(-1px)' : 'translateY(0)',
                transition: 'all 0.22s ease',
              }}>
              APPLY NOW
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ArrowRight size={14} color="#FFFFFF" />
              </div>
            </Link>

            <button className="pill-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}
              style={{ display: 'none', padding: '6px', color: '#0F172A', background: 'none', border: 'none', cursor: 'pointer' }}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div style={{
            maxWidth: '1240px', margin: '8px auto 0', borderRadius: '16px',
            backgroundColor: '#FFFFFF', boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            {[
              { label: 'Home', path: '/' },
              { label: 'All Courses', path: '/all-courses' },
              { label: 'About Us', path: '/about-us' },
              { label: 'Services', path: '/services' },
              { label: 'Contact', path: '/contact' },
              { label: 'Privacy Policy', path: '/privacy-policy' },
            ].map(item => (
              <NavLink key={item.path} to={item.path} onClick={() => setMobileOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: 'Outfit, sans-serif', fontWeight: 700,
                  fontSize: '1rem', color: isActive ? '#00C58D' : '#0F172A', padding: '4px 0',
                })}>
                {item.label}
              </NavLink>
            ))}
            {countryLinks.map(c => (
              <Link key={c.path} to={c.path} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', paddingLeft: '12px', fontSize: '0.875rem', color: '#64748B', fontWeight: 600 }}>
                › {c.name}
              </Link>
            ))}
            <Link to="/free-counseling" onClick={() => setMobileOpen(false)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: '48px', borderRadius: '999px', backgroundColor: '#00C58D',
              color: '#FFFFFF', fontFamily: 'Outfit, sans-serif', fontWeight: 700,
              fontSize: '0.9rem', marginTop: '4px',
            }}>
              APPLY NOW
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .pnl {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          color: #475569; position: relative;
          padding: 0; white-space: nowrap;
          text-decoration: none; transition: color 0.18s ease; line-height: 1;
        }
        .pnl:hover { color: #00C58D; }
        .pnl-active { color: #00C58D !important; font-weight: 700 !important; }
        .pnl-active::after {
          content: ''; position: absolute;
          bottom: -4px; left: 0; right: 0;
          height: 2px; background-color: #00C58D; border-radius: 2px;
        }
        .pill-search-btn:hover {
          background-color: #F0FBF7 !important;
          border-color: #A8EDD3 !important;
          color: #00C58D !important;
        }
        @media (max-width: 1024px) {
          .pill-nav { display: none !important; }
          .pill-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
