import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CtaBanner({ onOpenTrial }) {
  return (
    <section style={{
      backgroundColor: '#00C58D',
      padding: '60px 0',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background overlay circles */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-50px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 800,
              marginBottom: '12px'
            }}>
              <Sparkles size={14} /> 14-DAY RISK-FREE TRIAL
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
              Learn Anytime, Anywhere – <br /> Start Your Free Trial Today!
            </h2>
          </div>

          <div>
            <button
              onClick={onOpenTrial}
              style={{
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '16px 36px',
                borderRadius: '999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 15px 30px rgba(15, 23, 42, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.backgroundColor = '#1E293B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#0F172A';
              }}
            >
              START FREE TRIAL NOW
              <ArrowRight size={18} color="#00C58D" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
