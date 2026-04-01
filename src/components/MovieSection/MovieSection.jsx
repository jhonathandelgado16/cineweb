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
      data: '12/Mar',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 5',
      sessao: '19:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'QUINTA',
      data: '13/Mar',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 2',
      sessao: '16:00',
      categoriasVideo: { video: ['3D'], audio: ['DUBLADO'] },
      diaSemana: 'QUINTA',
      data: '14/Mar',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 5',
      sessao: '19:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'SEXTA',
      data: '15/Mar',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 5',
      sessao: '16:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'SEXTA',
      data: '16/Mar',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 2',
      sessao: '16:00',
      categoriasVideo: { video: ['2D'], audio: ['DUBLADO'] },
      diaSemana: 'SÁBADO',
      data: '17/Mar',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 3',
      sessao: '19:00',
      categoriasVideo: { video: ['3D'], audio: ['DUBLADO'] },
      diaSemana: 'SÁBADO',
      data: '18/Mar',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 3',
      sessao: '19:00',
      categoriasVideo: { video: ['3D'], audio: ['DUBLADO'] },
      diaSemana: 'DOMINGO',
      data: '28/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 5',
      sessao: '16:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'SEGUNDA',
      data: '26/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 5',
      sessao: '16:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'TERÇA',
      data: '26/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
    {
      sala: 'SALA 5',
      sessao: '16:00',
      categoriasVideo: { video: ['2D'], audio: ['LEGENDADO'] },
      diaSemana: 'QUARTA',
      data: '26/Fev',
      filme: 'Nome do Filme',
      link: 'https://veloxtickets.com',
    },
  ];

  const [selectedDay, setSelectedDay] = useState('QUINTA');

  var sessoesAgrupadas = Object.groupBy(sessoes, (item) => item.diaSemana);

  return (
    <div
      ref={props.ref}
      className="md:h-140 flex-row items-center justify-center mx-auto"
    >
      <div className="w-full max-w-7xl mx-auto mb-2 md:mb-6 p-4 md:p-2 rounded-3xl h-full text-white">
        <div className="h-1/5 md:mb-6">
          <div className="font-extrabold text-3xl pb-2 md:pb-4">Horários</div>
          <div className="flex overflow-x-auto scroll-smooth custom-scrollbar rounded-lg mb-2 pb-2 md:pb-1 gap-0.5">
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
        <div className="flex-col h-4/5 overflow-y-auto scroll-smooth p-2 custom-scrollbar mt-4">
          <div className="font-extrabold text-xl">CINEXV GUARAPUAVA</div>
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
              <div key={i} className="flex-col mb-4">
                <div className="flex gap-2 text-md text-[#b8b8b8] py-1 mb-2">
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
                        className="flex-col flex justify-center items-center w-1/3 md:w-1/5 bg-[#d00000]/70 rounded-lg hover:bg-[#d00000] p-1 hover:cursor-pointer transition-colors duration-300 py-2"
                      >
                        <div className="text-md font-extrabold">
                          {session.diaSemana.toLocaleLowerCase()}
                        </div>
                        <div className="text-lg font-extrabold">
                          {session.sessao}
                          {'h'}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="font-extrabold text-xl mt-4">CINEXV APUCARANA</div>
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
              <div key={i} className="flex-col mb-4">
                <div className="flex gap-2 text-md text-[#b8b8b8] py-1 mb-2">
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
                        className="flex-col flex justify-center items-center w-1/3 md:w-1/5 bg-[#d00000]/70 rounded-lg hover:bg-[#d00000] p-1 hover:cursor-pointer transition-colors duration-300 py-2"
                      >
                        <div className="text-md font-extrabold">
                          {session.diaSemana.toLocaleLowerCase()}
                        </div>
                        <div className="text-lg font-extrabold">
                          {session.sessao}
                          {'h'}
                        </div>
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
