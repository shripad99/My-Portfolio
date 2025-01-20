import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import { Container, Row, Col } from 'reactstrap';
import Hero from "../hero-img.png"
import { init } from "ityped";

const HeroSection = () => {
    const textref = useRef()
    
  useEffect(()=>{
    init(textref.current,{
      backDelay:1200,
      showCursor:false,
      strings:[
        'Shripad Tirlotkar',
        'a Full Stack Developer',
      ]
    })
  },[])
  return <section className='hero-section' id='home'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero-content '>
              <p className='mb-3'>Welcome to MY World!</p>
              <h2 className='hero-title mb-3'>
                I'm <span ref={textref}></span>
              </h2>
              <p>
              I am Shripad Tirlotkar, a passionate full-stack developer with an M.Sc. in Information Technology from Usha Pravin Gandhi College of Management. My expertise spans web development, cloud computing, and Android development.
              I am always eager to learn and embrace new challenges, enhancing my skill set to deliver innovative solutions. I excel in teamwork, analytical thinking, leadership, and attention to detail, bringing dedication and excellence to every project I undertake.
              </p>
              <div className='mt-4 hero-btns d-flex align-items-center gap-4'>
                <button className='btn hire-btn'><a href='https://drive.google.com/file/d/1uubre3pUCga0oJ25vn-tTnfKFGKhEuEd/view?usp=sharing'>Hire Me</a></button>
                <button className='btn'><a href='#contact'>Contact</a></button>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero-img'>
              <img src={Hero} alt='' className='w-175' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
}

export default HeroSection;