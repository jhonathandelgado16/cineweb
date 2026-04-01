import React from 'react';

const Menu = () => {
  const BASE = './';
  return (
    <>
      <div className="flex-row items-center justify-center pt-4 px-4 md:p-4 mx-auto max-w-7xl">
        <div className="w-full h-50 md:h-120 mx-auto mb-2 md:mb-8">
          <div className="h-full">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${BASE}images/menu/header.png`}
            />
          </div>
        </div>
        <div className="flex md:flex-row justify-center text-white font-bold inset-x-0 bottom-0 bg-gradient-to-t from-[#0d0d0d]/100 to-transparent pb-4 px-2 md:px-6 rounded-b-lg">
          <div className="text-shadow-lg text-xl md:text-[40px]">
            BOMBONIERE CINE XV
          </div>
        </div>
        <div className="font-light text-xl md:text-xl text-white text-justify mb-6"></div>
        <div className="font-extrabold text-2xl md:text-3xl text-white mb-4">
          COMBOS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full h-full mb-2 md:mb-4 font-extrabold md:gap-2 ">
          <div className="h-50 md:h-93 rounded-lg hover:outline-2 hover:outline-offset-2 hover:outline-gray-200 cursor-pointer">
            <div
              className=" h-full
             bg-[#e8dac5] rounded-lg"
            >
              <img
                className="h-full w-full rounded-lg object-cover"
                src={`${BASE}images/menu/combo1.png`}
                alt=""
              />
            </div>
          </div>
          <div className="h-50 md:h-93 rounded-lg hover:outline-2 hover:outline-offset-2 hover:outline-gray-200 cursor-pointer">
            <div
              className=" h-full
             bg-[#e8dac5] rounded-lg"
            >
              <img
                className="h-full w-full rounded-lg object-cover"
                src={`${BASE}images/menu/combo3.png`}
                alt=""
              />
            </div>
          </div>
          <div className="h-50 md:h-93 rounded-lg hover:outline-2 hover:outline-offset-2 hover:outline-gray-200 cursor-pointer">
            <div
              className=" h-full
             bg-[#e8dac5] rounded-lg"
            >
              <img
                className="h-full w-full rounded-lg object-cover"
                src={`${BASE}images/menu/combo2.png`}
                alt="{movie.title}"
              />
            </div>
          </div>
          <div className="h-50 md:h-93 rounded-lg hover:outline-2 hover:outline-offset-2 hover:outline-gray-200 cursor-pointer">
            <div
              className=" h-full
             bg-[#e8dac5] rounded-lg"
            >
              <img
                className="h-full w-full rounded-lg object-cover"
                src={`${BASE}images/menu/combo4.png`}
                alt="{movie.title}"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
