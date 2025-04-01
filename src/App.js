import React, {useContext} from 'react';
// import components 
import Header from './components/Header.js';
import AnimRoutes from './components/AnimRoutes.js'; //framer motion

//import route 
import { BrowserRouter as Router } from 'react-router-dom';
//import motion 
import { motion } from 'framer-motion';
// import cursor context
import { CursorContext } from './context/CursorContext.js';

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* Cursor */}
    
      <motion.div 
      variants={cursorVariants}
      animate={cursorBG}
      className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'
      ></motion.div>
    </>
  ); 
};

export default App;
