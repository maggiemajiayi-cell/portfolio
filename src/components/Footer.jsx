import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="grad-text">Maggie</span>
          <span className="logo-bracket">/&gt;</span>
        </a>
        <p className="footer-copy">
          © {new Date().getFullYear()} Maggie Ma. Built with ⚛️ React &amp; ❤️
        </p>
        <a href="#home" className="back-top" aria-label="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
