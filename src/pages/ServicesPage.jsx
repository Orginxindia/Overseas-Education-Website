import React from 'react';
import { Link } from 'react-router-dom';
import { 
  University, ShieldCheck, Award, Briefcase, GraduationCap, DollarSign, 
  CheckCircle2, ArrowRight 
} from 'lucide-react';

export default function ServicesPage() {
  const serviceList = [
    {
      title: 'Best University & Course Selection',
      icon: University,
      color: '#00C58D',
      bg: '#E8F8F3',
      subtitle: 'Personalized Profile Matching & Academic Counseling',
      desc: 'Our expert overseas counselors analyze your GPA, test scores, budget, and career goals to shortlist top-tier colleges and universities that best fit your profile.',
      points: [
        'Profile evaluation & academic gap analysis',
        'Course selection matching future high-demand career trends',
        'Direct application tracking with university admission boards',
        'Application fee waiver codes for partner institutions'
      ]
    },
    {
      title: 'VISA Proceedings & Mock Interviews',
      icon: ShieldCheck,
      color: '#F97316',
      bg: '#FFF7ED',
      subtitle: '100% Comprehensive Visa Guidance & Filing',
      desc: 'Navigating student visa requirements can be complex. We handle complete documentation, financial proofing, SOP drafting, and conduct realistic mock visa interviews.',
      points: [
        'Financial documentation & bank solvency assistance',
        'SOP (Statement of Purpose) & LOR drafting guidance',
        'Mock embassy visa interview preparation sessions',
        'High visa success rate across US, UK, Australia, & Canada'
      ]
    },
    {
      title: 'Global Scholarship Assistance',
      icon: Award,
      color: '#0EA5E9',
      bg: '#F0F9FF',
      subtitle: 'Maximize Financial Aid & Tuition Waivers',
      desc: 'We assist you in securing merit-based, need-based, and country-specific scholarships to drastically cut your overseas tuition expenses.',
      points: [
        'University-specific merit scholarship applications',
        'Government scholarships (Fulbright, Chevening, DAAD, Australia Awards)',
        'Graduate Research Assistantship (GRA) & Teaching Assistantship (TA) applications',
        'Up to 100% tuition waiver guidance'
      ]
    },
    {
      title: 'Internship & Career Placements',
      icon: Briefcase,
      color: '#8B5CF6',
      bg: '#F5F3FF',
      subtitle: 'Co-op Work & Corporate Placement Advisory',
      desc: 'Gain valuable international work experience. We guide you towards courses with paid co-op internships and strong campus placement records.',
      points: [
        'Paid internship (Co-op) college selection',
        'International CV & cover letter optimization',
        'Post-study work visa (PGWP / OPT) strategy',
        'Alumni networking & corporate job placement connections'
      ]
    },
    {
      title: 'English Language Training (IELTS / TOEFL / PTE)',
      icon: GraduationCap,
      color: '#EC4899',
      bg: '#FDF2F8',
      subtitle: 'Certified Masterclasses to Crack Language Exams',
      desc: 'Our experienced language trainers conduct interactive classes to help you achieve 7.5+ band scores in IELTS or equivalent TOEFL/PTE scores.',
      points: [
        'Mock exam series with detailed scoring feedback',
        'Grammar, vocabulary, speaking & listening drills',
        'Flexible online & classroom coaching schedules',
        'Direct exam registration support'
      ]
    },
    {
      title: 'FOREX & Financial Support',
      icon: DollarSign,
      color: '#10B981',
      bg: '#ECFDF5',
      subtitle: 'Fast Currency Exchange & Tuition Remittance',
      desc: 'Our forex team helps you transfer university tuition fees securely at authentic, competitive exchange rates without hidden bank fees.',
      points: [
        'Fast wire transfer to overseas university accounts',
        'Student Forex travel cards with zero forex markup',
        'Education loan assistance with top nationalized & private banks',
        'Blocked account setup for German student visas'
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingTop: '40px', paddingBottom: '90px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-subtitle">END-TO-END OVERSEAS CONSULTANCY</div>
          <h1 className="section-title" style={{ margin: '0 auto', fontSize: '3rem' }}>
            Comprehensive Overseas Education Services
          </h1>
          <p style={{ color: '#64748B', maxWidth: '680px', margin: '16px auto 0', fontSize: '1.1rem' }}>
            From initial university shortlisting to landing in your destination country—LPS Global Education supports you at every step.
          </p>
        </div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {serviceList.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div 
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '28px',
                  padding: '40px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr 300px',
                  gap: '30px',
                  alignItems: 'center'
                }}
                className="service-card"
              >
                <div style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '22px',
                  backgroundColor: service.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}>
                  <IconComp size={36} color={service.color} />
                </div>

                <div>
                  <div style={{ color: service.color, fontWeight: 800, fontSize: '0.85rem', marginBottom: '4px' }}>
                    {service.subtitle}
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '16px' }}>
                    {service.desc}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }} className="service-points">
                    {service.points.map((p, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#1E293B', fontWeight: 600 }}>
                        <CheckCircle2 size={15} color="#00C58D" style={{ flexShrink: 0 }} />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <Link 
                    to="/free-counseling"
                    className="btn-primary" 
                    style={{ padding: '14px 28px', fontSize: '0.9rem' }}
                  >
                    GET FREE ASSISTANCE
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .service-card { grid-template-columns: 1fr !important; text-align: left !important; }
          .service-card a { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </div>
  );
}
