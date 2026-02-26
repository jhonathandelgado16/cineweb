import React from 'react';
import Button from '../Button';
import ButtonSection from './ButtonSection';

const MovieSection = () => {
  return (
    <div className="h-140 flex-row items-center justify-center px-4 mx-auto">
      <div className="w-full max-w-6xl mx-auto mb-2 md:mb-6 bg-[#131313]/80 p-4 rounded-lg h-full text-white">
        <div className="h-1/4">
          <div className="font-extrabold pb-2 text-xl">Sessões</div>
          <div className="flex overflow-x-auto scroll-smooth scrollbar-hide">
            <ButtonSection dayOfWeek="QUINTA" day="26/Fev" selected={true} />
            <ButtonSection dayOfWeek="SEXTA" day="27/Fev" />
            <ButtonSection dayOfWeek="SÁBADO" day="28/Fev" />
            <ButtonSection dayOfWeek="DOMINGO" day="29/Fev" />
          </div>
        </div>
        <div className="flex-col h-3/4 overflow-y-auto scroll-smooth p-2 custom-scrollbar">
          <div className="font-bold py-2">Quinta-feira, 26 de fevereiro</div>
          <div className="flex-col mb-2">
            <div className="flex gap-2 text-sm text-[#b8b8b8] py-2">
              <div className="">2D</div>
              <div className="">LEGENDADO</div>
              <div className="">SALA 5</div>
            </div>
            <div className="flex-row flex gap-2">
              <a
                href="https://cinexv.com.br"
                target="_blank"
                className="flex-col flex justify-center items-center h-1/4 w-1/3 md:w-1/8 bg-[#080808] rounded-lg hover:bg-[#6b6b6b] p-2"
              >
                <div className="text-lg font-bold">Quinta</div>
                <div className="">16:00</div>
              </a>
              <div className="flex-col flex justify-center items-center h-1/4 w-1/3 md:w-1/8 bg-[#080808] rounded-lg hover:bg-[#6b6b6b] p-2">
                <div className="text-lg font-bold">Quinta</div>
                <div className="">19:00</div>
              </div>
            </div>
          </div>
          <div className="flex-col mb-2">
            <div className="flex gap-2 text-sm text-[#b8b8b8] py-2">
              <div className="">2D</div>
              <div className="">DUBLADO</div>
              <div className="">SALA 2</div>
            </div>
            <div className="flex-col p-2 flex justify-center items-center h-1/4 w-1/3 md:w-1/8 bg-[#080808] rounded-lg hover:bg-[#6b6b6b]">
              <div className="text-lg font-bold">Quinta</div>
              <div className="">21:00</div>
            </div>
          </div>

          <div className="flex-col mb-2">
            <div className="flex gap-2 text-sm text-[#b8b8b8] py-2">
              <div className="">2D</div>
              <div className="">DUBLADO</div>
              <div className="">SALA 2</div>
            </div>
            <div className="flex-col p-2 flex justify-center items-center h-1/4 w-1/3 md:w-1/8 bg-[#080808] rounded-lg hover:bg-[#6b6b6b]">
              <div className="text-lg font-bold">Quinta</div>
              <div className="">21:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
