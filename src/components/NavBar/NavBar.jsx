import LinkBar from './LinkBar';
import React, { useState } from 'react';
import LinkButton from './LinkButton';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const BASE = './';

  return (
    <div className="md:flex-col w-full max-w-7xl items-center justify-center md:h-35 text-white py-2 md:py-4 mx-auto bg-[#131313] md:bg-transparent mb-12 sm:mb-0">
      <div className="hidden md:flex justify-center md:justify-between h-15 md:mb-4 px-2">
        <img
          className="object-contain"
          src={`${BASE}assets/logo.png`}
          alt={'Home'}
        />
      </div>
      <div className="hidden md:flex justify-between">
        <LinkBar />
      </div>
      <div>
        <div className="fixed sm:hidden top-0 grid grid-cols-5 items-center h-15 bg-[#131313] w-full z-30">
          <button
            className="md:hidden text-white focus:outline-none pl-4"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
          <div className="flex-row col-start-3 justify-center">
            <div className="flex md:hidden justify-center md:justify-between h-10 md:mb-4 px-2">
              <img
                className="object-contain"
                src={`${BASE}assets/logo.png`}
                alt={'Home'}
              />
            </div>
          </div>
        </div>
        <ul
          className={`${menuOpen ? 'w-full' : 'w-0'} transition-width duration-800 fixed h-dvh bg-[#131313]/95 flex flex-col items-center md:hidden mt-12 z-20`}
        >
          <div
            className={`${menuOpen ? 'w-full flex' : 'w-0 hidden'} transition-all duration-800 justify-start gap-6 flex flex-col p-4 md:p-0`}
          >
            <LinkButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              textLink={'HOME'}
            />
            <LinkButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              textLink={'EM BREVE'}
              path="em-breve"
            />
            <LinkButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              textLink={'BOMBONIERE'}
              path="menu"
            />
            <LinkButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              textLink={'CINEMAS'}
            />
            <LinkButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              textLink={'CONTATO'}
            />
            <LinkButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              textLink={'SOBRE'}
            />
            <LinkButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              textLink={'LOCALIZAÇÃO'}
            />
            <LinkButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              textLink={'PARCERIAS'}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
