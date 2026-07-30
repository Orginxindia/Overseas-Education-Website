import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DestinationsPage from './pages/DestinationsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AllCoursesPage from './pages/AllCoursesPage';
import CountryPage from './pages/CountryPage';
import FreeCounselingPage from './pages/FreeCounselingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

import { X, Search } from 'lucide-react';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Sticky header wrapper — keeps TopBar + Navbar in flow, no scroll jump */}
        <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
          <TopBar />
          <Navbar onOpenSearch={() => setSearchOpen(true)} />
        </div>

        {/* Exact Route Structure matching lpsglobaledu.com */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-courses" element={<AllCoursesPage />} />
            
            {/* Dedicated Counseling Route */}
            <Route path="/free-counseling" element={<FreeCounselingPage />} />
            <Route path="/apply-now" element={<FreeCounselingPage />} />
            <Route path="/consultancy" element={<FreeCounselingPage />} />

            {/* Dedicated Country Routes */}
            <Route path="/study-in-usa" element={<CountryPage countrySlug="study-in-usa" />} />
            <Route path="/study-in-australia" element={<CountryPage countrySlug="study-in-australia" />} />
            <Route path="/study-in-canada" element={<CountryPage countrySlug="study-in-canada" />} />
            <Route path="/study-in-uk" element={<CountryPage countrySlug="study-in-uk" />} />
            <Route path="/study-in-singapore" element={<CountryPage countrySlug="study-in-singapore" />} />
            <Route path="/study-in-germany" element={<CountryPage countrySlug="study-in-germany" />} />
            <Route path="/study-in-new-zealand" element={<CountryPage countrySlug="study-in-new-zealand" />} />
            <Route path="/study-in-ireland" element={<CountryPage countrySlug="study-in-ireland" />} />
            <Route path="/study-in-finland" element={<CountryPage countrySlug="study-in-finland" />} />

            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Search Modal */}
        {searchOpen && (
          <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'flex-start',
            justify: 'center',
            paddingTop: '100px'
          }}>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '600px',
              width: '90%',
              padding: '30px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
              position: 'relative'
            }}>
              <button 
                onClick={() => setSearchOpen(false)}
                style={{ position: 'absolute', top: '20px', right: '20px', color: '#64748B' }}
              >
                <X size={22} />
              </button>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '20px', color: '#0F172A' }}>
                Search Destinations & Services
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#F8FAFC', padding: '14px 20px', borderRadius: '999px', border: '1px solid #E2E8F0' }}>
                <Search size={20} color="#00C58D" />
                <input 
                  type="text" 
                  placeholder="Type country name e.g. USA, UK, Canada, VISA, IELTS..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  style={{ border: 'none', background: 'none', outline: 'none', fontSize: '1rem', width: '100%', color: '#0F172A' }}
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </Router>
  );
}
