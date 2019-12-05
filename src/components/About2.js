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
            <Row className="m-2" style={{ border: 'solid 1px black' }}>
                <Col md={4} style={{ paddingRight: 0, paddingLeft: 0, borderRight: 'solid 1px black' }}>
                    <img 
                        src={person1}
                        width='100%'
                        height="100%"
                    />
                </Col>
                <Col md={8} className="d-flex flex-column justify-content-center align-items-center" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <h1 className="py-2">Title</h1>
                    <h3 className="py-2">Subtitle</h3>
                    <p className="my-auto p-2">lorem ipsim fjh fklafk dsmklfl mds,lmfkd 'sm fd
                        fdms,la fdsfkl mdsla fmlsamf ldsam fdfmdsa fmsd mjkk
                        fdskafmds
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
                <Col md={8} className="d-flex flex-column justify-content-center align-items-center" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <h1 className="py-2">Title</h1>
                    <h3 className="py-2">Subtitle</h3>
                    <p className="my-auto p-2">lorem ipsim fjh fklafk dsmklfl mds,lmfkd 'sm fd
                        fdms,la fdsfkl mdsla fmlsamf ldsam fdfmdsa fmsd mjkk
                        fdskafmds
                    </p>
                    <small className="mt-auto py-3 text-center bg-dark text-white w-100">this is small</small>
                </Col>
            </Row>
        </Container>
    </Fragment>
  );
}

export default About2;