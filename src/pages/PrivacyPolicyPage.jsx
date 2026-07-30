import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingTop: '40px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <div className="section-subtitle">LEGAL & COMPLIANCE</div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0F172A', marginTop: '8px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#64748B', fontSize: '0.95rem' }}>
            Last Updated: 2026 | LP Saravanaa Educational Consultants Pvt Ltd (LPS Global Education)
          </p>
        </div>

        <div style={{ color: '#334155', lineHeight: 1.8, fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p>
            At <strong>LPS Global Education</strong> (LP Saravanaa Educational Consultants Pvt Ltd), accessible from <a href="https://lpsglobaledu.com/" style={{ color: '#00C58D', fontWeight: 700 }}>lpsglobaledu.com</a>, one of our main priorities is the privacy of our students and visitors. This Privacy Policy document contains types of information that is collected and recorded by LPS Global Education and how we use it.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>Information We Collect</h2>
          <p>
            When you register for overseas education counseling, fill out an inquiry form, or contact our counselors via phone/WhatsApp, we may collect personal information including:
          </p>
          <ul style={{ paddingLeft: '24px' }}>
            <li>Full Name, Email Address, and Phone Number</li>
            <li>Academic Transcripts, GPA, and Test Scores (IELTS/TOEFL/GRE/GMAT)</li>
            <li>Preferred Study Destination Countries and Degree Programs</li>
            <li>Financial documentation for university admission and VISA processing</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>How We Use Your Information</h2>
          <p>
            The information collected is strictly used to facilitate university applications, secure admission offer letters, provide scholarship guidance, and assist with official student VISA applications at foreign embassies.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>Data Protection & Security</h2>
          <p>
            LPS Global Education enforces strict organizational and technical security measures to protect your sensitive documents against unauthorized access, alteration, or disclosure. We never sell or lease student data to third-party marketing companies.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>Contact Information</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at: <br />
            <strong>Email:</strong> <a href="mailto:info@lpsglobaledu.com" style={{ color: '#00C58D', fontWeight: 700 }}>info@lpsglobaledu.com</a> <br />
            <strong>Phone:</strong> +91 76395 57272 <br />
            <strong>Head Office:</strong> 62/63, WeWork The Pavilion, Church Street, M.G.Road, Bengaluru – 560 001, Karnataka, India.
          </p>
        </div>

      </div>
    </div>
  );
}
