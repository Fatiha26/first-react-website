import React from 'react'
import web from "../src/img/img1.svg"
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home = () => {
    return (
        <>

          <Common 
               name='Grow your business with' 
               imgsrc={web} 
               visit='/contact' 
               btname='Contact Now' 
            />
        </>
    )
};

export default Home;