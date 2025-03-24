import React from 'react';
//import images 
import WomanImg from '../img/about/woman.png';
//import link 
import { Link } from 'react-router-dom'

const About = () => {
  return <section className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text & img wrapper */}
      <div className=' flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text=left lg:pt-16'>
        {/* image */}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={WomanImg} alt='' />
        </div>
        <div>
          {/* text */}
          <div>
            <h1 className='h1'>About me</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quidem, eligendi necessitatibus quos quisquam illum maiores ut ad perspiciatis, quis unde, nisi rerum vel beatae numquam cupiditate commodi magni id.</p>
            <br />
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nobis vel repellat. Amet qui odit enim delectus repudiandae tenetur assumenda provident at eligendi ullam! Quod consequatur veritatis velit eveniet consectetur.</p>
            <Link to={ '/portfolio' }> View my work</Link>
          </div>
        </div>
      </div>
    </div>
    About
  </section>;
};

export default About;
