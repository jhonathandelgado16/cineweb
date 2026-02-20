import React from 'react';

const LinkButton = ({ selected = false, textLink = 'HOME' }) => {
  if (!selected) {
    return (
      <a
        className="transition duration-500 font-extrabold border-b-4 border-[#131313] hover:border-[#d00000] px-2 pb-2 "
        href=""
      >
        {textLink}
      </a>
    );
  } else {
    return (
      <a
        className="transition duration-500 font-extrabold  border-b-4 border-[#d00000] hover:border-[#d00000] px-2 pb-2"
        href=""
      >
        {textLink}
      </a>
    );
  }
};

export default LinkButton;
