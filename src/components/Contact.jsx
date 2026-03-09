import { useState, useEffect, useRef } from 'react';
import './Contact.css';

const socials = [
  { label: 'GitHub',   href: 'https://github.com/maggiemajiayi-cell', icon: <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.577 9.577 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jiayi-ma-795600262', icon: <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: 'Email',    href: 'mailto:m286ma@uwaterloo.ca', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg> },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let&apos;s <span className="grad-text">Work Together</span></h2>
          <p className="section-subtitle">Have a project in mind? I&apos;d love to hear about it. Drop me a message!</p>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info reveal">
            <div className="contact-item glass-card">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Ontario, Canada</p>
              </div>
            </div>
            <div className="contact-item glass-card">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>m286ma@uwaterloo.ca</p>
              </div>
            </div>
            <div className="contact-item glass-card">
              <div className="contact-icon">⏰</div>
              <div>
                <h4>Availability</h4>
                <p>Open to opportunities</p>
              </div>
            </div>

            <div className="social-links">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="social-link glass-card" aria-label={s.label} title={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="contact-form glass-card reveal" onSubmit={submit}>
            {sent && <div className="form-success">🎉 Message sent! I&apos;ll get back to you soon.</div>}

            <div className="form-group">
              <input id="name" name="name" type="text" value={form.name} onChange={handle} required placeholder=" " />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input id="email" name="email" type="email" value={form.email} onChange={handle} required placeholder=" " />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handle} required placeholder=" " />
              <label htmlFor="message">Your Message</label>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
