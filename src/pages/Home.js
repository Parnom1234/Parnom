import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://uat-backend.thaisisterhood.com/public/uploads/place/13/original/654c65f35a0a11699505651.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
        color: "#fff",
      }}
    >
      {/* Header Section */}
      <header className="bg-success text-white text-center py-5">
        <div className="container">
          {/* Logo Section */}
          <img
            src="https://www.lannapoly.ac.th/web/assets/logo_lannapoly-CnawhWXg.png" // แก้ URL เป็นลิงก์โลโก้วิทยาลัย
            alt="Logo"
            style={{
              width: "150px", // ขนาดโลโก้
              height: "auto", // อัตราส่วนที่เหมาะสม
              marginBottom: "20px", // เว้นช่องว่างระหว่างโลโก้กับหัวข้อ
            }}
          />
          <h1>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา</h1>
          <p className="lead">สาขาเทคโนโลยีสารสนเทศ</p>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-5">
        <div className="container">
          <h2
            className="text-center mb-4"
            style={{
              color: "#ffcc00",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            ภาพหน้าสนใจ
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-lg">
                <img
                  src="https://www.konlanna.com/media/img/4k9ajACv5frpQGm7vUTnbEnSCYjU7ssq.jpg"
                  className="card-img-top"
                  alt="Project 1"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-lg">
                <img
                  src="https://www.khaosod.co.th/wpapp/uploads/2024/06/Lanna-Polytechnic-ChiangMai.jpg"
                  className="card-img-top"
                  alt="Project 2"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-lg">
                <img
                  src="https://lh4.googleusercontent.com/proxy/IwxfxPixo9uKzANCNbblfWGfXGsXNLVOPkZEchkmNMl3Sh9X-sivk4TPQhn-jkhaPdFlJRxMcDTDEPtDoeBwNEAihWxhcc8Svi3jsBf4cLQ1gyv97r-t76vVXpNp4tTMhJ4rGODgb32xO8gzrxvQHVf6w0h3TagJBIqP9KmsCg3RvlzQloSQxKw"
                  className="card-img-top"
                  alt="Project 3"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      >
        <div className="container">
          <h2
            className="text-center mb-4"
            style={{
              color: "#ffcc00",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            เกี่ยวกับ
          </h2>
          <p className="text-center" style={{ color: "#333" }}>
            เว็บไซต์นี้ถูกสร้างเมื่อวันที่ 27 ธันวาคม พ.ศ. 2567 โดยนายชนะวงศ์ ชาเนตร IT4102 เลขที่ 24
            <br />
            เพื่อเป็นส่วนหนึ่งของวิชา Front-End Development
            <br />
            เว็บไซต์นี้ถูกออกแบบมาเพื่อแบ่งปันข้อมูลและแรงบันดาลใจให้กับผู้ที่สนใจด้านเทคโนโลยีสารสนเทศ
            <br />
            เราหวังว่าเว็บไซต์นี้จะเป็นแหล่งข้อมูลที่ช่วยให้คุณก้าวไปสู่ความสำเร็จในเส้นทางการพัฒนาซอฟต์แวร์!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
