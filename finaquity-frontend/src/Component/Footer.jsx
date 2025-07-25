import React from "react";
import "./Footer.css";
import Particles from "../Particles/Particles";
import logo from "../Images/logo.avif";

const Footer = () => {
  const handleLinkClick = (linkType) => {
    console.log(`Navigation link clicked: ${linkType}`);
    //  navigation logic
  };

  const handleSocialClick = (platform) => {
    console.log(`Social link clicked: ${platform}`);
    //  social media navigation logic
    const socialUrls = {
      linkedin: "https://linkedin.com/company/finaquity",
      twitter: "https://twitter.com/finaquity",
      instagram: "https://instagram.com/finaquity",
    };
  };

  return (
    <footer className="footer">
      <div className="footer-box">
        <div className="container">
          <div className="animation-left">
            <div
              style={{ width: "100%", height: "40vh", position: "relative" }}
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={350}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
          </div>
          <div className="animation-right">
            <div
              style={{ width: "100%", height: "40vh", position: "relative" }}
            >
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={350}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
          </div>

          <div className="footer-grid">
            {/* Brand Section */}
            <div className="brand-section">
              <div className="brand-title">
                <img src={logo} alt="FINAQUITY Logo" className="brand-logo" />
              </div>
              <p className="brand-description">
                Plan and navigate from idea to launch.
              </p>

              <a href="mailto:hello@suprema.com" className="email-link">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@suprema.com
              </a>

              <div className="status-indicator">
                <div className="status-dot"></div>
                <span className="status-text">All Systems Operational</span>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="footer-column">
              <h3>Quick Navigation</h3>
              <ul className="footer-links">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("product-overview");
                    }}
                  >
                    Product Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("features");
                    }}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("pricing");
                    }}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("testimonials");
                    }}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("faqs");
                    }}
                  >
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>

            {/* All Pages */}
            <div className="footer-column">
              <h3>All Pages</h3>
              <ul className="footer-links">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("home");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("waitlist");
                    }}
                  >
                    Waitlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("contact");
                    }}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("blogs");
                    }}
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("changelog");
                    }}
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("privacy");
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("404");
                    }}
                  >
                    404
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Handles */}
            <div className="footer-column">
              <h3>Social Handles</h3>
              <div className="social-links">
                <a
                  href="#"
                  className="social-link"
                  aria-label="LinkedIn"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick("linkedin");
                  }}
                >
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-link"
                  aria-label="X (Twitter)"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick("twitter");
                  }}
                >
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="social-link"
                  aria-label="Instagram"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick("instagram");
                  }}
                >
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-info">
              <span>© 2024 All rights reserved.</span>
              <span className="footer-risk">
                Investments are subject to market risks.
              </span>
              <div className="footer-right">
                <a
                  href="#"
                  className="privacy-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("privacy-bottom");
                  }}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
