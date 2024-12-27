import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">เกี่ยวกับเรา</h1>
          <p className="lead">
            วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่  
            สาขาเทคโนโลยีสารสนเทศ - สร้างอนาคตด้วยนวัตกรรมที่ไม่มีสิ้นสุด
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">ภารกิจของเรา</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/459572266_1038987961560629_5992916616841721678_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cP6DHXtBykkQ7kNvgFlqjXE&_nc_oc=Adh6wMJN4A9x8J4i9b-7iW8s-AB5fO_fLzyrbHeUjVkYXR2sOsnGmrulpRBb9W9dLGU&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=AV2_zoUp7s1AiZbfYdTP501&oh=00_AYDxtfZITMe9WyFCtPNQOwWsgHUd0COzO5NJxTwcATx8lA&oe=6773FE22"
                alt="About Us"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="text-justify">
                สาขาเทคโนโลยีสารสนเทศมุ่งเน้นการพัฒนาและสร้างบัณฑิตที่มีความรู้ความสามารถ 
                เพื่อรองรับการเปลี่ยนแปลงของโลกเทคโนโลยีที่ไม่มีวันหยุดนิ่ง
                เราพร้อมที่จะผลักดันนักศึกษาให้กลายเป็นผู้สร้างสรรค์แห่งยุคใหม่
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-warning py-5">
        <div className="container text-center">
          <h2 className="mb-4">ประวัติความเป็นมา</h2>
          <p>
            วิทยาลัยก่อตั้งขึ้นในปี พ.ศ. 2538 ด้วยความมุ่งมั่นที่จะสร้างสรรค์เทคโนโลยีที่ทันสมัย  
            และช่วยยกระดับชุมชนผ่านการพัฒนานวัตกรรม โดยมุ่งเน้นที่คุณภาพการศึกษา  
            และการผลิตบัณฑิตที่พร้อมตอบสนองความต้องการของตลาดแรงงาน
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-4">วิสัยทัศน์ของเรา</h2>
          <p>
            "เป็นผู้นำด้านเทคโนโลยีและนวัตกรรม เพื่อสร้างอนาคตที่ยั่งยืนสำหรับทุกคน"
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-success text-white">
        <div className="container text-center">
          <h2 className="mb-4">พร้อมที่จะก้าวไปกับเรา?</h2>
          <p>
            สมัครเรียนวันนี้ หรือเข้าร่วมกิจกรรมของเราเพื่อสัมผัสประสบการณ์การเรียนรู้ที่แตกต่าง!
          </p>
          <a href="/apply" className="btn btn-light btn-lg mt-3">
            สมัครเรียน
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
