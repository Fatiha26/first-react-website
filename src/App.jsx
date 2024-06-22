import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
const App = () => {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/about' Component={About}></Route>
            <Route path='/service' Component={Services}></Route>
            <Route path='/contact' Component={Contact}></Route>
            <Route path="*" element={<Navigate to="/" />} /></Routes>
        </>
    )
};

export default App;