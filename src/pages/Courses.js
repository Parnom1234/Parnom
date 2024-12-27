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
      description: "หลักสูตรที่มุ่งเน้นการพัฒนาทักษะพื้นฐานด้านเทคโนโลยีสารสนเทศ...",
      details: "หลักสูตรนี้เน้นการเรียนรู้พื้นฐานที่สำคัญของเทคโนโลยีสารสนเทศ...",
      imgUrl: "https://path-to-image.com",  // ใส่ URL รูปภาพที่แท้จริง
    },
    {
      id: 2,
      title: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      description: "หลักสูตรที่เน้นการฝึกฝนทักษะขั้นสูงในด้านเทคโนโลยีสารสนเทศ...",
      details: "หลักสูตรนี้มุ่งเน้นการพัฒนาทักษะที่สูงขึ้นในด้านเทคโนโลยีสารสนเทศ...",
      imgUrl: "https://path-to-image.com",  // ใส่ URL รูปภาพที่แท้จริง
    },
    // เพิ่มข้อมูลหลักสูตรเพิ่มเติมที่นี่
  ];

  return (
    <div>
      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4" style={{ color: "#4caf50", fontWeight: "600" }}>
            หลักสูตรที่เราเปิดสอน
          </h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {courses.map((course) => (
              <div className="col" key={course.id}>
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
                      objectFit: "cover",
                      height: "200px",
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

      {/* Modal for Course Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{courseDetails.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{courseDetails.details}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            ปิด
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Courses;
