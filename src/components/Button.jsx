import React from 'react';

const Button = (props) => {
  return (
    <button className="bg-[#d00000] hover:bg-[#d33333] p-2 rounded-lg text-white text-sm">
      {props.textButton}
    </button>
  );
};

export default Button;
