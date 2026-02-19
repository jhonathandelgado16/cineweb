import React from 'react';

const Button = (props) => {
  return (
    <button className="bg-[#d00000] hover:bg-[#a00000] p-2 px-4 rounded-lg text-white text-sm">
      {props.textButton}
    </button>
  );
};

export default Button;
