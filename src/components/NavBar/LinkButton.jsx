import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({
  selected = false,
  textLink = 'HOME',
  path = '/',
  setMenuOpen,
  menuOpen,
}) => {
  function handleClick() {
    setMenuOpen(!menuOpen);
  }

  if (!selected) {
    return (
      <Link
        onClick={handleClick}
        className="text-center transition duration-500 font-extrabold border-b-4 border-transparent hover:border-[#d00000] px-2 pb-1 "
        to={path}
      >
        {textLink}
      </Link>
    );
  } else {
    return (
      <Link
        onClick={handleClick}
        className="transition duration-500 font-extrabold border-b-4 border-[#d00000] hover:border-[#d00000] px-2 pb-1"
        to={path}
      >
        {textLink}
      </Link>
    );
  }
};

export default LinkButton;
