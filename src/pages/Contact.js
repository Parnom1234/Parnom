import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!formData.email) formErrors.email = "กรุณากรอก Email";
    if (!formData.password) formErrors.password = "กรุณากรอกรหัสผ่าน";
    if (!formData.message) formErrors.message = "กรุณาใส่ข้อความที่ต้องการส่ง";
    setErrors(formErrors);
  };

  return (
    <div>
      {/* Contact Us Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4" style={{ color: "#4caf50" }}>
            ติดต่อเรา
          </h1>
          <p className="text-center">
            หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติม โปรดติดต่อเราด้วยข้อมูลด้านล่าง
          </p>
          <ul className="list-unstyled text-center">
            <li>
              <strong>โทรศัพท์:</strong> 053-874-245
            </li>
            <li>
              <strong>อีเมล:</strong> info@lannapolytechnic.ac.th
            </li>
            <li>
              <strong>ที่อยู่:</strong> วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่, จังหวัดเชียงใหม่, ประเทศไทย
            </li>
          </ul>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-warning py-5">
        <div className="container text-center">
          <h2 className="mb-4" style={{ color: "#4caf50" }}>
            ตำแหน่งที่ตั้งของเรา
          </h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.8193843967956!2d98.99250631536188!3d18.783011467511436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a5f86f8e7b7%3A0xa5d70d14c76eec4c!2sLanna%20Polytechnic%20College!5e0!3m2!1sen!2sth!4v1632742849977!5m2!1sen!2sth"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#4caf50" }}>
            แบบฟอร์มติดต่อ
          </h2>
          <form onSubmit={handleSubmit} className="w-75 mx-auto">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                placeholder="กรุณากรอก Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                รหัสผ่าน:
              </label>
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="text-danger">{errors.password}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                ข้อความ:
              </label>
              <textarea
                className={`form-control ${
                  errors.message ? "is-invalid" : ""
                }`}
                id="message"
                name="message"
                rows="5"
                placeholder="กรุณาใส่ข้อความที่ต้องการส่ง"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <div className="text-danger">{errors.message}</div>
              )}
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">
                ส่งข้อความ
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
