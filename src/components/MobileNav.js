import React, { useState } from 'react';
// import icons 

import { IoMdClose } from 'react-icons/io'; // This imports the IoMdClose icon from the react-icons/io library. This icon is typically used to represent a "close" button, likely for closing the mobile navigation menu.
import { CgMenuRight } from 'react-icons/cg'; //imports the CgMenuRight icon from the react-icons/cg library. This icon is often used as a "hamburger" menu icon, which is used to toggle the mobile navigation menu.

//import link 
import { Link } from 'react-router-dom'; //imports the Link component from the react-router-dom library; used for creating navigation links within a React Router application, allowing users to navigate between different pages without full page reloads

//import motion
import { motion, transform } from 'framer-motion'; //imports the motion component from the framer-motion library. Framer Motion is a library for creating animations in React. The motion component is used to animate elements, likely the mobile navigation menu itself

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
}

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return <nav className='text-primary xl:hidden'>
    {/* nav open button */}
    <div onClick={() => setOpenMenu(true)}
      className='text-3xl cursor-pointer'>
      <CgMenuRight />
    </div>
    {/* menu */}
    <motion.div
      variants={menuVariants}
      initial='hidden'
      animate={openMenu ? 'show' : ''}
      className='bg-white shadow-2x1 w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
      {/* icon */}
      <div onClick={()=> setOpenMenu(false)} className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
        <IoMdClose />
      </div>
      <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/contact'>Contact</Link></li>

      </ul>
    </motion.div>
  </nav>;
};

export default MobileNav;
