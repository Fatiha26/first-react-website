import React from 'react'
import web from "../src/img/4.svg"
import Common from './Common';
const About = () => {
    return (
        <>
           <Common 
               name='Welcome to About page' 
               imgsrc={web} 
               visit='/service' 
               btname='Contact Now' 
           />
        </>
    )
};

export default About;