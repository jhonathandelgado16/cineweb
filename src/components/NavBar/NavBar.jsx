import React from 'react';
import LinkBar from './LinkBar';

const NavBar = () => {
  return (
    <div className="flex-col w-full max-w-6xl items-center justify-center h-35 text-white py-4 mx-auto">
      <div className="flex justify-center md:justify-between lg:justify-between xl:justify-between h-15 mb-4 px-2">
        <img className="object-contain" src={'/assets/logo.png'} alt={'Home'} />
      </div>
      <div className="flex justify-between">
        <LinkBar />
      </div>
    </div>
  );
};

export default NavBar;
