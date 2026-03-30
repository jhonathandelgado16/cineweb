import React from 'react';
import ContentRating from '../ContentRating';

const CardSoon = (props) => {
  return (
    <div className="flex-col md:flex-row flex w-full max-w-7xl mx-auto text-md mx-4 px-4 md:p-2 md:gap-10">
      <div className="relative w-full md:w-1/4 mb-2 md:mb-4">
        <div className="h-full">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={props.movie.img}
            alt={props.movie.title}
          />
        </div>
      </div>
      <div className="flex-col md:flex-row flex w-full md:w-3/4 text-md md:p-2 md:gap-10">
        <div className="flex-col w-full h-full">
          <div className="w-full text-white font-light text-justify p-4 md:p-2 md:block">
            <div className="text-[#fff] border-b-1 text-2xl border-white/20 pb-2 mb-2">
              {props.movie.title}
            </div>
          </div>
          <div className="w-full text-white font-light text-justify p-4 md:p-2 md:block">
            <div className="text-[#b8b8b8] border-b-1 border-white/20 pb-2 mb-2">
              {props.movie.description ||
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
            </div>
          </div>
          <div className="hidden md:block w-full text-white font-light text-justify p-4 md:p-2 rounded-lg flex-row ">
            <div className="flex justify-between border-b-1 border-white/20 pb-2 mb-2">
              <div className="font-extrabold pb-2 w-1/4">Gênero:</div>
              <div className="text-[#b8b8b8] w-3/4 text-end">
                {props.movie.genre || 'Não informado'}
              </div>
            </div>
            <div className="flex justify-between border-b-1 border-white/20 pb-2 mb-2">
              <div className="font-extrabold pb-2 w-1/4">Direção:</div>
              <div className="text-[#b8b8b8] w-3/4 text-end">
                {props.movie.director || 'Não informado'}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-extrabold pb-2 w-1/4">Elenco:</div>
              <div className="text-[#b8b8b8] w-3/4 text-end">
                {props.movie.cast ||
                  "Neve Campbell Courteney Cox Isabel Mayn Jasmin Savoy Brown Mason Gooding Anna Camp Joel McHale Mckenna Grace Michelle Randolph Jimmy Tatro Asa Germann Celeste O'Connor"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSoon;
