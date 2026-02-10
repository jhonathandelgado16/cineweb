import React from 'react';

const CardMovie = () => {
  return (
    <div className="h-[380px] w-[230px] m-4 shadow-lg">
      <div className="h-[300px] bg-gray-700 rounded-t-lg">
        <img
          className="h-[300px] w-full rounded-t-lg"
          src="/images/poster.jpg"
          alt=""
        />
      </div>
      <div className="h-[90px] bg-gray-800 rounded-b-lg flex-row items-center justify-center p-2">
        <div className="text-white w-full text-lg">INTERSTELAR</div>
        <div className="w-full flex justify-between items-center">
          <div className="bg-black text-white p-1 w-[30px] h-[30px] text-center text-sm">
            18
          </div>
          <button className="bg-[#d00000] p-2 rounded-lg text-white text-sm">
            Ingressos
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
