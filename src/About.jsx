import React from 'react'
import web from "../src/img/img1.svg"
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
          <section id="header" className="d-flex align-items-center">
           <div className="container-fluid nav_bg">
             <div className="row">
               <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>Welcome To <strong className='brand-name'>About</strong></h1>
                        <h2 className="my-3 h2">
                            We are the team of awesome peoples.
                        </h2>
                        <div className="mt-3">
                            <NavLink to="/about" className="btn-get-started">
                                Get Started
                            </NavLink>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} alt="banner" className='img-fluid animated' />
                    </div>
                    </div>
                </div>
            </div>
           </div>

          </section>
        </>
    )
};

export default About;