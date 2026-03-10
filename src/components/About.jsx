import { useEffect, useRef } from 'react';
import './About.css';

const timeline = [
  { year: '2025 – 2030', title: 'BASc Computer Engineering @ University of Waterloo', desc: 'Co-op program in Ontario, Canada. Expected graduation 2030.' },
  { year: 'Feb. 2026', title: 'Make Flora — Computer Vision Hardware Prototype', desc: 'Built an interactive system using ESP32-CAM + Roboflow flower detection to trigger real-time music responses.' },
  { year: 'Feb. 2026', title: 'Wander OvO — 2D Platformer Game', desc: 'Led a team to design and ship a platformer game using Godot/GDScript. Published on itch.io.' },
  { year: 'Oct. 2025 – Nov. 2025', title: 'Delirium Detection Wristband — Embedded System', desc: 'Arduino-based wearable integrating pulse and motion sensors to detect early physiological indicators of delirium.' },
  { year: 'Sept. 2025 – Dec. 2025', title: 'EMG Fabric — Biotron Design Team', desc: 'Designed low-noise EMG circuits, improved signal clarity with optimized wiring, grounding, and precision soldering.' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref}>
      <div className="container about-grid">
        {/* Left */}
        <div className="about-left reveal">
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">Building things that<br /><span className="grad-text">actually work</span></h2>
          <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
            I&apos;m a Computer Engineering student at the University of Waterloo with hands-on
            experience building embedded systems, integrating sensors, and developing interactive
            hardware–software prototypes. I enjoy combining low-level functionality with tangible feedback.
          </p>
          <p className="section-subtitle">
            Outside of engineering, I&apos;m a competitive rower, a published school newspaper
            reporter, and a Duke of Edinburgh Bronze Award recipient with 200+ volunteer hours.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Let&apos;s Connect
          </a>
        </div>

        {/* Right — timeline */}
        <div className="about-right">
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="timeline-item reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="timeline-dot" />
                <div className="timeline-content glass-card">
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
