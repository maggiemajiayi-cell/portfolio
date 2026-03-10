import { useEffect, useRef } from 'react';
import './Skills.css';

const skillBars = [
  { name: 'C / C++',             pct: 90, color: '#8b5cf6' },
  { name: 'Python',              pct: 82, color: '#f59e0b' },
  { name: 'Embedded Systems',    pct: 85, color: '#06b6d4' },
  { name: 'JavaScript / HTML',   pct: 75, color: '#61dafb' },
  { name: 'SQL / SQLite',        pct: 72, color: '#84cc16' },
  { name: 'GDScript / Godot',    pct: 70, color: '#ec4899' },
];

const categories = [
  {
    icon: '💻', label: 'Languages',
    skills: ['C', 'C++', 'Python', 'SQL', 'JavaScript', 'Verilog'],
  },
  {
    icon: '🔧', label: 'Embedded Systems',
    skills: ['ESP32', 'Arduino', 'Sensor Integration', 'Circuit Debugging', 'Soldering'],
  },
  {
    icon: '🛠️', label: 'Tools',
    skills: ['Git', 'Arduino IDE', 'STM32 Cube IDE', 'Visual Studio', 'DBeaver', 'Excel', 'KiCad', 'Fusion 360', 'Blender'],
  },
  {
    icon: '🌐', label: 'Other / Spoken',
    skills: ['HTML', 'GDScript', 'SQLite', 'English', 'Mandarin Chinese', 'French'],
  },
];

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Trigger bar fills
          e.target.querySelectorAll?.('.skill-bar-fill')?.forEach(bar => {
            bar.style.width = bar.dataset.pct + '%';
          });
        }
      }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="skills-section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Technical <span className="grad-text">Skills</span></h2>
          <p className="section-subtitle">A curated snapshot of my technical stack and proficiency levels.</p>
        </div>

        <div className="skills-layout">
          {/* Bars */}
          <div className="skill-bars-col reveal">
            {skillBars.map(s => (
              <div className="skill-bar-item" key={s.name}>
                <div className="skill-bar-meta">
                  <span className="skill-bar-name">{s.name}</span>
                  <span className="skill-bar-pct">{s.pct}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    data-pct={s.pct}
                    style={{ '--bar-color': s.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Category pills */}
          <div className="skill-categories">
            {categories.map((cat, i) => (
              <div className="skill-cat glass-card reveal" key={cat.label} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="cat-header">
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-label">{cat.label}</span>
                </div>
                <div className="cat-pills">
                  {cat.skills.map(s => (
                    <span className="skill-pill" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
