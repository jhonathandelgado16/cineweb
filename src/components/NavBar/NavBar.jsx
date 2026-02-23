import LinkBar from './LinkBar';
import React, { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:flex-col w-full max-w-6xl items-center justify-center md:h-35 text-white py-2 md:py-4 mx-auto bg-[#131313] md:bg-transparent">
      <div className="absolute left-0 flex items-center justify-center h-15 pl-4">
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center md:justify-between h-15 md:mb-4 px-2">
        <img className="object-contain" src={'/assets/logo.png'} alt={'Home'} />
      </div>
      <div className="hidden md:flex justify-between">
        <LinkBar />
      </div>
      <div className="md:flex justify-between">
        {menuOpen && (
          <ul className="w-full bg-[#131313] flex flex-col items-center md:hidden z-10">
            <LinkBar />
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
