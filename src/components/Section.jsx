import React from 'react';
import Carousel from './Carousel';
import CardMovie from './CardMovie';

const Section = (props) => {
  return (
    <div className="flex-row h-140 w-full">
      <div className="h-1/10 flex justify-center pt-4 px-4">
        <div className="flex text-2xl text-white font-extrabold w-full max-w-6xl ">
          <div className="w-auto">{props.title}</div>
        </div>
      </div>
      <div className="h-9/10 flex items-center justify-center md:pb-8 pb-2 px-2 md:px-8">
        <div className="h-full w-full max-w-6xl">
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
  );
};

export default Section;
