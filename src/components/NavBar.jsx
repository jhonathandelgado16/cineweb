import React, { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 px-4 py-2 flex items-center justify-between ">
      {/* Logo */}
      <div className="text-white text-xl font-bold">Logo</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="text-white hover:text-gray-200">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-200">
            Sobre
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-200">
            Contato
          </a>
        </li>
      </ul>

      {/* Hamburger Icon */}
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

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-14 left-0 w-full bg-blue-600 flex flex-col items-center md:hidden z-10">
          <li>
            <a
              href="#"
              className="text-white py-2 w-full text-center hover:bg-blue-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white py-2 w-full text-center hover:bg-blue-700"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white py-2 w-full text-center hover:bg-blue-700"
            >
              Contato
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
