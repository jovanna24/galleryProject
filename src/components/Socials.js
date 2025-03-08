import React from 'react';

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube
} from 'react-icons/im'

//While commonly used, there are some security considerations with target="_blank". Older browsers could be vulnerable to "tabnabbing" attacks. Modern browsers mostly mitigate these issues, but it's often recommended to add rel="noopener noreferrer" to the <a> tag for extra security.

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href="http://www.facebook.com" target='_blank'>
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href="http://www.twitter.com" target='_blank'>
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href="http://www.pinterest.com" target='_blank'>
          <ImPinterest />
        </a>
      </li>
      <li>
        <a href="http://www.instagram.com" target='_blank'>
          <ImInstagram />
        </a>
      </li>
      <li>
        <a href="http://www.youtube.com" target='_blank'>
          <ImYoutube />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
