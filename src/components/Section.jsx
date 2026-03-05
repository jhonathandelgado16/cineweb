import React from 'react';
import Carousel from './Carousel';
import CardMovie from './CardMovie';

const Section = (props) => {
  return (
    <div className="h-full flex-row items-center justify-center pt-2 p-4 md:p-0 mx-auto">
      <div className="w-full max-w-7xl h-full mx-auto mb-2 md:mb-4 rounded-lg">
        <div className="h-1/10 flex justify-center pt-4">
          <div className="flex text-xl text-white font-extrabold w-full max-w-7xl justify-center md:justify-start items-center">
            <div className="border-b-4 border-[#d00000]/70 ml-2 mb-1">
              {props.title}
            </div>
          </div>
        </div>
        <div className="h-9/10 flex items-center justify-center md:pb-2 pb-2 ">
          <div className="h-full w-full max-w-7xl">
            <Carousel>
              {props.movies.map((m, i) => (
                <CardMovie
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

export default Section;
