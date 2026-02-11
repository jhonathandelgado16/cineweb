import React from 'react';

const ContentRating = (props) => {
  const contentRatingColors = {
    10: 'bg-[#005096]',
    12: 'bg-[#ffd700]',
    14: 'bg-[#FF8C00]',
    16: 'bg-[#FF0000]',
    18: 'bg-[#000000]',
    L: 'bg-[#00FF00]',
  };

  return (
    <div
      className={`${contentRatingColors[props.contentRating]} text-white p-1 w-[30px] h-[30px] text-center text-sm font-bold rounded-sm flex items-center justify-center`}
    >
      {props.contentRating}
    </div>
  );
};

export default ContentRating;
