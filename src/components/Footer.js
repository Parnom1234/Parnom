import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
      <div className="container">
        <div style={{ marginBottom: '1.5rem' }}>
          <h4>Contact Us</h4>
          <p>
            Lanna Polytechnic College, Chiang Mai <br />
            123 College Road, Mueang Subdistrict, Mueang District, Chiang Mai 50000
          </p>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4>Follow Us</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <h4>Quick Links</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a>
            <a href="/courses" style={{ color: '#fff', textDecoration: 'none' }}>Courses</a>
            <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a>
          </div>
        </div>

        <p style={{ color: '#aaa' }}>© 2024 Lanna Polytechnic College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;