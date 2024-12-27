import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">โปลิเทคนิคลานนา</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">หน้าหลัก</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">เกี่ยวกับ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">หลักสูตร</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">ติดต่อ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
