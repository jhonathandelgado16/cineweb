import React from 'react';
import Button from './Button';
import ContentRating from './ContentRating';
import { Link } from 'react-router-dom';
import ImageWithLoader from './ImageWithLoader';

const CardMovie = ({ id = '0', movie = {} }) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="h-80 md:h-full w-full md:w-full mx-auto shadow-lg hover:outline-2 hover:outline-offset-2 hover:outline-gray-200 rounded-lg cursor-pointer">
        <div className="h-3/4 bg-[#202020] rounded-t-lg">
          {/* <img
            className="h-full w-full rounded-t-lg object-cover"
            src={movie.img}
            alt={movie.title}
          /> */}
          <ImageWithLoader
            src={movie.img}
            alt={movie.title}
            className="h-full w-full rounded-t-lg object-cover"
          />
        </div>
        <div className="h-1/4 bg-[#202020] rounded-b-lg flex flex-col justify-center p-2">
          <div className="text-white w-full text-sm md:text-lg truncate font-semibold">
            {movie.title}
          </div>
          <div className="w-full flex justify-between items-center mt-2">
            <ContentRating contentRating={movie.rating} />
            <Button textButton={'ingressos'} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
