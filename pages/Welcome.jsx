import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="wrap">
      <Navbar />
      <main className="hero">
        <section className="hero-card card">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to <span className="brand">Code Editor</span></h1>
            <p className="hero-sub">Integrated with AI — build, run, and learn code right in the browser.</p>
            <div className="hero-cta-row">
              <button className="primary hero-cta" onClick={() => navigate('/editor')}>Start Now</button>
              <a className="hero-secondary" href="/resources" onClick={(e)=>{e.preventDefault(); navigate('/resources');}}>Browse Resources</a>
            </div>
            <div className="hero-note">Tip: press <kbd>Ctrl</kbd> / <kbd>⌘</kbd> + <kbd>Enter</kbd> to run from the editor.</div>
          </div>
          <div className="hero-visual" aria-hidden>
            {/* lightweight SVG visual */}
            <svg width="240" height="160" viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" role="img">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#60A5FA"/>
                  <stop offset="1" stopColor="#A78BFA"/>
                </linearGradient>
              </defs>
              <rect x="0" y="6" rx="10" width="220" height="120" fill="url(#g1)" opacity="0.15" />
              <g transform="translate(16,16)">
                <rect x="0" y="0" rx="6" width="120" height="80" fill="rgba(255,255,255,0.06)"/>
                <rect x="130" y="0" rx="6" width="72" height="32" fill="rgba(255,255,255,0.03)"/>
                <circle cx="156" cy="68" r="18" fill="rgba(255,255,255,0.04)"/>
                <rect x="0" y="92" rx="4" width="100" height="10" fill="rgba(255,255,255,0.03)"/>
              </g>
            </svg>
          </div>
        </section>
      </main>
    </div>
  );
}
