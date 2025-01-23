import React , {useState} from 'react';
import './About.css';
import { Container,Row,Col } from 'reactstrap';
import Education from './Education';
import Skills from './Skills';
import Hero from "../hero-img.png";

const About = () => {
    const [aboutFilter,setAboutFilter] = useState('ABOUT');

  return <section id='about'>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <h2>About Me</h2>
            </Col>
            <Col lg='4' md='3'>
                <div className='about-btns d-flex flex-column align-items-center'>
                    <button className={`about-btn ${aboutFilter === 'ABOUT' ? 'about-btn-active' : ''}`} onClick={() => setAboutFilter('ABOUT')}>About Me</button>
                    <button className={`about-btn ${aboutFilter === 'EDUCATION' ? 'about-btn-active' : ''}`} onClick={() => setAboutFilter('EDUCATION')}>Education</button>
                    <button className={`about-btn ${aboutFilter === 'SKILLS' ? 'about-btn-active' : ''}`} onClick={() => setAboutFilter('SKILLS')}>Skills</button>
                </div>
            </Col>
            <Col lg='8' md='9'>
                {
                    aboutFilter === 'ABOUT' && <div className='about-content-wrapper d-flex gap-3 gap-md-5'>
                    <div className='about-img w-25'>
                        <img src={Hero} alt=''/>
                    </div>
                    <div className="about-content w-75">
                        <h2>I'm Shripad Tirlotkar</h2>
                        <p>A passionate full-stack developer with an M.Sc. in Information Technology from Usha Pravin Gandhi College of Management. My expertise spans web development, cloud computing, and Android development.</p>
                        <div className="social-links">
                            <h6 className='mb-3'>Connect With Me</h6>
                            <span><a href="https://github.com/shripad99"><i className="ri-github-fill"></i></a></span>
                            <span><a href="mailto:shripadtirlotkar15@gmail.com"><i className="ri-mail-fill"></i></a></span>
                            <span><a href="https://www.linkedin.com/in/shripad-tirlotkar-288207238"><i className="ri-linkedin-box-fill"></i></a></span>
                        </div>
                    </div>
                </div>
                }
                {
                    aboutFilter === 'EDUCATION' && <Education/>
                }
                {
                    aboutFilter === 'SKILLS' && <Skills/>
                }
            </Col>
        </Row>
    </Container>
  </section>
}

export default About