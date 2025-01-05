import React from 'react';
//import pages 
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';
import Portfolio from '../pages/Portfolio.js';

//import routes route & useLocation hook 
import {Routes, Route, useLocation} from 'react-router-dom';

const AnimRoutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/portfolio' element={<Portfolio/>} />
  </Routes>
};

export default AnimRoutes;
