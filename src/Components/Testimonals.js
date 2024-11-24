import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Testimonals.css';
import Slider from "react-slick";

const Testimonals = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
      };
    return <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5 text-center'>
                    <h2>What my Clients says</h2>
                </Col>
                <Col lg='6' className='m-auto'>
                    <Slider {...settings}>
                        <div>
                            <div className='single-testimonal'>
                                <p>"Shripad’s attention to detail and ability to tackle complex challenges made our app development process seamless. His innovative solutions and proactive communication set him apart."</p>
                                <h6>Viraj Waim</h6>
                                <p className='title'>Digital Marketer</p>
                            </div>
                        </div>
                        <div>
                            <div className='single-testimonal'>
                                <p>"Working with Shripad has been an absolute pleasure. His leadership and teamwork ensured the success of our cloud integration project. A talented professional who delivers on promises!"</p>
                                <h6>Siddhesh Parab</h6>
                                <p className='title'>Web Developer</p>
                            </div>
                        </div>
                        <div>
                            <div className='single-testimonal'>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, odit sequi iure perferendis expedita iste quisquam ullam omnis harum assumenda quos saepe! Quidem veniam aut animi non quo. Ducimus aliquam omnis non quos quo! Saepe nostrum provident repudiandae cupiditate corporis!</p>
                                <h6>Sonal Tirlotkar</h6>
                                <p className='title'>Full Stack Developer</p>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Testimonals