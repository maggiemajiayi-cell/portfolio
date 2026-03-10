import { useState, useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Make Flora — Computer Vision Hardware Prototype',
    desc: 'MakeUofT 2026 hardware project. Built an interactive system using ESP32-CAM and Roboflow flower detection to trigger dynamic music and real-time physical feedback via I2S audio output.',
    tags: ['C++', 'ESP32', 'Computer Vision', 'Roboflow'],
    category: 'hardware',
    gradient: 'linear-gradient(135deg, #10b981 0%, #ec4899 100%)',
    emoji: '🌸',
    github: 'https://github.com/maggiemajiayi-cell/Make_Flora',
    live: 'https://github.com/maggiemajiayi-cell/Make_Flora',
    featured: true,
  },
  {
    id: 2,
    title: 'Wander OvO — 2D Platformer Game',
    desc: 'Led a small team to design and build a platformer game in a 72-hour sprint at UW Game Jam. Implemented physics and scene/state transitions in GDScript. Published on itch.io.',
    tags: ['Godot', 'GDScript', 'Git', 'Game Dev'],
    category: 'software',
    gradient: 'linear-gradient(135deg, #f472b6 0%, #be185d 100%)',
    emoji: '🎮',
    github: 'https://maggieeeeem.itch.io/wander-ovo',
    live: 'https://maggieeeeem.itch.io/wander-ovo',
    featured: true,
  },
  {
    id: 3,
    title: 'EMG Fabric — Biotron Design Team',
    desc: 'Biotron Design Team project. Designed low-noise circuit connections for EMG signal clarity. Reduced interference through optimized wiring, grounding, sensor placement, and precision soldering.',
    tags: ['C++', 'ESP32', 'Arduino IDE', 'EMG Sensors'],
    category: 'hardware',
    gradient: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
    emoji: '⚡',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Delirium Detection Wristband — Embedded System',
    desc: 'Arduino-based wearable integrating pulse and motion sensors to identify early physiological indicators of delirium. Used SQLite to store movement patterns, IR values, and warning signals for debugging.',
    tags: ['C++', 'ESP32', 'SQLite', 'Embedded Systems'],
    category: 'hardware',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #10b981 100%)',
    emoji: '⌚',
    github: '#',
    live: '#',
    featured: false,
  },
];

const FILTERS = ['All', 'Hardware', 'Software'];
const filterMap = { 'All': null, 'Hardware': 'hardware', 'Software': 'software' };

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === filterMap[activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]);

  return (
    <section id="projects" ref={ref} className="projects-section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured <span className="grad-text">Projects</span></h2>
          <p className="section-subtitle">Things I&apos;ve built that I&apos;m proud of.</p>
        </div>

        {/* Filter tabs */}
        <div className="project-filters reveal">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div className="project-card glass-card reveal" key={p.id} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              {/* Visual header */}
              <div className="project-thumb" style={{ background: p.gradient }}>
                <span className="project-emoji">{p.emoji}</span>
                {p.featured && <span className="featured-badge">⭐ Featured</span>}
              </div>

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map(t => <span className="skill-pill" key={t}>{t}</span>)}
                </div>

                <div className="project-links">
                  <a href={p.github} className="proj-link" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.577 9.577 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    Code
                  </a>
                  <a href={p.live} className="proj-link proj-live" aria-label="Live">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
