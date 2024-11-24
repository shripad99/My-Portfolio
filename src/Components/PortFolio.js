import React from 'react';
import './PortFolio.css';
import { Container, Row, Col } from 'reactstrap';


const PortFolioData = [
    {
        imgurl: "https://store-wp.mui.com/wp-content/uploads/2021/07/Webbee.png",
        title: 'React Landing Page',
        url: 'https://travel-react-gray.vercel.app/',
    },
    {
        imgurl: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc75b1598-8cb7-42eb-b3d3-c6c1fb6b290e%2Fchakra-landing.jpg?table=block&id=01b77fa5-0c13-40a5-9bbb-abcf9cb4f74d&cache=v2",
        title: 'React Landing Page',
        url: 'https://movie-app-beta-amber.vercel.app/',
    },
    {
        imgurl: "https://themesdesign.in/modzy/assets/images/demo/index_1.png",
        title: 'React Landing Page',
        url: 'https://quote-app-dun-alpha.vercel.app/',
    },
];
const PortFolio = () => {
    return <section id='portfolio'>
        <Container>
            <Row>
                <Col lg='12' className='portfolio-top mb-5'>
                    <h6>Explore my work and give a feedback</h6>
                    <h2>PortFolio</h2>
                </Col>
                {PortFolioData.map((item, index) => (
                    <Col lg='4' md='6' sm='6' key={index}>
                        <div className='portfolio-card'>
                            <div className='portfolio-img'>
                                <img src={item.imgurl} alt='' className='w-100' />
                            </div>
                            <div className='portfolio-content'>
                                <h5>{item.title}</h5>
                                <a href={item.url}>View Live Demo</a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
}

export default PortFolio