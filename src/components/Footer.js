import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-5">
      <div className="container">
        <div className="mb-4">
          <h5>ติดต่อเรา</h5>
          <p>
            วิทยาลัยโปลิเทคนิคลานนา เชียงใหม่ <br />
            123 ถนนวิทยาลัย ตำบลเมือง อำเภอเมือง จังหวัดเชียงใหม่ 50000
          </p>
        </div>

        <div className="mb-4">
        <h5>ติดตามเรา</h5>
        <div className="d-flex justify-content-center gap-3">
            <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            style={{ fontSize: '1.5rem' }}
            >
            <i className="fab fa-facebook"></i>
            </a>
            <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            style={{ fontSize: '1.5rem' }}
            >
            <i className="fab fa-twitter"></i>
            </a>
            <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            style={{ fontSize: '1.5rem' }}
            >
            <i className="fab fa-instagram"></i>
            </a>
        </div>
        </div>


        <div className="mb-4">
          <h5>ลิงก์สำคัญ</h5>
          <div className="d-flex justify-content-center gap-4">
            <a href="/about" className="text-white">
              เกี่ยวกับเรา
            </a>
            <a href="/courses" className="text-white">
              หลักสูตร
            </a>
            <a href="/contact" className="text-white">
              ติดต่อเรา
            </a>
          </div>
        </div>

        <div className="text-white-50">
          <p>© 2024 โปลิเทคนิคลานนา. เชียงใหม่. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
