import React from 'react';

const Project = () => {
  const BASE = './';
  return (
    <>
      <div className="flex-row items-center justify-center pt-4 px-4 md:p-0 mx-auto max-w-7xl">
        <div className="w-full md:h-80 mx-auto mb-0 md:mb-8">
          <div className="h-full">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${BASE}images/social-project/header.jpeg`}
            />
          </div>
        </div>

        <div className="flex-col-reverse md:flex-row flex text-white">
          <div className="md:w-4/10 md:h-200 items-center justify-center flex flex-col py-4 md:py-6 md:px-18">
            <div className="w-full justify-center text-center spalla font-extrabold text-5xl md:text-7xl text-white mb-2">
              SOBRE O PROJETO ESCOLA
            </div>
            <div className="text-justify font-extralight text-md md:text-xl text-white mb-2 md:mb-4 px-2">
              O CINE XV criou o PROJETO ESCOLA no intuito de aproximar o
              estudante do cinema. O PROJETO ESCOLA já levou milhares de alunos
              ao cinema, aproximando os jovens da arte, da história e da cultura
              do País.
            </div>
            <div className="text-justify font-extralight text-md md:text-xl text-white mb-2 md:mb-4 px-2">
              Os alunos do ensino médio e fundamental assistem aos filmes
              nacionais e estrangeiros com a participação dos professores em uma
              sessão especial, por um valor reduzido no ingresso e com o KIT
              ESCOLA com preço acessível (Pipoca, refrigerante e doce).
            </div>
            <div className="text-justify font-extralight text-md md:text-xl text-white mb-2 md:mb-4 px-2">
              Para os professores, o projeto se tornou uma forma de inovar as
              aulas com exercícios e atividades multidisciplinares.
            </div>
          </div>
          <div className="h-100 md:h-200 md:w-6/10 justify-center flex items-center relative">
            <div className="absolute w-4/6 md:w-3/5 h-3/5 p-2 md:p-4 bg-white pb-6 md:pb-12 -translate-10 -rotate-3 md:-translate-24 md:-rotate-5 ">
              <img
                className="h-full w-full object-cover"
                src={`${BASE}images/social-project/criancas.jpg`}
              />
            </div>

            <div className="absolute w-4/6 md:w-3/5 h-3/5 p-2 md:p-4 bg-white pb-6 md:pb-12 translate-10 rotate-3 md:translate-24 md:rotate-5">
              <img
                className="h-full w-full object-cover"
                src={`${BASE}images/social-project/criancas.jpg`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
