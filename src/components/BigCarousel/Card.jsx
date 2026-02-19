import React from 'react';
import Button from '../Button';

const Card = (props) => {
  return (
    <div className="h-full w-full" key={props.title}>
      <div className="h-9/10">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={props.img}
          alt={props.title}
        />
        <div className="absolute flex justify-between text-white font-bold text-[60px] inset-x-0 bottom-0 bg-gradient-to-t from-[#131313]/100 to-transparent pb-10 px-6">
          <div>{props.title}</div>
          <div>
            <Button textButton="COMPRAR INGRESSOS" />
          </div>
        </div>
      </div>
      <div className="h-1/10"></div>
    </div>
  );
};

export default Card;
