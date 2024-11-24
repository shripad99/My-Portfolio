import React from 'react';
import { Container } from 'reactstrap';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <footer className='pb-4'>
    <Container className='text-center footer'>
        <p>@Copyright {year}, Developed by Shripad Tirlotkar. All Rights Reserved</p>
    </Container>
  </footer>
}

export default Footer