import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';

// created my own horizontal card containers 

const About2 = () => {
  return (
    <Fragment>
        <Nav1 />
        <Container>
            <Row className="p-3 justify-content-center align-items-center">
                <Col md={6} className="text-center">
                    <h1 className="text-black">Main Title</h1>
                    <p className="text-black pt-3">
                        fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                        tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                        eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                        scelerisque purus semper eget duis
                    </p>
                </Col>
            </Row>   
            <Row className="m-2" style={{ border: 'solid 1px black' }}>
                <Col md={4} style={{ paddingRight: 0, paddingLeft: 0, borderRight: 'solid 1px black' }}>
                    <img 
                        src={person1}
                        width='100%'
                        height="100%"
                    />
                </Col>
                <Col md={8} className="d-flex flex-column align-items-start" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <h1 className="p-2">Title</h1>
                    <h3 className="p-2">Subtitle</h3>
                    <p className="my-auto p-2">
                        Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                        tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                        eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                        scelerisque purus semper eget duis
                    </p>
                    <small className="mt-auto py-3 text-center bg-dark text-white w-100">this is small</small>
                </Col>
            </Row>
            <Row className="m-2" style={{ border: 'solid 1px black' }}>
                <Col md={4} style={{ paddingRight: 0, paddingLeft: 0, borderRight: 'solid 1px black' }}>
                    <img 
                        src={person2}
                        width='100%'
                        height="100%"
                    />
                </Col>
                <Col md={8} className="d-flex flex-column align-items-start" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <h1 className="p-2">Title</h1>
                    <h3 className="p-2">Subtitle</h3>
                    <p className="my-auto p-2">
                        Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                        tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                        eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                        scelerisque purus semper eget duis
                    </p>
                    <small className="mt-auto py-3 text-center bg-dark text-white w-100">this is small</small>
                </Col>
            </Row>
        </Container>
    </Fragment>
  );
}

export default About2;