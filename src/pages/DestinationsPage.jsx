import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, CheckCircle2, Award, Clock, DollarSign } from 'lucide-react';

export default function DestinationsPage() {
  const [selectedCountry, setSelectedCountry] = useState('All');

  const destinations = [
    {
      id: 'usa',
      country: 'USA',
      name: 'Study in USA',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/USA-UNIVERSITY.jpg',
      tag: 'World Leader in STEM & Innovation',
      universities: '4,000+ Colleges & Universities',
      intakes: 'Fall (August) / Spring (January)',
      workPermit: 'Up to 3 Years OPT (STEM fields)',
      avgFee: '$20,000 - $45,000 / Year',
      keyHighlights: [
        'Home to Ivy League & Top 100 World Universities',
        'Generous Assistantships & Merit Scholarships',
        'High salaries & Silicon Valley networking opportunities'
      ]
    },
    {
      id: 'australia',
      country: 'Australia',
      name: 'Study in Australia',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/AUSTRALIA-UNIVERSITY.webp',
      tag: 'Group of Eight & High Quality of Life',
      universities: '43 Accredited Universities',
      intakes: 'February / July',
      workPermit: 'Up to 4-5 Years Post-Study Work Visa',
      avgFee: 'AUD 25,000 - 40,000 / Year',
      keyHighlights: [
        'Top 10 globally ranked student cities (Melbourne, Sydney)',
        'Unrestricted part-time work rights during study breaks',
        'Direct skilled migration & PR pathways'
      ]
    },
    {
      id: 'canada',
      country: 'Canada',
      name: 'Study in Canada',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Canada-University.jpg',
      tag: 'Direct PGWP & PR Pathways',
      universities: '200+ Colleges & Universities',
      intakes: 'September / January / May',
      workPermit: '3-Year Post-Graduation Work Permit (PGWP)',
      avgFee: 'CAD 15,000 - 35,000 / Year',
      keyHighlights: [
        'Co-op work programs integrated into degree curriculum',
        'Express Entry & Provincial Nominee PR immigration routes',
        'Safe, multicultural, and welcoming environment'
      ]
    },
    {
      id: 'uk',
      country: 'UK',
      name: 'Study in UK',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/UK-university.jpg',
      tag: '1-Year Master’s Degree & Graduate Route',
      universities: '160+ Historic Universities',
      intakes: 'September / January',
      workPermit: '2-Year Graduate Work Visa',
      avgFee: '£13,000 - £28,000 / Year',
      keyHighlights: [
        'Complete Master’s degree in just 12 months',
        'Russell Group research excellence',
        'No IELTS options available with high English scores'
      ]
    },
    {
      id: 'germany',
      country: 'Germany',
      name: 'Study in Germany',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/German-University.webp',
      tag: 'Tuition-Free Public Higher Education',
      universities: '400+ State Universities',
      intakes: 'Winter (October) / Summer (April)',
      workPermit: '18-Month Job Seeking Visa',
      avgFee: '€0 - €1,500 / Semester (Public)',
      keyHighlights: [
        'Tuition-free engineering & technology programs',
        'Strong industrial economy with Automotive & Tech giants',
        'Permanent Residency after 2 years of work'
      ]
    },
    {
      id: 'singapore',
      country: 'Singapore',
      name: 'Study in Singapore',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Singapore-University.jpg',
      tag: 'Asia’s Financial & Education Capital',
      universities: '34 Global Institutions (NUS / NTU)',
      intakes: 'August / January',
      workPermit: 'Tuition Grant Bond & Employment Pass',
      avgFee: 'SGD 18,000 - 35,000 / Year',
      keyHighlights: [
        'NUS & NTU ranked in the World Top 15',
        'Global headquarters for Apple, Google, DBS, & Meta',
        'Extremely safe and clean island metropolis'
      ]
    },
    {
      id: 'nz',
      country: 'New Zealand',
      name: 'Study in New Zealand',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/New-zealand.jpg',
      tag: 'High Quality of Education & Pristine Nature',
      universities: '8 State Universities',
      intakes: 'February / July',
      workPermit: '3-Year Post-Study Work Visa',
      avgFee: 'NZD 22,000 - 36,000 / Year',
      keyHighlights: [
        'All 8 state universities ranked in QS World Top 500',
        'Friendly community and fast visa processing',
        'Spouse work visa eligible for Master’s students'
      ]
    },
    {
      id: 'ireland',
      country: 'Ireland',
      name: 'Study in Ireland',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Ireland.jpg',
      tag: 'European Silicon Valley & Tech HQ Hub',
      universities: '30+ Higher Institutions',
      intakes: 'September / January',
      workPermit: '2-Year Third Level Graduate Scheme',
      avgFee: '€10,000 - €22,000 / Year',
      keyHighlights: [
        'Only English-speaking country in the European Union',
        '98% graduate employment rate in IT & Pharma',
        'Generous government & university scholarships'
      ]
    },
    {
      id: 'finland',
      country: 'Finland',
      name: 'Study in Finland',
      image: 'https://lpsglobaledu.com/wp-content/uploads/2023/03/Finland.jpg',
      tag: '#1 Happiest Country & Education Leader',
      universities: '39 Universities of Applied Sciences',
      intakes: 'September / January',
      workPermit: '2-Year Post-Graduation Work Visa',
      avgFee: '€8,000 - €14,000 / Year',
      keyHighlights: [
        '50% to 100% tuition waiver scholarships for international students',
        'Family residence visa allowed during studies',
        'PR eligibility after 4 years of residence'
      ]
    }
  ];

  const filterCountries = ['All', 'USA', 'Australia', 'Canada', 'UK', 'Germany', 'Singapore', 'New Zealand', 'Ireland', 'Finland'];

  const filteredList = selectedCountry === 'All' 
    ? destinations 
    : destinations.filter(d => d.country.toLowerCase().includes(selectedCountry.toLowerCase()) || d.name.toLowerCase().includes(selectedCountry.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingTop: '40px', paddingBottom: '90px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-subtitle">STUDY ABROAD CATALOG</div>
          <h1 className="section-title" style={{ margin: '0 auto', fontSize: '3rem' }}>
            Choose Your Destination Country
          </h1>
          <p style={{ color: '#64748B', maxWidth: '650px', margin: '16px auto 0', fontSize: '1.05rem' }}>
            Detailed country guides, intake schedules, post-study work permits, and tuition costs.
          </p>
        </div>

        {/* Filter Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '50px'
        }}>
          {filterCountries.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCountry(c)}
              style={{
                padding: '10px 20px',
                borderRadius: '999px',
                fontSize: '0.9rem',
                fontWeight: 700,
                transition: 'all 0.2s ease',
                backgroundColor: selectedCountry === c ? '#00C58D' : '#F1F5F9',
                color: selectedCountry === c ? '#FFFFFF' : '#475569',
                boxShadow: selectedCountry === c ? '0 8px 20px rgba(0, 197, 141, 0.3)' : 'none'
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Catalog Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }} className="catalog-grid">
          {filteredList.map((item) => (
            <div 
              key={item.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '220px', position: 'relative' }}>
                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: '#00C58D',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  padding: '6px 16px',
                  borderRadius: '999px',
                  fontSize: '0.85rem'
                }}>
                  {item.name}
                </div>
              </div>

              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ color: '#00C58D', fontWeight: 800, fontSize: '0.85rem', marginBottom: '8px' }}>
                  {item.tag}
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
                  {item.name}
                </h3>

                <div style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontSize: '0.85rem',
                  color: '#475569',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', justifyBetween: 'space-between', justifyContent: 'space-between' }}>
                    <span>Universities:</span>
                    <strong style={{ color: '#0F172A' }}>{item.universities}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyBetween: 'space-between', justifyContent: 'space-between' }}>
                    <span>Work Visa:</span>
                    <strong style={{ color: '#00C58D' }}>{item.workPermit}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyBetween: 'space-between', justifyContent: 'space-between' }}>
                    <span>Avg Tuition:</span>
                    <strong style={{ color: '#0F172A' }}>{item.avgFee}</strong>
                  </div>
                </div>

                <div style={{ marginBottom: '24px', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                    Key Benefits:
                  </div>
                  {item.keyHighlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#64748B', marginBottom: '6px' }}>
                      <CheckCircle2 size={14} color="#00C58D" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/free-counseling"
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                >
                  APPLY FOR {item.country.toUpperCase()}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .catalog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
