import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Services.css';

const servicesData = [
    {
        icon:'ri-code-line',
        title:'Web Design',
        desc: 'Crafting visually appealing and user-friendly website designs tailored to client needs.',
    },
    {
        icon:'ri-code-s-slash-line',
        title:'Web Development',
        desc: 'Building dynamic and responsive websites using modern frameworks and technologies.',
    },
    {
        icon:'ri-braces-line',
        title:'Mobile App Development',
        desc: 'Developing feature-rich Android applications with a focus on performance and user experience.',
    },
    {
        icon:'ri-qr-code-line',
        title:'API Development and Integration',
        desc: 'Creating secure and scalable APIs and integrating third-party services to extend functionality.',
    },
    {
        icon:'ri-search-line',
        title:'Cloud Solutions',
        desc: 'Implementing and managing cloud-based solutions to enhance scalability and efficiency.',
    },
    {
        icon:'ri-landscape-line',
        title:'UI/UX',
        desc: 'Designing intuitive and engaging user interfaces with a seamless user experience.',
    },
]

const Services = () => {
    return <section id='services'>
        <Container>
            <Row>
                <Col lg='12' className='services-top mb-5'>
                    <h6>Features</h6>
                    <h2>What Services I provide</h2>
                </Col>
                {servicesData.map((item,index)=>(
                    <Col lg='4' md='6' sm='6' key={index} className='mb-4'>
                    <div className='single-service'>
                        <span className='service-icon'>
                            <i className={item.icon}></i>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </span>
                    </div>
                </Col>
                ))}
                
            </Row>
        </Container>

    </section>
}

export default Services