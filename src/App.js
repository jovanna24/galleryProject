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
    </>
  ); 
};

export default App;
