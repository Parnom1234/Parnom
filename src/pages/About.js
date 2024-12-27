import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: "linear-gradient(to right, #4caf50, #2a9d8f)",
          color: "#fff",
          textAlign: "center",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <h1
            className="display-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
            }}
          >
            เกี่ยวกับเรา
          </h1>
          <p
            className="lead"
            style={{
              fontSize: "1.3rem",
              fontWeight: "400",
              maxWidth: "800px",
              margin: "auto",
            }}
          >
            วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ สาขาเทคโนโลยีสารสนเทศ
            - สร้างอนาคตด้วยนวัตกรรมที่ไม่มีสิ้นสุด
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="about-us-section"
        style={{
          padding: "60px 0",
          backgroundColor: "#f7f7f7",
        }}
      >
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              color: "#2d3748",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
            }}
          >
            ภารกิจของเรา
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/459572266_1038987961560629_5992916616841721678_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cP6DHXtBykkQ7kNvgE9C97o&_nc_oc=AdgSyKBOpAZlQK--X6B1M3PRfbEL7mNUbgKLhMDfMoM67XgBTlanNQE0Wi1XdVIgXXA&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AQQbH_fxuPJdy6FF2uSYWsK&oh=00_AYDUXlpxTbc3BFO_qhOqjkWPvuCZ6ZZPTLL1dy7mBN6FZQ&oe=6773FE22"
                alt="About Us"
                className="img-fluid rounded shadow-lg"
                style={{
                  objectFit: "cover",
                  height: "400px",
                  width: "100%",
                }}
              />
            </div>
            <div className="col-md-6">
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#333",
                  lineHeight: "1.6",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                สาขาเทคโนโลยีสารสนเทศมุ่งเน้นการพัฒนาและสร้างบัณฑิตที่มีความรู้ความสามารถ
                เพื่อรองรับการเปลี่ยนแปลงของโลกเทคโนโลยีที่ไม่มีวันหยุดนิ่ง
                เราพร้อมที่จะผลักดันนักศึกษาให้กลายเป็นผู้สร้างสรรค์แห่งยุคใหม่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section
        className="history-section"
        style={{
          backgroundColor: "#fffbf0",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <h2
            className="text-center mb-4"
            style={{
              color: "#2d3748",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
            }}
          >
            ประวัติความเป็นมา
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#333",
                  lineHeight: "1.7",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                วิทยาลัยก่อตั้งขึ้นในปี พ.ศ. 2538 ด้วยความมุ่งมั่นที่จะสร้างสรรค์เทคโนโลยีที่ทันสมัย
                และช่วยยกระดับชุมชนผ่านการพัฒนานวัตกรรม โดยมุ่งเน้นที่คุณภาพการศึกษา
                และการผลิตบัณฑิตที่พร้อมตอบสนองความต้องการของตลาดแรงงาน
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.lannapoly.ac.th/poly_alumni/img/2565.jpg"
                alt="History"
                className="img-fluid rounded shadow-lg"
                style={{
                  objectFit: "cover",
                  height: "400px",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        className="vision-section"
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
            }}
          >
            วิสัยทัศน์ของเรา
          </h2>
          <div
            id="visionCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://i.ytimg.com/vi/OyLcgnQRg5k/maxresdefault.jpg"
                  className="d-block w-100"
                  alt="Vision 1"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>วิสัยทัศน์ที่ 1</h5>
                  <p>
                    เรามุ่งมั่นที่จะเป็นผู้นำด้านเทคโนโลยีสารสนเทศ ที่สร้างสรรค์นวัตกรรมเพื่อพัฒนาสังคม
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.cmthainews.com/wp-content/uploads/2022/05/S__16703590.jpg"
                  className="d-block w-100"
                  alt="Vision 2"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>วิสัยทัศน์ที่ 2</h5>
                  <p>เราจะส่งเสริมการเรียนรู้และพัฒนาทักษะการทำงานที่สามารถนำไปใช้ในชีวิตจริงได้</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://mpics.mgronline.com/pics/Images/566000005762504.JPEG"
                  className="d-block w-100"
                  alt="Vision 3"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>วิสัยทัศน์ที่ 3</h5>
                  <p>
                    เรามุ่งเน้นการสร้างบัณฑิตที่มีทักษะสูงและพร้อมที่จะรับมือกับการเปลี่ยนแปลงของโลกในยุคดิจิทัล
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#visionCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#visionCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="cta-section"
        style={{
          backgroundColor: "#4caf50",
          color: "#fff",
          padding: "60px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 className="mb-4">พร้อมที่จะก้าวไปกับเรา?</h2>
          <p>สมัครเรียนวันนี้ หรือเข้าร่วมกิจกรรมของเราเพื่อสัมผัสประสบการณ์การเรียนรู้ที่แตกต่าง!</p>
          <a href="/apply" className="btn btn-light btn-lg mt-3">
            สมัครเรียน
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
 