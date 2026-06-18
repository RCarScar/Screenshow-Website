import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">SCREENSHOW</div>
          <div className="nav-links">
            <a href="#features">Home</a>
            <a href="#contact">Features</a>
            <a href="#showcase">Comparison</a>
            <a href="#contact">Pricing</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Capture. Perfect. Share.
          </h1>
          <p className="hero-subtitle">
            Experience technology like never before
          </p>
          <button className="cta-button">Explore Now</button>
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
      <section id="features" className="showcase-section">
        <div className="section-content">
          <div 
            className="showcase-text" 
            style={{
              opacity: Math.max(0, 1 - scrollY / 800),
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <h2>Precision Engineering</h2>
            <p>
              Every detail is crafted with meticulous attention. Our product combines 
              cutting-edge technology with intuitive design to deliver an unparalleled experience.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Ultra-responsive interface</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Adaptive intelligence</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Seamless integration</span>
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
      <section className="showcase-section alternate">
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
                <span>Premium materials</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">→</span>
                <span>Timeless design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section 3 */}
      <section id="showcase" className="showcase-section">
        <div className="section-content">
          <div className="showcase-text">
            <h2>Intelligent Innovation</h2>
            <p>
              Our AI-powered features learn and adapt to your needs, creating 
              a personalized experience that improves with every interaction.
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
                <span>Predictive insights</span>
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
          <p>Join thousands of innovators using our platform</p>
          <button className="cta-button primary">Get Started Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 SCREENSHOW. All rights reserved.</p>
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
