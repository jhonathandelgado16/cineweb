import React from 'react';
import ContentRating from '../ContentRating';

const HeaderMovie = (props) => {
  return (
    <div className="h-full flex-row items-center justify-center p-4 mx-auto">
      <div className="relative w-full max-w-6xl h-50 md:h-80 mx-auto mb-2 md:mb-6">
        <div className="h-full">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={props.img}
            alt={props.title}
          />
          <div className="absolute flex justify-between text-white font-bold inset-x-0 bottom-0 bg-gradient-to-t from-[#131313]/100 to-transparent pb-4 px-2 md:px-6 rounded-b-lg">
            <div className="p-0 text-shadow-lg text-2xl md:text-[60px]">
              {props.title}
            </div>
            <div className="flex items-end">
              <div className="text-white text-lg font-light flex items-end mr-4">
                1h 30m
              </div>
              <ContentRating contentRating="10" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col md:flex-row flex w-full max-w-6xl mx-auto gap-2 text-md">
        <div className="w-full md:w-2/3 text-white font-light text-justify bg-[#131313]/80 p-4 rounded-lg">
          <div className="font-extrabold pb-2">Resumo</div>
          <div>
            {props.description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
          </div>
        </div>
        <div className="w-full md:w-1/3 text-white font-light text-justify bg-[#131313]/80 p-4 rounded-lg flex-row">
          <div className="flex justify-between border-b-1 border-white/20 pb-2 mb-2">
            <div className="font-extrabold pb-2">Gênero:</div>
            <div>{props.genre || 'Não informado'}</div>
          </div>
          <div className="flex justify-between border-b-1 border-white/20 pb-2 mb-2">
            <div className="font-extrabold pb-2">Direção:</div>
            <div>{props.director || 'Não informado'}</div>
          </div>
          <div className="flex justify-between ">
            <div className="font-extrabold pb-2">Elenco:</div>
            <div>{props.cast || 'Não informado'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMovie;
