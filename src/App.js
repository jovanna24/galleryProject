import React from 'react';
// import components 
import Header from './components/Header.js';
import AnimRoutes from './components/AnimRoutes.js'; //framer motion

//import route 
import { BrowserRouter as Router } from 'react-router-dom';

//import motion 
import { motion } from 'framer-motion';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* Cursor */}
      <div className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50'></div>
    </>
  ); 
};

export default App;
