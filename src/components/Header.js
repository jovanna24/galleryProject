import React from 'react';
//importcomponents 
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

//import link, creates navigation links within React application without causing a full page reload
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>Header</header>;
};

export default Header;
