import React from 'react';
import Carousel from './Carousel';
import CardMovie from './CardMovie';

const Section = (props) => {
  return (
    <div className="flex-row h-[80vh] md:h-1/4 lg:h-1/4 xl:h-1/4">
      <div className="flex justify-center pt-4 px-4">
        <div className="flex text-2xl text-white font-extrabold w-full max-w-6xl ">
          <div className="w-auto">{props.title}</div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center pb-8 px-8">
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
