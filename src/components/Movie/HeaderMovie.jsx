import React from 'react';
import ContentRating from '../ContentRating';

const HeaderMovie = (props) => {
  return (
    <div className="h-full flex-row items-center justify-center pt-4 px-4 md:p-4 mx-auto">
      <div className="relative w-full max-w-7xl h-50 md:h-120 mx-auto mb-2 md:mb-4">
        <div className="h-full">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={props.movie.big_img}
            alt={props.movie.title}
          />
          <div className="absolute flex justify-between text-white font-bold inset-x-0 bottom-0 bg-gradient-to-t from-[#0d0d0d]/100 to-transparent pb-4 px-2 md:px-6 rounded-b-lg">
            <div className="p-0 text-shadow-lg text-2xl md:text-[60px]">
              {props.movie.title}
            </div>
            <div className="flex items-end">
              <div className="text-white text-lg font-light flex items-end mr-4">
                1h 30m
              </div>
              <ContentRating contentRating={props.movie.rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMovie;
