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
          <h1 className="display-4" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}>
            เกี่ยวกับเรา
          </h1>
          <p className="lead" style={{ fontSize: "1.3rem", fontWeight: "400", maxWidth: "800px", margin: "auto" }}>
            วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ สาขาเทคโนโลยีสารสนเทศ - สร้างอนาคตด้วยนวัตกรรมที่ไม่มีสิ้นสุด
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section" style={{ padding: "60px 0", backgroundColor: "#f7f7f7" }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#2d3748", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}>
            ภารกิจของเรา
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/471482133_1095496179038494_5561592027701869317_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=O1ifUz943roQ7kNvgGmoJqs&_nc_oc=AdikBBOI9Vb1GDpxe48EEFOvzyFkKItKh3tQQhBDtImnVPd6Hfj5qy5cnC-xQnLIFBM&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=Awb1nxgJ1bui8qr5Gykb_k2&oh=00_AYBEH6rsQAJejDTnMW6pu1AN_SrDOnmAoatxU1HOD_X3bg&oe=677D28C0"
                alt="About Us"
                className="img-fluid rounded shadow-lg"
                style={{ objectFit: "cover", height: "400px", width: "100%" }}
              />
            </div>
            <div className="col-md-6">
              <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.6", fontFamily: "'Roboto', sans-serif" }}>
                สาขาเทคโนโลยีสารสนเทศมุ่งเน้นการพัฒนาและสร้างบัณฑิตที่มีความรู้ความสามารถ
                เพื่อรองรับการเปลี่ยนแปลงของโลกเทคโนโลยีที่ไม่มีวันหยุดนิ่ง
                เราพร้อมที่จะผลักดันนักศึกษาให้กลายเป็นผู้สร้างสรรค์แห่งยุคใหม่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section" style={{ backgroundColor: "#fffbf0", padding: "60px 0" }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#2d3748", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}>
            ประวัติความเป็นมา
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p style={{ fontSize: "1.1rem", color: "#333", lineHeight: "1.7", fontFamily: "'Roboto', sans-serif" }}>
                วิทยาลัยก่อตั้งขึ้นในปี พ.ศ. 2538 ด้วยความมุ่งมั่นที่จะสร้างสรรค์เทคโนโลยีที่ทันสมัย
                และช่วยยกระดับชุมชนผ่านการพัฒนานวัตกรรม โดยมุ่งเน้นที่คุณภาพการศึกษา
                และการผลิตบัณฑิตที่พร้อมตอบสนองความต้องการของตลาดแรงงาน
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://online.anyflip.com/kagil/accountlogo.jpg"
                alt="History"
                className="img-fluid rounded shadow-lg"
                style={{ objectFit: "cover", height: "400px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section" style={{ backgroundColor: "#333", color: "#fff", padding: "60px 0" }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: "#fff", fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}>
            วิสัยทัศน์ของเรา
          </h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/455245497_1016045353854890_8442259950307203794_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CQPEB4H8MfsQ7kNvgE8KrWQ&_nc_oc=AdioQ2UKD17phipndtUVCD-A_CsA9O-WXM92nLTl3i0cw57Bw_sYDtIjyKSGH3FIcbA&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=ANIQ1ppIE3ucHj2r7IgBLHD&oh=00_AYA_EXl0R0_fKkfgUW5LzJelbM1Rnl_HLJfEXtYmcRM_OA&oe=677D380E" alt="Vision 1" className="img-fluid rounded-circle mb-3" />
              <h5>วิสัยทัศน์ที่ 1</h5>
              <p>เรามุ่งมั่นที่จะเป็นผู้นำด้านเทคโนโลยีสารสนเทศ ที่สร้างสรรค์นวัตกรรมเพื่อพัฒนาสังคม</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/471664777_1095028025751976_3845432151327842635_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GE_5b2DhtjgQ7kNvgEYCTIH&_nc_oc=AdgwjKjVW8IhWYmn_HkRyQLRE4OQVMPs8SmY1ZhBu1xTvxVaHIDc08V5YdOAvUpCOCo&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=A-2VXlfUaSnL5uK07JUc9Y3&oh=00_AYBXKfy3u4G5dEX-Qmp-yHhiL3i6ZaEJPqYKFPhDnYIdEA&oe=677D205B" alt="Vision 2" className="img-fluid rounded-circle mb-3" />
              <h5>วิสัยทัศน์ที่ 2</h5>
              <p>เราจะส่งเสริมการเรียนรู้และพัฒนาทักษะการทำงานที่สามารถนำไปใช้ในชีวิตจริงได้</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/471236050_1119620743497350_7781311657508832092_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ljDcNgK1b90Q7kNvgF0j5ah&_nc_oc=AdiL0BUi5lRfcEDGTqbCDH_Si9FKnZJehOgPebwMDtYVETkIj9DiG4Ys35f2vNb1k98&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AQUshfhqUl7LYKH6ftfrB-G&oh=00_AYBgaHIUksvWt8U1IqI5yDW-G5DC5MQ_9GTw6O-QId_MrQ&oe=677D3C83" alt="Vision 3" className="img-fluid rounded-circle mb-3" />
              <h5>วิสัยทัศน์ที่ 3</h5>
              <p>เรามุ่งเน้นการสร้างบัณฑิตที่มีทักษะสูงและพร้อมที่จะรับมือกับการเปลี่ยนแปลงของโลกในยุคดิจิทัล</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section" style={{ backgroundColor: "#4caf50", color: "#fff", padding: "60px 0", textAlign: "center" }}>
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
