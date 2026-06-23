import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

function Payment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    billingAddress: '',
    city: '',
    zipCode: '',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number (add spaces every 4 digits)
    if (name === 'cardNumber') {
      const formatted = value.replace(/\s/g, '').slice(0, 16);
      const withSpaces = formatted.replace(/(\d{4})/g, '$1 ').trim();
      setFormData({ ...formData, [name]: withSpaces });
      return;
    }

    // Format expiry date (MM/YY)
    if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').slice(0, 4);
      if (formatted.length >= 2) {
        setFormData({ ...formData, [name]: `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}` });
      } else {
        setFormData({ ...formData, [name]: formatted });
      }
      return;
    }

    // Limit CVC to 3 digits
    if (name === 'cvc') {
      const cvcValue = value.replace(/\D/g, '').slice(0, 3);
      setFormData({ ...formData, [name]: cvcValue });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          cardNumber: '',
          expiryDate: '',
          cvc: '',
          billingAddress: '',
          city: '',
          zipCode: '',
        });
        setPaymentSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="payment-container">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="back-button"
      >
        ← Back to Home
      </button>

      {/* Background blobs */}
      <div className="payment-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>

      <div className="payment-content">
        {/* Left side - Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-items">
            <div className="summary-item">
              <div className="item-info">
                <p className="item-name">SCREENSHOW Pro License</p>
                <p className="item-description">1-Year Subscription</p>
              </div>
              <p className="item-price">$299.00</p>
            </div>

            <div className="summary-item">
              <div className="item-info">
                <p className="item-name">Premium Support Package</p>
                <p className="item-description">24/7 Priority Support</p>
              </div>
              <p className="item-price">$49.99</p>
            </div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">
            <p>Subtotal</p>
            <p>$348.99</p>
          </div>

          <div className="summary-row">
            <p>Tax</p>
            <p>$27.92</p>
          </div>

          <div className="summary-total">
            <p>Total</p>
            <p>$376.91</p>
          </div>

          <div className="security-badge">
            <span className="badge-icon">🔒</span>
            <p>Secure Payment Powered by Stripe</p>
          </div>
        </div>

        {/* Right side - Payment Form */}
        <div className="payment-form-wrapper">
          <h2>Payment Details</h2>

          {paymentSuccess ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Payment Successful!</h3>
              <p>Your order has been processed. Check your email for confirmation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="payment-form">
              {/* Personal Information */}
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Card Information */}
              <div className="form-section">
                <h3>Card Information</h3>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength="5"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>CVC</label>
                    <input
                      type="text"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength="3"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="form-section">
                <h3>Billing Address</h3>
                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                    placeholder="123 Main St"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="pay-button"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <span className="spinner"></span>
                    Processing...
                  </>
                ) : (
                  `Pay $376.91`
                )}
              </button>

              <p className="form-note">
                Your payment information is secure and encrypted.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
