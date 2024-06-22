import React from 'react'
import web from "../src/img/img1.svg"
import { NavLink } from 'react-router-dom';
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