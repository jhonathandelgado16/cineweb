import React, { useState } from 'react';
import Button from '../Button';
import ButtonSection from './ButtonSection';

const MovieSection = (props) => {
  const sessoes = [
    {
      sala: 'SALA 5',
      sessao: '16:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'QUINTA',
      data: '26/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 5',
      sessao: '19:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'QUINTA',
      data: '26/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 2',
      sessao: '16:00',
      categoriasVideo: { video: ['3D'], audio: ['DUBLADO'] },
      diaSemana: 'QUINTA',
      data: '26/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 5',
      sessao: '19:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'SEXTA',
      data: '27/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 5',
      sessao: '16:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'SEXTA',
      data: '27/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 2',
      sessao: '16:00',
      categoriasVideo: { video: ['2D'], audio: ['DUBLADO'] },
      diaSemana: 'SÁBADO',
      data: '28/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 3',
      sessao: '19:00',
      categoriasVideo: { video: ['3D'], audio: ['DUBLADO'] },
      diaSemana: 'SÁBADO',
      data: '28/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
  ];

  const [selectedDay, setSelectedDay] = useState('QUINTA');

  var sessoesAgrupadas = Object.groupBy(sessoes, (item) => item.diaSemana);

  return (
    <div
      ref={props.ref}
      className="md:h-140 flex-row items-center justify-center px-4 mx-auto"
    >
      <div className="w-full max-w-7xl mx-auto mb-2 md:mb-6 bg-[#0d0d0d]/90 p-4 rounded-lg h-full text-white">
        <div className="h-1/5">
          <div className="font-extrabold pb-2 text-md">Sessões</div>
          <div className="flex overflow-x-auto scroll-smooth scrollbar-hide">
            {Object.keys(sessoesAgrupadas).map((diaSemana) => {
              const sessoesDoDia = sessoesAgrupadas[diaSemana];
              return (
                <ButtonSection
                  key={diaSemana}
                  dayOfWeek={diaSemana}
                  day={sessoesDoDia[0].data}
                  selected={selectedDay == diaSemana}
                  alterSelected={setSelectedDay}
                  selectedButton={selectedDay}
                />
              );
            })}
          </div>
        </div>
        <div className="flex-col h-4/5 overflow-y-auto scroll-smooth p-2 custom-scrollbar">
          <div className="font-bold py-1 text-sm">
            {'Sessões de '}
            {sessoesAgrupadas[selectedDay][0].diaSemana}
            {', '}
            {sessoesAgrupadas[selectedDay][0].data}
          </div>

          {Object.keys(
            Object.groupBy(
              sessoesAgrupadas[selectedDay],
              (sessao) => sessao.sala,
            ),
          ).map((sala, i) => {
            const salas = Object.groupBy(
              sessoesAgrupadas[selectedDay],
              (sessao) => sessao.sala,
            )[sala];
            return (
              <div key={i} className="flex-col mb-2">
                <div className="flex gap-2 text-xs text-[#b8b8b8] py-1">
                  {salas[0].categoriasVideo.video.map((video, i) => {
                    return (
                      <div key={i} className="">
                        {video}
                      </div>
                    );
                  })}

                  {salas[0].categoriasVideo.audio.map((audio, i) => {
                    return (
                      <div key={i} className="">
                        {audio}
                      </div>
                    );
                  })}

                  <div className="">{salas[0].sala}</div>
                </div>
                <div className="flex-row flex gap-2">
                  {salas.map((session, i) => {
                    return (
                      <a
                        key={i}
                        href={session.link}
                        target="_blank"
                        className="flex-col flex justify-center items-center h-1/4 w-1/3 md:w-1/8 bg-[#d00000]/70 rounded-lg hover:bg-[#d00000] p-1 hover:cursor-pointer transition-colors duration-300 "
                      >
                        <div className="text-md font-bold">
                          {session.diaSemana.toLocaleLowerCase()}
                        </div>
                        <div className="">{session.sessao}</div>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieSection;
