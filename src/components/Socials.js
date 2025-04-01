import React, { useContext } from 'react';

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube
} from 'react-icons/im'

// import cursor context
import { CursorContext } from '../context/CursorContext';

//While commonly used, there are some security considerations with target="_blank". Older browsers could be vulnerable to "tabnabbing" attacks. Modern browsers mostly mitigate these issues, but it's often recommended to add rel="noopener noreferrer" to the <a> tag for extra security.

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return <div 
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href="http://www.facebook.com" target='_blank'rel="noreferrer">
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href="http://www.twitter.com" target='_blank'rel="noreferrer">
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href="http://www.pinterest.com" target='_blank'rel="noreferrer">
          <ImPinterest />
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com" target='_blank'rel="noreferrer">
          <ImInstagram />
        </a>
      </li>
      <li>
        <a href="http://www.youtube.com" target='_blank'rel="noreferrer">
          <ImYoutube />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
