import React, { useState } from 'react';

const ButtonSection = ({
  selected = false,
  dayOfWeek = 'SEGUNDA',
  day = '26/Fev',
  alterSelected,
  selectedButton = '',
}) => {
  const [selectedDay, setSelectedDay] = useState(selected ? dayOfWeek : '');

  const handleClick = () => {
    alterSelected(dayOfWeek);
    setSelectedDay(dayOfWeek);
  };

  return (
    <div className="flex-shrink-0 w-1/3 md:w-1/3 lg:w-1/5">
      <div
        onClick={handleClick}
        className={`h-full text-md hover:bg-[#030303] flex flex-col justify-center items-center align-center hover:cursor-pointer hover:border-white p-2 ${selectedDay == selectedButton ? 'bg-[#030303]' : 'bg-[#404040]'}`}
      >
        <div className="font-extrabold text-sm md:text-sm mb-2">
          {dayOfWeek.toUpperCase()}
        </div>
        <div className="text-md">{day}</div>
      </div>
    </div>
  );
};

export default ButtonSection;
