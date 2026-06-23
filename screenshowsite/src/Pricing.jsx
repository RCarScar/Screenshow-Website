import { useNavigate } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Screenshow Pro',
      price: '$9',
      period: '/month',
      description: 'Perfect for creators',
      features: [
        'Full feature access',
        'Lifetime updates',
        'Shareable links',
        'Basic support',
        '1 personal device',
      ],
      highlighted: false,
    },
    {
      name: 'Screenshow Lifetime',
      price: '$220',
      period: '/One-time payment. 1 year of updates included.',
      description: 'For creators and studios',
      features: [
        'Full feature access',
        'Updates for 1 year',
        'Shareable links',
        'Basic support',
        '1 Personal device',
      ],
      highlighted: true,
    },
    {
      name: 'Screenshow Enterprise',
      price: '199',
      period: '/month',
      description: 'For large teams',
      features: [
        'Full feature access',
        'Priority Support',
        'Shareable links',
        'Custom contract',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="pricing-container">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="back-button pricing-back"
      >
        ← Back
      </button>

      {/* Header */}
      <div className="pricing-header">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the perfect plan for your needs</p>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
          >
            {plan.highlighted && <div className="featured-badge">Most Popular</div>}
            
            <div className="plan-header">
              <h2>{plan.name}</h2>
              <p className="plan-description">{plan.description}</p>
            </div>

            <div className="plan-price">
              <span className="price">{plan.price}</span>
              <span className="period">{plan.period}</span>
            </div>

            <div className="plan-features">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="feature">
                  <span className="checkmark">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/payment')}
              className={`cta-button ${plan.highlighted ? 'primary' : ''}`}
            >
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Can I change plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer refunds?</h3>
            <p>We offer a 30-day money-back guarantee if you're not satisfied with our service.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a free trial?</h3>
            <p>All plans come with a 14-day free trial. No credit card required to get started.</p>
          </div>
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
