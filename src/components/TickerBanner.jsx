import React from 'react';
import { Sparkles } from 'lucide-react';

export default function TickerBanner() {
  const items = [
    "INNOVATION",
    "WORLDWIDE LEARNERS",
    "UNIQUE KNOWLEDGE",
    "DREAM TODAY",
    "EXPERT MENTORS",
    "GLOBAL CERTIFICATION"
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker-content">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="ticker-item">
            <Sparkles size={20} fill="#FFFFFF" color="#FFFFFF" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
