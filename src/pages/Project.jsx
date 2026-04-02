import React from 'react';

const Project = () => {
  const BASE = './';
  return (
    <>
      <div className="flex-row items-center justify-center pt-4 px-4 md:p-0 mx-auto max-w-7xl">
        <div className="w-full h-40 md:h-80 mx-auto mb-2 md:mb-8">
          <div className="h-full">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${BASE}images/social-project/header.jpeg`}
            />
          </div>
        </div>
        <div className="font-light md:text-lg text-white mb-4 text-justify">
          O CINE XV criou o PROJETO ESCOLA no intuito de aproximar o estudante
          do cinema. O PROJETO ESCOLA já levou milhares de alunos ao cinema,
          aproximando os jovens da arte, da história e da cultura do País.
        </div>
        <div className="font-light md:text-lg text-white mb-4 text-justify">
          Os alunos do ensino médio e fundamental assistem aos filmes nacionais
          e estrangeiros com a participação dos professores em uma sessão
          especial, por um valor reduzido no ingresso e com o KIT ESCOLA com
          preço acessível (Pipoca, refrigerante e doce).
        </div>
        <div className="font-light md:text-lg text-white mb-4 text-justify">
          Para os professores, o projeto se tornou uma forma de inovar as aulas
          com exercícios e atividades multidisciplinares.
        </div>
      </div>
    </>
  );
};

export default Project;
