import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import eCom from '../../Assets/Projects/E-com.png'
import jsomBlog from '../../Assets/Projects/jsomBlog.png'
import taskify from '../../Assets/Projects/Taskify.png'
import aF from '../../Assets/Projects/artisteeF.png'
import aA from '../../Assets/Projects/artisteeA.png'
import easyCode from '../../Assets/Projects/easy-code.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong>Works </strong>
        </h1>
        <p style={{color: 'white'}}>
         Here Is My project's
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Taskify"
              description="Used for increase the productivity and tracks your progress towards the your project or goal. It has a workspace features that means multiple people collobrate in one project. It has a features like create boards , add container in board and add task in container. Board member also add comment in perticular task and assign flag over that. "
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="E-commerce Website"
              description="This is React Js Website and i made this in 3 hours with lots of error because this is my fist e-commerce website ever"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Jsom Store"
              description="It is a basic e-commerce site which build in MERN tech stack. It has a features like login, signup as a part of authentication. Apart from that user add product in cart, modify quantity and also remove poduct in cart. It is a basic e-comerce site which build in pure html, css, reactjs and redux. You can watch live app in below button."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Jsom Blog"
              description="It is a basic blog website which cover all the concept of REACTJS. Main Motivation of this project is understand basic features of the Reactjs like  api fetching, multiple filtering in profile , post and comments. It includes lots' of features which is necessary in any blog site. You can visit Live site by clicking below button."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Artistee Web"
              description="This is an scooter website made with Reactjs And Responsive this is also responsive website when i made up any project i need to do motive"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Food Website"
              description="This is an food website there was many food in this website and this is also responsive website when i made up any project i need to do motive"
              github="https://github.com/wajeeha2233/Food_Website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
