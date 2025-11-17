import React, { useState, useEffect, useMemo } from 'react';
import { FiMail } from 'react-icons/fi';
import './ComingSoon.css';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date to March 2nd (current or next year)
  const launchDate = useMemo(() => {
    const now = new Date();
    const year = now.getMonth() < 2 || (now.getMonth() === 2 && now.getDate() < 2) 
      ? now.getFullYear() 
      : now.getFullYear() + 1;
    return new Date(year, 2, 2); // March 2nd (month is 0-indexed)
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="coming-soon">
      {/* Animated Background */}
      <div className="background-animation">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo-container">
            <img src="/logo.jpeg" alt="Jobs For Me Logo" className="logo-image" />
            <h1 className="website-name">Jobs For Me</h1>
          </div>
        </header>

        {/* Main Section */}
        <main className="main-content">
          <div className="content-wrapper">
            {/* Left Side - Text Content */}
            <div className="text-content">
              <h2 className="title">
                Revolutionizing Career Opportunities with <span className="gradient-text">AI</span>
              </h2>
              <p className="subtitle">
                Launching India's 1st Part-Time Job Platform
              </p>

              {/* Countdown Timer - Mobile Only */}
              <div className="countdown-section-mobile">
                <div className="countdown-inline">
                  <div className="countdown">
                    <div className="countdown-item">
                      <div className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</div>
                      <div className="countdown-label">D</div>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-item">
                      <div className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="countdown-label">H</div>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-item">
                      <div className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="countdown-label">M</div>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-item">
                      <div className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="countdown-label">S</div>
                    </div>
                  </div>
                  <span className="launch-date-small">Launching March 2nd</span>
                </div>
              </div>

              {/* Email Subscription */}
              <form className="email-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email to get notified"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  {submitted ? 'Subscribed!' : 'Notify Me'}
                </button>
              </form>

              {submitted && (
                <div className="success-message">
                  🎉 Thank you! We'll notify you when we launch.
                </div>
              )}
            </div>

            {/* Right Side - Countdown Timer - Desktop Only */}
            <div className="countdown-section countdown-section-desktop">
              <div className="countdown-inline">
                <div className="countdown">
                  <div className="countdown-item">
                    <div className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="countdown-label">D</div>
                  </div>
                  <div className="countdown-separator">:</div>
                  <div className="countdown-item">
                    <div className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="countdown-label">H</div>
                  </div>
                  <div className="countdown-separator">:</div>
                  <div className="countdown-item">
                    <div className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="countdown-label">M</div>
                  </div>
                  <div className="countdown-separator">:</div>
                  <div className="countdown-item">
                    <div className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="countdown-label">S</div>
                  </div>
                </div>
                <span className="launch-date-small">Launching March 2nd</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ComingSoon;

