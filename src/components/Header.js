import React from 'react';

import { BiPhone } from 'react-icons/bi';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='logo' width='70px' />
        </Link>
        <div className='flex items-center gap-6'>

          <a
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            href='tel:+919695680505'
          >
           
         <div className='flex flex-row'>
         <BiPhone size='23' className='basis-1/4'/> &nbsp; <span>919695680505</span>
         </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
