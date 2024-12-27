import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [courseDetails, setCourseDetails] = useState({});

  const handleShowModal = (course) => {
    setCourseDetails(course);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const courses = [
    {
      id: 1,
      title: "ประกาศนียบัตรวิชาชีพ (ปวช.)",
      description:
        "หลักสูตรที่มุ่งเน้นการพัฒนาทักษะพื้นฐานด้านเทคโนโลยีสารสนเทศ เพื่อเตรียมความพร้อมสำหรับการศึกษาต่อหรือการทำงานในสายงานที่เกี่ยวข้อง",
      details:
        "หลักสูตรนี้เน้นการเรียนรู้พื้นฐานที่สำคัญของเทคโนโลยีสารสนเทศ เช่น การใช้งานโปรแกรมคอมพิวเตอร์, การเรียนรู้ระบบเครือข่าย, และการพัฒนาเว็บไซต์เบื้องต้น",
      imgUrl:
        "https://lh3.googleusercontent.com/proxy/2juXJ2bHZ2FAiGuoX5TB215wA5mTgJjwG9lAXUtAeTVsEnPhYCwTdFdcih6x365XtF1LmD0Utsj4M14slloS6XmDawfgwW8y6OBadExW0ZVCzUkrGQUxlQDuiwWPzFSA2Q",
    },
    {
      id: 2,
      title: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      description:
        "หลักสูตรขั้นสูงที่เน้นการฝึกฝนทักษะและความรู้เชิงลึกในด้านเทคโนโลยีสารสนเทศ เพื่อเตรียมความพร้อมสำหรับการประกอบอาชีพหรือศึกษาต่อในระดับที่สูงขึ้น",
      details:
        "หลักสูตรนี้มุ่งเน้นการฝึกฝนในระดับที่สูงขึ้น เช่น การพัฒนาระบบฐานข้อมูล, การจัดการเครือข่ายคอมพิวเตอร์, และการพัฒนาแอปพลิเคชันเชิงธุรกิจ",
      imgUrl:
        "https://static.naewna.com/uploads/news/gallery/source/201134.jpg",
    },
    {
      id: 3,
      title: "การฝึกอบรมระยะสั้น",
      description:
        "หลักสูตรพิเศษระยะสั้นที่มุ่งเน้นการเสริมสร้างทักษะเฉพาะด้านในเทคโนโลยีสารสนเทศ สำหรับผู้ที่ต้องการพัฒนาความรู้และความสามารถเพิ่มเติม",
      details:
        "หลักสูตรระยะสั้นนี้เหมาะสำหรับผู้ที่ต้องการเรียนรู้ทักษะเฉพาะทาง เช่น การพัฒนาเว็บไซต์, การวิเคราะห์ข้อมูล, และการใช้เครื่องมือทางเทคโนโลยีสารสนเทศอื่น ๆ",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQNdk01TWdc6ouxJFNYbVtROXC3SgBx_g5w&s",
    },
  ];

  return (
    <div>
      {/* Courses Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4" style={{ color: "#4caf50" }}>
            หลักสูตรที่เราเปิดสอน
          </h1>
          <p className="text-center mb-5">
            สำรวจหลักสูตรต่าง ๆ ที่เรามีในสาขาเทคโนโลยีสารสนเทศ
          </p>
          <div className="row">
            {courses.map((course) => (
              <div className="col-md-4" key={course.id}>
                <div
                  className="card h-100 shadow-lg border-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleShowModal(course)}
                >
                  <img
                    src={course.imgUrl}
                    className="card-img-top"
                    alt={course.title}
                    style={{
                      transition: "transform 0.3s ease",
                      objectFit: "cover", // Make sure all images are the same size
                      height: "200px", // Set fixed height for images
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#4caf50" }}>
                      {course.title}
                    </h5>
                    <p className="card-text">{course.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for course details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{courseDetails.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{courseDetails.details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Custom Styles for Hover Effects */}
      <style>
        {`
          .card-img-top:hover {
            transform: scale(1.05);
            cursor: pointer;
          }

          .card:hover {
            box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default Courses;
