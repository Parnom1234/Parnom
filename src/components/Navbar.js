import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#f8f9fa', padding: '0.5rem 1rem', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', textDecoration: 'none' }}>
          Lanna Polytechnic
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ color: '#007BFF', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: '#007BFF', textDecoration: 'none' }}>About</Link>
          <Link to="/courses" style={{ color: '#007BFF', textDecoration: 'none' }}>Courses</Link>
          <Link to="/contact" style={{ color: '#007BFF', textDecoration: 'none' }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
