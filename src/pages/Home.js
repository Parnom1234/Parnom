import React from "react";

const Home = () => {
  return (
    <div>
      {/* Main Wrapper Section */}
      <section
        className="main-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "linear-gradient(to right, #4caf50, #2a9d8f)",
          color: "#fff",
          textAlign: "center",
          padding: "40px 0",
        }}
      >
        {/* Logo and Heading */}
        <div className="logo-heading">
          <img
            src="https://www.lannapoly.ac.th/web/assets/logo_lannapoly-CnawhWXg.png"
            alt="Lanna Polytechnic Logo"
            style={{
              width: "180px",
              height: "auto",
              marginBottom: "30px",
            }}
          />
          <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "3rem" }}>
            วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา
          </h1>
          <p
            className="lead"
            style={{
              fontSize: "1.5rem",
              fontWeight: "300",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "40px",
            }}
          >
            สาขาเทคโนโลยีสารสนเทศ
          </p>
        </div>

        {/* Call to Action */}
        <div className="cta">
          <a
            href="#projects"
            className="btn btn-primary"
            style={{
              padding: "10px 20px",
              fontSize: "1.2rem",
              backgroundColor: "#ff6347",
              color: "#fff",
              borderRadius: "25px",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
          >
            ดูโครงการที่น่าสนใจ
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="projects"
        style={{
          padding: "60px 0",
          backgroundColor: "#f8f8f8",
          borderTop: "5px solid #ff6347",
        }}
      >
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              color: "#2d3748",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            โครงการที่น่าสนใจ
          </h2>
          <div
            className="row row-cols-1 row-cols-md-3 g-4"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {/* Project Card 1 */}
            <div className="col">
              <div
                className="card"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMBTDepOQjEg-LkTA3nlfaogwgkMa6C4sGA&s"
                  className="card-img-top"
                  alt="Project 1"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">โครงการที่ 1</h5>
                  <p className="card-text">
                    รายละเอียดเกี่ยวกับโครงการ 1
                  </p>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="col">
              <div
                className="card"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg"
                  className="card-img-top"
                  alt="Project 2"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">โครงการที่ 2</h5>
                  <p className="card-text">
                    รายละเอียดเกี่ยวกับโครงการ 2
                  </p>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="col">
              <div
                className="card"
                style={{
                  border: "none",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src="https://www.lannapoly.ac.th/poly_alumni/img/2566.jpg"
                  className="card-img-top"
                  alt="Project 3"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">โครงการที่ 3</h5>
                  <p className="card-text">
                    รายละเอียดเกี่ยวกับโครงการ 3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#fff",
          borderTop: "5px solid #4caf50",
        }}
      >
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              color: "#2d3748",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
              textTransform: "uppercase",
            }}
          >
            เกี่ยวกับเรา
          </h2>
          <p
            className="text-center"
            style={{
              color: "#333",
              fontSize: "1.1rem",
              lineHeight: "1.7",
            }}
          >
            เว็บไซต์นี้ถูกสร้างเมื่อวันที่ 27 ธันวาคม พ.ศ. 2567 โดยนายเผอหนุ่ม จายคำ IT4102 เลขที่ 25
            <br />
            เพื่อเป็นส่วนหนึ่งของวิชา Front-End Development
            <br />
            เว็บไซต์นี้ถูกออกแบบมาเพื่อแบ่งปันข้อมูลและแรงบันดาลใจให้กับผู้ที่สนใจด้านเทคโนโลยีสารสนเทศ
            <br />
            เราหวังว่าเว็บไซต์นี้จะเป็นแหล่งข้อมูลที่ช่วยให้คุณก้าวไปสู่ความสำเร็จในเส้นทางการพัฒนาซอฟต์แวร์!
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#4caf50",
          color: "#fff",
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <p>&copy; 2024 วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
