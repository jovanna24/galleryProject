import React from 'react';
//import images 
import Image1 from '../img/portfolio/1.png'
import Image2 from '../img/portfolio/2.png'
import Image3 from '../img/portfolio/3.png'
import Image4 from '../img/portfolio/4.png'
//import link
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        {/* text */}
        <div className='flex flex-col lg:items-start '>
          <h1 className='h1'>Portfolio</h1>
          <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quidem, eligendi <b> necessitatibus </b> quos quisquam illum maiores ut ad perspiciatis, quis unde, nisi rerum vel beatae numquam cupiditate commodi magni id
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, iure?
          </p>
          <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>

        </div>
        {/* image grid */}
        <div>
          {/* image */}
          <div>
            <img src={Image1} alt='' />
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Portfolio;
