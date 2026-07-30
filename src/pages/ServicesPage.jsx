import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, ShieldCheck, Award, Briefcase,
  DollarSign, CheckCircle2, ArrowRight
} from 'lucide-react';

export default function ServicesPage() {
  const serviceList = [
    {
      title: 'Best University & Course Selection', icon: GraduationCap, color: '#00C58D', bg: '#E8F8F3',
      subtitle: 'Personalized Profile Matching & Academic Counseling',
      desc: 'Our expert overseas counselors analyze your GPA, test scores, budget, and career goals to shortlist top-tier universities that best fit your profile.',
      points: ['Profile evaluation & academic gap analysis','Course matching for high-demand careers','Direct application tracking','Application fee waiver codes'],
    },
    {
      title: 'VISA Proceedings & Mock Interviews', icon: ShieldCheck, color: '#F97316', bg: '#FFF7ED',
      subtitle: '100% Comprehensive Visa Guidance & Filing',
      desc: 'We handle complete documentation, financial proofing, SOP drafting, and conduct realistic mock visa interviews to maximize your approval rate.',
      points: ['Financial documentation assistance','SOP & LOR drafting guidance','Mock embassy interview sessions','High visa success rate across all destinations'],
    },
    {
      title: 'Global Scholarship Assistance', icon: Award, color: '#0EA5E9', bg: '#F0F9FF',
      subtitle: 'Maximize Financial Aid & Tuition Waivers',
      desc: 'We assist in securing merit-based, need-based, and country-specific scholarships to drastically cut your overseas tuition expenses.',
      points: ['University-specific merit scholarships','Govt. scholarships (Fulbright, Chevening, DAAD)','GRA & TA applications','Up to 100% tuition waiver guidance'],
    },
    {
      title: 'Internship & Career Placements', icon: Briefcase, color: '#8B5CF6', bg: '#F5F3FF',
      subtitle: 'Co-op Work & Corporate Placement Advisory',
      desc: 'Gain valuable international work experience. We guide you towards courses with paid co-op internships and strong campus placement records.',
      points: ['Paid Co-op college selection','International CV optimization','Post-study work visa strategy','Alumni networking & job connections'],
    },
    {
      title: 'English Language Training (IELTS / TOEFL / PTE)', icon: GraduationCap, color: '#EC4899', bg: '#FDF2F8',
      subtitle: 'Certified Masterclasses to Crack Language Exams',
      desc: 'Our experienced language trainers conduct interactive classes to help you achieve 7.5+ band scores in IELTS or equivalent TOEFL/PTE scores.',
      points: ['Mock exam series with detailed feedback','Grammar, vocabulary & speaking drills','Flexible online & classroom schedules','Direct exam registration support'],
    },
    {
      title: 'FOREX & Financial Support', icon: DollarSign, color: '#10B981', bg: '#ECFDF5',
      subtitle: 'Fast Currency Exchange & Tuition Remittance',
      desc: 'Our forex team helps you transfer university tuition fees securely at competitive exchange rates without hidden bank fees.',
      points: ['Fast wire transfer to university accounts','Student Forex travel cards','Education loan assistance','Blocked account setup for Germany'],
    },
  ];

  return (
    <div style={{ backgroundColor:'#FFFFFF', paddingBottom:'80px' }}>

      {/* Hero band */}
      <div style={{
        background:'linear-gradient(135deg,#F0FAF7 0%,#EBF5FF 100%)',
        padding:'56px 0 48px', textAlign:'center',
      }}>
        <div className="container">
          <div className="section-subtitle">END-TO-END OVERSEAS CONSULTANCY</div>
          <h1 style={{
            fontFamily:'Outfit,sans-serif',
            fontSize:'clamp(1.8rem,4.5vw,2.8rem)',
            fontWeight:800, color:'#0F172A', margin:'0 auto 16px', maxWidth:'680px', lineHeight:1.15,
          }}>
            Comprehensive Overseas Education Services
          </h1>
          <p style={{ color:'#64748B', maxWidth:'620px', margin:'0 auto', fontSize:'clamp(0.9rem,2vw,1.05rem)', lineHeight:1.75 }}>
            From initial university shortlisting to landing in your destination country — LPS Global Education supports you at every step.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop:'56px' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'28px' }}>
          {serviceList.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div key={idx} className="service-card" style={{
                backgroundColor:'#FFFFFF', borderRadius:'24px',
                padding:'clamp(20px,4vw,36px)',
                border:'1px solid #E2E8F0',
                boxShadow:'0 8px 28px rgba(0,0,0,0.04)',
              }}>
                {/* Top row: icon + title */}
                <div style={{ display:'flex', alignItems:'flex-start', gap:'16px', marginBottom:'16px' }}>
                  <div style={{
                    width:'58px', height:'58px', borderRadius:'16px', flexShrink:0,
                    backgroundColor:svc.bg,
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>
                    <Icon size={28} color={svc.color} />
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ color:svc.color, fontWeight:700, fontSize:'0.78rem', marginBottom:'4px', letterSpacing:'0.3px' }}>
                      {svc.subtitle}
                    </div>
                    <h3 style={{
                      fontFamily:'Outfit,sans-serif',
                      fontSize:'clamp(1.05rem,2.5vw,1.5rem)',
                      fontWeight:800, color:'#0F172A', lineHeight:1.2,
                    }}>
                      {svc.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color:'#475569', fontSize:'clamp(0.875rem,2vw,0.97rem)', lineHeight:1.75, marginBottom:'20px' }}>
                  {svc.desc}
                </p>

                {/* Points grid */}
                <div className="svc-points" style={{ marginBottom:'24px' }}>
                  {svc.points.map((p,i) => (
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'8px', fontSize:'0.85rem', color:'#1E293B', fontWeight:600 }}>
                      <CheckCircle2 size={15} color="#00C58D" style={{ flexShrink:0, marginTop:'2px' }} />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link to="/free-counseling" style={{
                  display:'inline-flex', alignItems:'center', gap:'9px',
                  backgroundColor:'#00C58D', color:'#FFF',
                  padding:'12px 24px', borderRadius:'999px',
                  fontFamily:'Outfit,sans-serif', fontWeight:700, fontSize:'0.87rem',
                  boxShadow:'0 6px 18px rgba(0,197,141,0.28)',
                  transition:'all 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform='translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
                >
                  GET FREE ASSISTANCE <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .svc-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        @media (max-width: 540px) {
          .svc-points { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
