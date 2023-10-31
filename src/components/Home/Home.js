import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import homeLogo from '../../Assets/about.png'
import Home2 from './Home2'


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
     
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{paddingBottom: 15}} className="heading">
               HELLO{' '}

              </h1>

              <h1 className="heading-name">
                I'M
                <strong className=""> Wajeeha baig</strong>
              </h1>

              <div >
              <h3 style={{paddingBottom: 15}} className="heading"> Fronted Developer</h3>
              </div>
            </Col>

            <Col md={5} style={{paddingBottom: 20}}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
            
          </Row>
  
        </Container>
      </Container>
      <Home2 />

    </section>
  )
}

export default Home
