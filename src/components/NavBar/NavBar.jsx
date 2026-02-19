import React from 'react';
import LinkBar from './LinkBar';

const NavBar = () => {
  return (
    <div className="flex-col lg:grid lg:grid-cols-6 items-center justify-center h-35 bg-[#131313] text-white px-8 py-4">
      <div className="flex lg:col-start-2 lg:col-span-4 justify-between h-15 mb-4">
        <img className="object-contain" src={'/assets/logo.png'} alt={'Home'} />
      </div>
      <div className="flex lg:col-start-2 lg:col-span-4 justify-between h-full">
        <LinkBar />
      </div>
    </div>
  );
};

export default NavBar;
