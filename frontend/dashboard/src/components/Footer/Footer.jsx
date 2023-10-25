import React from 'react';
import './Footer.css';
import LeftFooter from './LeftFooter';
import RightFooter from './RightFooter';

const Footer = () => {
  return (
    <div className='footer'>
   <LeftFooter/>
   <RightFooter/>
    </div>
  )
}

export default Footer; 