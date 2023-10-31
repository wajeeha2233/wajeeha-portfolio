import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">

      <Container>
        <Row>
          <Col md={12} className="home-about-social">
          <h1 style={{fontSize: '2.6em'}}>
              Hello  <span className=""> Everyone</span>
            </h1>
          I am a Frontend developer i made up this portfolio with Reactjs <br/>
          I am a Coder I have also Intrest in video editing and Graphic Designing 
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
