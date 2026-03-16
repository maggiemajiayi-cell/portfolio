import { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  'Full stack developer, software to hardware',
  '2D, ACG lover',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        {/* Left — text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for hire
          </div>

          <h1 className="hero-name">
            Hi, I&apos;m <span className="grad-text">JiaYi(Maggie) Ma</span>
          </h1>

          <div className="hero-role">
            <span className={`role-text ${visible ? 'role-in' : 'role-out'}`}>
              {roles[roleIdx]}
            </span>
          </div>

          <p className="hero-desc">
                            Computer Engineering student at the University of Waterloo with hands-on experience in embedded systems, C/C++, and hardware-software integration. I've built medical wearables, computer vision prototypes, and 2D games - I learn fast, ship real projects, and thrive under tight deadlines.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l-4 4-4-4" /><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
              View My Work
            </a>
            <a href="./Resume_8_0.pdf" download="Maggie_Ma_Resume.pdf" className="btn btn-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download Resume
            </a>
          </div>


        </div>

        {/* Right — avatar */}
        <div className="hero-avatar-wrap">
          <div className="avatar-ring ring-1" />
          <div className="avatar-ring ring-2" />
          <div className="avatar-ring ring-3" />
          <div className="avatar-glow" />
          <img src="./avatar.png" alt="Maggie Ma" className="avatar-img" />

          {/* Floating chips */}
          <div className="float-chip chip-godot">🎮 Godot</div>
          <div className="float-chip chip-cpp">🔷 C++</div>
          <div className="float-chip chip-js">🟨 JavaScript</div>
          <div className="float-chip chip-ide">🛠️ IDE</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span className="scroll-mouse">
          <span className="scroll-dot" />
        </span>
      </a>
    </section>
  );
}
