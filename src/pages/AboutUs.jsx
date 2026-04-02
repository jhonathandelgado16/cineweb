import React from 'react';

const AboutUs = () => {
  const BASE = './';
  return (
    <>
      <div className="flex-row items-center justify-center pt-4 px-4 md:p-0 mx-auto max-w-7xl">
        <div className="w-full h-40 md:h-80 mx-auto mb-2 md:mb-8">
          <div className="h-full">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${BASE}images/about-us/header.jpeg`}
            />
          </div>
        </div>
        <div className="flex-col md:flex-row flex w-full my-10 text-white mb-4 text-justify items-center">
          <div className="h-full w-full md:w-1/3 md:pr-10">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${BASE}images/about-us/valores.webp`}
            />
          </div>
          <div className="font-extralight md:text-2xl text-white mt-4 md:mb-4  text-justify w-full md:w-2/3 md:pl-10 ">
            O CINE XV, em operação desde o ano de 2004, está em constante
            evolução para acompanhar o mercado. Atualmente reúne o que há de
            mais moderno em tecnologia com som digital EX em salas 2D e 3D.
          </div>
        </div>

        <div className="flex-col md:flex-row flex w-full my-8 items-center">
          <div className="font-thin md:text-2xl text-white mb-4 md:mb-4 text-justify w-full md:w-2/3 md:pr-10">
            Nossa trajetória com a experiência acumulada aliada à incessante
            busca por inovação, refletem na satisfação proporcionada aos nossos
            clientes do início ao fim do entretenimento, que experimenta um
            serviço diferenciado e de qualidade.
          </div>
          <div className="h-full w-full md:w-1/3 md:pl-10">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${BASE}images/about-us/missao.webp`}
            />
          </div>
        </div>

        <div className="flex-col md:flex-row flex w-full my-8 items-center">
          <div className="hidden md:block h-full w-full md:w-1/3 md:pr-10">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${BASE}images/about-us/valores.webp`}
            />
          </div>
          <div className="font-thin md:text-2xl text-white md:mb-4 w-full md:w-2/3 md:pl-10">
            Preocupado com a satisfação do cliente, o CINE XV está sempre atento
            à qualidade de exibição, harmonização, higienização e segurança das
            salas.
          </div>
        </div>

        <div className="flex-col md:flex-row flex w-full my-8 items-center">
          <div className="font-thin md:text-2xl text-white md:mb-4 text-justify w-full md:w-2/3 md:pr-10">
            Além disso, o CINE XV conta com salas projetadas com ótima
            visibilidade, com objetivo de oferecer conforto e alta tecnologia
            para o seu público com filmes marcantes de diversos países e
            culturas.
          </div>
          <div className="hidden md:block h-full w-full md:w-1/3 md:pl-10">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${BASE}images/about-us/missao.webp`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
