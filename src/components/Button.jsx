import React from 'react';

const Button = (props) => {
  return (
    <button className="bg-[#d00000] hover:bg-[#a00000] p-2 md:px-4 rounded-lg text-white text-xs md:text-sm">
      {props.textButton}
    </button>
  );
};

export default Button;
