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
      imgUrl: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/466679249_1066713731916739_6371523822895452620_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Dtb5QNm4jNwQ7kNvgHHmf75&_nc_oc=Adjt3aoXUpeuBA64lVBrsNi6YWKpPZk76-BLjTTIW3DWXTNJWuZF3owZ554RM-PBvkI&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AcSKV4LRFa6R9zoHm78_Qs6&oh=00_AYAHpSTQjBppIsYwS6Pu0qoff6Bl1DJqDtDktuNwb46Uaw&oe=677D267D",
    },
    {
      id: 2,
      title: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)",
      description: "หลักสูตรที่เน้นการฝึกฝนทักษะขั้นสูงในด้านเทคโนโลยีสารสนเทศ...",
      details: "หลักสูตรนี้มุ่งเน้นการพัฒนาทักษะที่สูงขึ้นในด้านเทคโนโลยีสารสนเทศ...",
      imgUrl: "https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/467157927_1066713808583398_5751301120261094833_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GuEzFp8LmI4Q7kNvgHewSoG&_nc_oc=AdjcDMi3yNsIv_eFalvb7WOsFHOyhkj-LKC00QYvmOtTCqGr_1cwC14og_8unw1uqSs&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AUU0q5AoOUQNLhAp-VtF4-c&oh=00_AYCD6TaDMzr0ccfQztxAvQ7gGeHLyFZQGxpbrT0a1qvvJw&oe=677D1A29",
    },
  ];

  return (
    <div>
      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4" style={{ color: "#4caf50", fontWeight: "600" }}>
            หลักสูตรที่เราเปิดสอน
          </h1>
          <div className="row justify-content-center">
            {courses.map((course) => (
              <div className="col-md-6 col-lg-4 mb-4" key={course.id}>
                <div
                  className="card h-100 shadow-lg border-0 d-flex flex-column justify-content-center align-items-center text-center"
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
                      width: "100%",
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
