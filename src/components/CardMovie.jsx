import React from 'react';
import Button from './Button';
import ContentRating from './ContentRating';
import { useNavigate } from 'react-router-dom';

const CardMovie = ({
  title = 'INTERSTELAR',
  imgSrc = '/images/poster.jpg',
  rating = '18',
  buttonText = 'Ingressos',
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/filme'); // Redirects to a new route
  };

  return (
    <div
      className="h-80 md:h-full w-full md:w-full mx-auto shadow-lg hover:outline-2 hover:outline-offset-2 hover:outline-gray-200 rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-3/4 bg-[#202020] rounded-t-lg">
        <img
          className="h-full w-full rounded-t-lg object-cover"
          src={imgSrc}
          alt={title}
        />
      </div>
      <div className="h-1/4 bg-[#202020] rounded-b-lg flex flex-col justify-center p-2">
        <div className="text-white w-full text-sm md:text-lg truncate font-semibold">
          {title}
        </div>
        <div className="w-full flex justify-between items-center mt-2">
          <ContentRating contentRating={rating} />
          <Button textButton={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
