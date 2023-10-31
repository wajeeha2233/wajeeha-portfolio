import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <h1 style={{paddingBottom: 15}} className="heading">
               About Me{' '}

              </h1>

        <p>
        Hello, I'm Wajeeha, a highly skilled professional with 3 years of experience in frontend development and video editing. I am passionate about creating exceptional websites that leave a lasting impression on users. With expertise in HTML, CSS, and JavaScript, I possess the necessary skills to transform your vision into a visually stunning and highly functional website. I am proficient in responsive design principles, ensuring that your website looks impeccable across all devices.
In addition to my frontend development skills, I am well-versed in several powerful frameworks and libraries. I have extensive experience working with Bootstrap, which allows me to rapidly develop responsive and mobile-first websites with ease. Tailwind CSS is another tool in my arsenal that empowers me to create custom and highly optimized designs. With Next.js, I can build robust and scalable web applications, leveraging its server-side rendering capabilities for enhanced performance.
        </p>
        </Row>
        

       
      </Container>
    </Container>
  );
}

export default About;
