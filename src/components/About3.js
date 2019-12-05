import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import blue from '../assets/blue.jpg';
import CEO from '../assets/person1.jpg';
import CTO from '../assets/person2.jpg';
import COO from '../assets/person3.jpg'

// container holds 2 rows, background is dark and we set the height manually
// 1st Row half the height as percent, center items in middle of screen and add background image
// 2nd Row has 3 Cols with images and text, background dark, responsive because all background dark regardless of view dimensions

const About3 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container fluid className="bg-dark" style={{ height: 900 }}> 
        <Row className="h-50 justify-content-center align-items-center" style={{ backgroundImage: `url(${blue})`}}>
          <Col md={4} className="text-center">
            <h1 className="text-white">Main Title</h1>
            <p className="text-white pt-3">
                fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                scelerisque purus semper eget duis
            </p>
          </Col>
        </Row>   
        <Row className="bg-dark text-white align-items-center">
            <Col md={4} className="text-center">
                <img 
                    src={CEO}
                    className="img-fluid rounded-circle m-4"
                    alt="description"
                />
                <hr/>
                <h4>Jane Doe</h4>
                <small>CEO</small>
                <p className="w-50 mx-auto">Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                tristique nulla aliquet enim tortor at auctor urna.</p>
            </Col>
            <Col md={4} className="text-center">
                <img 
                    src={CTO} 
                    className="img-fluid rounded-circle m-4"
                    alt="description"
                />
                <hr/>
                <h4>Sarah Jone</h4>
                <small>CTO</small>
                <p className="w-50 mx-auto">Frmentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                tristique nulla aliquet enim tortor at auctor urna.</p>                 
            </Col>
            <Col md={4} className="text-center">
                <img 
                    src={COO}
                    className="img-fluid rounded-circle m-4"
                    alt="description"
                />
                <hr/>
                <h4>John James</h4>
                <small>COO</small>
                <p className="w-50 mx-auto">Frmentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                    tristique nulla aliquet enim tortor at auctor urna.</p>                             
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default About3;