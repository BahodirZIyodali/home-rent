import React from 'react';
// footer page
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-black py-8 text-center text-white'>
      <div className='container mx-auto'>
        Copyright &copy; 2022. All rights reserved.

      </div>
      <br />
      <div className='grid place-items-center'>
        <div className=' flex flex-row'>
          <a href="">  <FaInstagram  size='25'/></a>

          &nbsp;
          &nbsp;
          <a href="">  <FaFacebook  size='25'/> </a>

          &nbsp;
          &nbsp;

          <a href="">  <FaLinkedin size='25'/></a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
