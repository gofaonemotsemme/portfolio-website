import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="seperator-border"/>
            <div className="container">
                <p className="footer-text">© 2025 Lesedi Motsemme. All rights reserved.</p>
                <div className="footer-links">
                <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                </div>
            </div>
    </footer>
  );
};

export default Footer;