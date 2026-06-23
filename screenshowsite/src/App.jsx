import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, { threshold: 0.1 });

    // Observe all showcase sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">SCREENSHOW</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#showcase">Showcase</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            The Future of Production
          </h1>
          <p className="hero-subtitle">
            Experience software like never before
          </p>
          <button className="cta-button">Create Now</button>
        </div>
        
        <div 
          className="hero-background" 
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="gradient-blob blob-1"></div>
          <div className="gradient-blob blob-2"></div>
        </div>
      </section>

      {/* Product Showcase Section 1 */}
      <section 
        id="section-1"
        ref={(el) => (sectionRefs.current['section-1'] = el)}
        className={`showcase-section ${visibleSections['section-1'] ? 'reveal' : ''}`}
      >
        <div className="section-content" id="features">
          <div className="showcase-text">
            <h2>HD Render Power</h2>
            <p>
              Every detail is captured in high definition quality. Our product combines 
              cutting-edge technology with intuitive design to deliver an unparalleled experience.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Supports 4k HDR</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Adaptive Visual Features</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Optimized, Parallel Threading</span>
              </div>
            </div>
          </div>
          
          <div className="showcase-visual">
            <div className="product-card card-1">
              <div className="card-icon">◆</div>
              <p>Performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section 2 */}
      <section 
        id="section-2"
        ref={(el) => (sectionRefs.current['section-2'] = el)}
        className={`showcase-section alternate ${visibleSections['section-2'] ? 'reveal' : ''}`}
      >
        <div className="section-content">
          <div className="showcase-visual">
            <div className="product-card card-2">
              <div className="card-icon">✦</div>
              <p>Design</p>
            </div>
          </div>
          
          <div className="showcase-text">
            <h2>Aesthetic Excellence</h2>
            <p>
              Form follows function in our minimalist approach. A refined visual language 
              that speaks through simplicity and elegance.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Minimalist aesthetic</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>3D Tilt, Pan, Motion Blur.</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Fast Workflow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section 3 */}
      <section 
        id="section-3"
        ref={(el) => (sectionRefs.current['section-3'] = el)}
        className={`showcase-section ${visibleSections['section-3'] ? 'reveal' : ''}`}
      >
        <div className="section-content" id="showcase">
          <div className="showcase-text">
            <h2>Intelligent Recording</h2>
            <p>
              Our AI-powered features learn and adapt to your needs, creating 
              a personalized video that improves with every interaction.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Smart algorithms</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Real-time adaptation</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Manual Takeover</span>
              </div>
            </div>
          </div>
          
          <div className="showcase-visual">
            <div className="product-card card-3">
              <div className="card-icon">⬢</div>
              <p>Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>10M+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat-card">
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform?</h2>
          <p>Join thousands of creators using our platform</p>
          <button className="cta-button primary">Get Started Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Furqan Ali. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#social">Social</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
