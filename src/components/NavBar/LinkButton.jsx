import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinkButton = ({
  textLink = 'HOME',
  path = '/',
  setMenuOpen,
  menuOpen,
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === `/${path}`.replace('//', '/');

  function handleClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Link
      onClick={handleClick}
      className={`text-center transition duration-500 font-extrabold border-b-4 px-2 pb-1
        ${
          isActive
            ? 'border-[#d00000]'
            : 'border-transparent hover:border-[#d00000]'
        }`}
      to={path}
    >
      {textLink}
    </Link>
  );
};

export default LinkButton;
