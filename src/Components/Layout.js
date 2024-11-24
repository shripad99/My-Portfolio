import React, { Fragment } from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import PortFolio from './PortFolio';
import Services from './Services';



const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSection/>
        <About/>
        <Services/>
        <PortFolio/>
        <Contact/>
        <Footer/>
    </Fragment>
  )
}

export default Layout