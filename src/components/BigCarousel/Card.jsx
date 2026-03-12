import React from 'react';
import Button from '../Button';

const Card = (props) => {
  return (
    <div className="h-full w-full" key={props.title}>
      <div className="relative h-9/10">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={props.img}
          alt={props.title}
        />
        <div className="absolute flex-row items-end text-white font-bold w-full bottom-0 bg-gradient-to-t from-[#131313]/100 to-transparent px-2 md:px-6 xl:px-6 lg:px-6 h-20 md:h-30">
          <div className="p-0 text-shadow-lg text-2xl md:text-[60px] lg:text-[60px] xl:text-[60px]">
            {props.title}
          </div>
          <div className="p-0 mb-2">
            <Button textButton="COMPRAR INGRESSOS" />
          </div>
        </div>
      </div>
      <div className="h-1/10"></div>
    </div>
  );
};

export default Card;
