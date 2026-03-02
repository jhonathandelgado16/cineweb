import React, { useEffect, useState } from 'react';

const ButtonSection = ({
  selected = false,
  dayOfWeek = 'SEGUNDA',
  day = '26/Fev',
  alterSelected,
}) => {
  const [color, setColor] = useState('bg-[#131313] border-[#7a7a7a]');
  const [selectedDay, setSelectedDay] = useState(selected);

  useEffect(() => {
    if (selectedDay == dayOfWeek) {
      setColor('bg-[#080808] border-[#d00]');
    } else {
      setColor('bg-[#131313] border-[#7a7a7a]');
    }
  }, [selected, color]);

  const handleClick = () => {
    alterSelected(dayOfWeek);
    if (selectedDay == dayOfWeek) {
      setColor('bg-[#080808] border-[#d00]');
    } else {
      setColor('bg-[#131313] border-[#7a7a7a]');
    }
  };

  return (
    <div className="flex-shrink-0 p-1 w-1/3 md:w-1/3 lg:w-1/7">
      <div
        onClick={handleClick}
        className={`h-full hover:bg-[#080808] rounded-lg flex flex-col justify-center items-center align-center hover:cursor-pointer border-1 hover:border-white p-1 ${color}`}
      >
        <div className="font-extrabold text-sm md:text-lg">{dayOfWeek}</div>
        <div className="text-md">{day}</div>
      </div>
    </div>
  );
};

export default ButtonSection;
