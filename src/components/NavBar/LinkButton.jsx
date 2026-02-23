import React from 'react';

const LinkButton = ({ selected = false, textLink = 'HOME', path = '/' }) => {
  if (!selected) {
    return (
      <a
        className="text-center transition duration-500 font-extrabold border-b-4 border-transparent hover:border-[#d00000] px-2 pb-2 "
        href={path}
      >
        {textLink}
      </a>
    );
  } else {
    return (
      <a
        className="transition duration-500 font-extrabold  border-b-4 border-[#d00000] hover:border-[#d00000] px-2 pb-2"
        href={path}
      >
        {textLink}
      </a>
    );
  }
};

export default LinkButton;
