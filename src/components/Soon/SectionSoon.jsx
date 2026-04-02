import React from 'react';
import Carousel from '../Carousel';
import CardMovieSoon from './CardMovieSoon';

const SectionSoon = (props) => {
  return (
    <div className="h-full flex-row items-center justify-center px-6 pt-2 p-4 md:p-0 mx-auto">
      <div className="w-full max-w-7xl h-full mx-auto mb-2 md:mb-4 rounded-lg">
        <div className="h-1/10 flex justify-center pt-4">
          <div className="flex text-xl text-white font-extrabold w-full max-w-7xl justify-center md:justify-center items-center ">
            <div className="grow h-[0.5px] bg-[#d00000] ml-2"></div>
            <div className="mx-4 mb-1">{props.title}</div>
            <div className="grow h-[0.5px] bg-[#d00000] mr-2"></div>
          </div>
        </div>
        <div className="h-9/10 flex items-center justify-center ">
          <div className="h-full w-full max-w-7xl">
            <Carousel>
              {props.movies.map((m, i) => (
                <CardMovieSoon
                  movie={m}
                  key={i}
                  title={m.title}
                  imgSrc={m.img}
                  rating={m.rating}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSoon;
