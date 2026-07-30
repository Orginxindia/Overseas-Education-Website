import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, CheckCircle2, BookOpen, GraduationCap } from 'lucide-react';

export default function AllCoursesPage({ onOpenInquiry }) {
  const countryList = [
    { name: 'Study in USA', slug: '/study-in-usa', img: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/USA-UNIVERSITY.jpg', desc: 'Ivy League, STEM programs, 3-year OPT work visa options.' },
    { name: 'Study in Australia', slug: '/study-in-australia', img: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/AUSTRALIA-UNIVERSITY.webp', desc: 'Group of Eight universities & post-study work rights.' },
    { name: 'Study in Canada', slug: '/study-in-canada', img: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Canada-University.jpg', desc: 'PGWP work permits, Co-op programs, and PR migration.' },
    { name: 'Study in UK', slug: '/study-in-uk', img: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/UK-university.jpg', desc: '1-Year accelerated Master’s degrees & 2-Year Graduate visa.' },
    { name: 'Study in Singapore', slug: '/study-in-singapore', img: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Singapore-University.jpg', desc: 'NUS & NTU top 15 ranking institutions with tech HQ placements.' },
    { name: 'Study in Germany', slug: '/study-in-germany', img: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/German-University.webp', desc: 'Tuition-free public universities for engineering & technology.' },
    { name: 'Study in New Zealand', slug: '/study-in-new-zealand', img: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/New-zealand.jpg', desc: 'High quality of education and 3-year post-study work visa.' },
    { name: 'Study in Ireland', slug: '/study-in-ireland', img: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Ireland.jpg', desc: 'EU Silicon Valley hub for Apple, Google, & Meta HQs.' },
    { name: 'Study in Finland', slug: '/study-in-finland', img: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Finland.jpg', desc: '#1 education system with 100% tuition waiver scholarships.' }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingTop: '40px', paddingBottom: '90px' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-subtitle">OVERSEAS ACADEMIC DIRECTORY</div>
          <h1 className="section-title" style={{ margin: '0 auto', fontSize: '3rem' }}>
            All Courses & Study Abroad Programs
          </h1>
          <p style={{ color: '#64748B', maxWidth: '650px', margin: '16px auto 0', fontSize: '1.05rem' }}>
            Explore 50,000+ courses across top universities in 50+ countries. Select a destination to view specific degree offerings.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }} className="courses-catalog-grid">
          {countryList.map((item, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  {item.name}
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link 
                    to={item.slug} 
                    className="btn-primary"
                    style={{ flexGrow: 1, justifyContent: 'center', padding: '12px', fontSize: '0.85rem' }}
                  >
                    VIEW DESTINATION DETAILS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .courses-catalog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
