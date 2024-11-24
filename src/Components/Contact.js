import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Contact.css';
import InfoForm from './InfoForm';

const Contact = () => {
  return <section id='contact'>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <h2>Get in Touch</h2>
            </Col>
            <Col lg='6' md='6'>
                <div className='contact-info-container d-flex align-items-center gap-5'>
                    <div className='single-info-box w-50'>
                        <h6>Address</h6>
                        <p>India, Asian Country</p>
                    </div>
                    <div className='single-info-box w-50'>
                        <h6>Phone</h6>
                        <p><a href='tel:+918422034099'>+918422034099</a></p>
                    </div>
                </div>
                <div className='contact-info-container d-flex align-items-center gap-5'>
                    <div className='single-info-box w-50'>
                        <h6>Email</h6>
                        <p><a href="mailto:shripadtirlotkar15@gmail.com">shripadtirlotkar15@gmail.com</a></p>
                    </div>
                    <div className='single-info-box w-50'>
                        <h6>Location</h6>
                        <p>Mumbai-400055,Maharashtra</p>
                    </div>
                </div>
            </Col>
            <Col lg='6' md='6'>
                <InfoForm/>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Contact