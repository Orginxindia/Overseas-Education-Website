import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';

export default function CountryPage({ countrySlug }) {
  const params = useParams();
  const slug = countrySlug || params.slug;

  const countryData = {
    'study-in-usa': {
      title: 'Study in USA',
      tagline: 'World Leader in Innovation & Higher Education',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/USA-UNIVERSITY.jpg',
      description: 'The United States is home to world-renowned Ivy League and top-ranked public research universities. Offering cutting-edge STEM programs, flexible degree pathways, and up to 3 years of OPT post-study work authorization.',
      universities: ['Harvard University', 'MIT', 'Stanford University', 'University of California System', 'Texas A&M University', 'Northeastern University'],
      intakes: 'Fall (August / September) & Spring (January / February)',
      postStudyWork: '3 Years OPT for STEM graduates & 1 Year for non-STEM',
      popularCourses: ['MS in Computer Science & AI', 'MBA & Finance', 'Data Analytics', 'Biomedical Engineering'],
      requirements: ['Bachelor Degree / High School Transcripts', 'IELTS / TOEFL / Duolingo Scores', 'GRE / GMAT (where applicable)', 'Statement of Purpose (SOP) & LORs']
    },
    'study-in-australia': {
      title: 'Study in Australia',
      tagline: 'Group of Eight Universities & Flexible Work Rights',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/AUSTRALIA-UNIVERSITY.webp',
      description: 'Australia offers world-class education, vibrant multi-cultural cities, and high post-study employment rates. Students benefit from up to 4+ years of post-study work rights and clear PR pathways.',
      universities: ['University of Melbourne', 'University of Sydney', 'UNSW Sydney', 'Monash University', 'UQ Brisbane', 'Australian National University'],
      intakes: 'Semester 1 (February) & Semester 2 (July)',
      postStudyWork: '2 to 4+ Years Post-Study Work Visa (Subclass 485)',
      popularCourses: ['Information Technology & Cyber Security', 'Nursing & Public Health', 'Engineering Management', 'Accounting & Business'],
      requirements: ['Academic transcripts', 'IELTS (Min 6.5) / PTE Academic', 'SOP for GTE / Genuine Student Test', 'Financial proof of funds']
    },
    'study-in-canada': {
      title: 'Study in Canada',
      tagline: 'Direct PGWP Work Permit & PR Pathways',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Canada-University.jpg',
      description: 'Canada is renowned for its welcoming multicultural society, affordable tuition, co-op work programs, and seamless transition from student visa to Permanent Residency (PR).',
      universities: ['University of Toronto', 'UBC Vancouver', 'McGill University', 'University of Waterloo', 'McMaster University', 'Conestoga & Seneca Colleges'],
      intakes: 'Fall (September), Winter (January), & Summer (May)',
      postStudyWork: 'Up to 3 Years Post-Graduation Work Permit (PGWP)',
      popularCourses: ['Data Science & Cloud Computing', 'Supply Chain & Logistics', 'Civil & Mechanical Engineering', 'Hospitality & Business'],
      requirements: ['Academic Transcripts (Min 60%+)', 'IELTS Academic (Min 6.5 overall)', 'GIC Financial Deposit (CAD $20,635)', 'SOP and Study Plan']
    },
    'study-in-uk': {
      title: 'Study in UK',
      tagline: '1-Year Master’s Degree & 2-Year Graduate Route',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/UK-university.jpg',
      description: 'The UK is famous for historic academic excellence and accelerated 1-year Master’s degree programs. The Graduate Route visa allows international students to work for 2 years post-graduation.',
      universities: ['University of Oxford', 'University of Cambridge', 'Imperial College London', 'UCL', 'University of Manchester', 'University of Birmingham'],
      intakes: 'September / October & January / February',
      postStudyWork: '2-Year Graduate Visa (3 Years for PhD graduates)',
      popularCourses: ['MSc Artificial Intelligence', 'International Business & Finance', 'Public Health', 'Architecture & Design'],
      requirements: ['Academic Marksheets', 'IELTS / MOI (Medium of Instruction waiver)', '2 Letters of Recommendation (LOR)', 'SOP & Passport copy']
    },
    'study-in-singapore': {
      title: 'Study in Singapore',
      tagline: 'Asia’s Financial Hub & Top 15 World Universities',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Singapore-University.jpg',
      description: 'Singapore is a global financial powerhouse with top-ranked universities (NUS & NTU). Offers world-class education, high safety standards, and direct placement opportunities in multinational tech HQs.',
      universities: ['National University of Singapore (NUS)', 'Nanyang Technological University (NTU)', 'Singapore Management University (SMU)', 'SUTD'],
      intakes: 'August & January',
      postStudyWork: 'Tuition Grant Employment Bond / Long Term Visit Pass',
      popularCourses: ['Fintech & Financial Engineering', 'International Business', 'Logistics Management', 'Computer Science'],
      requirements: ['Strong academic record', 'IELTS / TOEFL scores', 'Statement of Purpose', 'Interview assessment']
    },
    'study-in-germany': {
      title: 'Study in Germany',
      tagline: 'Tuition-Free Public Universities & Engineering Capital',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/German-University.webp',
      description: 'Germany is Europe’s industrial engine, offering tuition-free education at public universities for international students. Excellent career prospects in automotive, engineering, and tech sectors.',
      universities: ['TU Munich (TUM)', 'LMU Munich', 'RWTH Aachen University', 'TU Berlin', 'Heidelberg University', 'KIT Karlsruhe'],
      intakes: 'Winter Semester (October) & Summer Semester (April)',
      postStudyWork: '18-Month Job Seeking Visa post-graduation',
      popularCourses: ['Automotive & Mechanical Engineering', 'Embedded Systems', 'Robotics & Automation', 'Renewable Energy'],
      requirements: ['APS Certificate (Mandatory for Indian students)', 'German Blocked Account (€11,208/yr)', 'IELTS (Min 6.5) or German B2/C1', 'Bachelor Degree with high ECTS']
    },
    'study-in-new-zealand': {
      title: 'Study in New Zealand',
      tagline: 'High Quality of Education & Unmatched Safety',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/New-zealand.jpg',
      description: 'New Zealand offers pristine living conditions, highly ranked state universities, and practical skill-focused courses. Enjoy strong work rights and family visa benefits for postgraduate students.',
      universities: ['University of Auckland', 'University of Otago', 'Victoria University of Wellington', 'University of Canterbury', 'Massey University'],
      intakes: 'February & July',
      postStudyWork: 'Up to 3-Year Post-Study Work Visa',
      popularCourses: ['Agribusiness & Environmental Science', 'IT & Software Engineering', 'Tourism & Hospitality', 'Construction Management'],
      requirements: ['Academic transcripts', 'IELTS (6.5) / PTE', 'Financial proof of funds', 'Statement of Purpose']
    },
    'study-in-ireland': {
      title: 'Study in Ireland',
      tagline: 'European Silicon Valley & Tech HQ Destination',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Ireland.jpg',
      description: 'Ireland is the primary English-speaking tech hub in the EU, housing European HQs for Google, Meta, Apple, Pfizer, and Intel. Offers 2-year post-study stayback visa options.',
      universities: ['Trinity College Dublin (TCD)', 'University College Dublin (UCD)', 'University of Galway', 'Dublin City University (DCU)', 'UCC Cork'],
      intakes: 'September & January',
      postStudyWork: '2-Year Third Level Graduate Scheme (Stamp 1G)',
      popularCourses: ['Data Analytics & Cloud Computing', 'Pharmaceutical Sciences', 'Biotechnology', 'International Finance'],
      requirements: ['Bachelor degree transcripts (Min 60%+)', 'IELTS 6.5 / Duolingo 120+', 'CV & 2 LORs', 'Proof of funds']
    },
    'study-in-finland': {
      title: 'Study in Finland',
      tagline: '#1 Education System & 100% Scholarship Waivers',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Finland.jpg',
      description: 'Finland is globally celebrated for having the world’s best education system. International students enjoy high safety, innovation hubs, and up to 100% tuition waiver scholarships.',
      universities: ['Aalto University', 'University of Helsinki', 'Tampere University', 'LUT University', 'Metropolia UAS'],
      intakes: 'September (Joint Application in January)',
      postStudyWork: '2-Year Post-Graduation Residence Permit',
      popularCourses: ['Software Engineering & AI', 'Clean Energy Technology', 'Global Management', 'Game Design'],
      requirements: ['Academic transcripts', 'SAT / IELTS scores', 'Motivation Letter', 'Joint Application portal filing']
    }
  };

  const data = countryData[slug] || countryData['study-in-usa'];

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '80px' }}>
      <div className="container" style={{ paddingTop: '40px' }}>

        {/* Hero Banner */}
        <div className="country-hero-grid" style={{
          backgroundColor: '#0F172A', color: '#FFF',
          borderRadius: '24px', marginBottom: '44px',
          overflow: 'hidden',
        }}>
          {/* Text */}
          <div style={{ padding: 'clamp(28px,5vw,56px)' }}>
            <div style={{
              backgroundColor: '#00C58D', color: '#FFF',
              fontWeight: 800, padding: '5px 16px', borderRadius: '999px',
              display: 'inline-block', fontSize: '0.82rem', marginBottom: '14px',
            }}>
              {data.tagline}
            </div>
            <h1 style={{
              fontFamily: 'Outfit,sans-serif',
              fontSize: 'clamp(1.8rem,4.5vw,3rem)',
              fontWeight: 800, color: '#FFF',
              marginBottom: '16px', lineHeight: 1.12,
            }}>
              {data.title}
            </h1>
            <p style={{
              color: '#94A3B8',
              fontSize: 'clamp(0.875rem,2vw,1.05rem)',
              lineHeight: 1.75, marginBottom: '28px',
            }}>
              {data.description}
            </p>
            <Link to="/free-counseling" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              backgroundColor: '#00C58D', color: '#FFF',
              padding: '13px 24px', borderRadius: '999px',
              fontFamily: 'Outfit,sans-serif', fontWeight: 700,
              fontSize: 'clamp(0.8rem,2vw,0.92rem)',
              boxShadow: '0 8px 24px rgba(0,197,141,0.35)',
            }}>
              APPLY FOR COUNSELING <ArrowRight size={15} />
            </Link>
          </div>

          {/* Image */}
          <div style={{ minHeight: '220px', overflow: 'hidden' }}>
            <img src={data.image} alt={data.title}
              style={{ width: '100%', height: '100%', minHeight: '220px', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>

        {/* Details grid */}
        <div className="country-info-grid">

          <div style={{ backgroundColor: '#F8FAFC', borderRadius: '20px', padding: 'clamp(20px,4vw,32px)', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <Building2 size={24} color="#00C58D" />
              <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: 'clamp(1rem,2.5vw,1.35rem)', fontWeight: 800, color: '#0F172A' }}>
                Top Universities & Colleges
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {data.universities.map((uni, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontWeight: 700, color: '#1E293B', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={15} color="#00C58D" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{uni}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
              <div style={{ fontWeight: 800, color: '#0F172A', marginBottom: '5px', fontSize: '0.9rem' }}>Intake Seasons:</div>
              <div style={{ color: '#475569', fontSize: '0.88rem' }}>{data.intakes}</div>
            </div>
          </div>

          <div style={{ backgroundColor: '#F8FAFC', borderRadius: '20px', padding: 'clamp(20px,4vw,32px)', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <ShieldCheck size={24} color="#00C58D" />
              <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: 'clamp(1rem,2.5vw,1.35rem)', fontWeight: 800, color: '#0F172A' }}>
                Work Visa & Admission Criteria
              </h3>
            </div>
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontWeight: 700, color: '#00C58D', fontSize: '0.8rem', marginBottom: '4px' }}>POST-STUDY WORK VISA:</div>
              <div style={{ color: '#0F172A', fontWeight: 800, fontSize: '0.95rem' }}>{data.postStudyWork}</div>
            </div>
            <div style={{ fontWeight: 800, color: '#0F172A', marginBottom: '10px', fontSize: '0.9rem' }}>Admission Requirements:</div>
            {data.requirements.map((req, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#475569', marginBottom: '8px' }}>
                <CheckCircle2 size={14} color="#00C58D" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .country-hero-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          align-items: stretch;
        }
        .country-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 860px) {
          .country-hero-grid { grid-template-columns: 1fr !important; }
          .country-hero-grid > div:last-child { min-height: 200px !important; }
          .country-info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
