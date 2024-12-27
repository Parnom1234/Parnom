import React from "react";

const Courses = () => {
  return (
    <div>
      {/* Courses Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4" style={{ color: "#4caf50" }}>
            หลักสูตรที่เราเปิดสอน
          </h1>
          <p className="text-center">
            สำรวจหลักสูตรต่าง ๆ ที่เรามีในสาขาเทคโนโลยีสารสนเทศ
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#4caf50" }}>
                    ประกาศนียบัตรวิชาชีพ (ปวช.)
                  </h5>
                  <p className="card-text">
                    หลักสูตรที่มุ่งเน้นการพัฒนาทักษะพื้นฐานด้านเทคโนโลยีสารสนเทศ
                    เพื่อเตรียมความพร้อมสำหรับการศึกษาต่อหรือการทำงานในสายงานที่เกี่ยวข้อง
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#4caf50" }}>
                    ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
                  </h5>
                  <p className="card-text">
                    หลักสูตรขั้นสูงที่เน้นการฝึกฝนทักษะและความรู้เชิงลึกในด้านเทคโนโลยีสารสนเทศ
                    เพื่อเตรียมความพร้อมสำหรับการประกอบอาชีพหรือศึกษาต่อในระดับที่สูงขึ้น
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "#4caf50" }}>
                    การฝึกอบรมระยะสั้น
                  </h5>
                  <p className="card-text">
                    หลักสูตรพิเศษระยะสั้นที่มุ่งเน้นการเสริมสร้างทักษะเฉพาะด้านในเทคโนโลยีสารสนเทศ
                    สำหรับผู้ที่ต้องการพัฒนาความรู้และความสามารถเพิ่มเติม
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
