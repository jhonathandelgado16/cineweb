import React from 'react';
import ImageWithLoader from '../components/ImageWithLoader';

const AboutUs = () => {
  const BASE = './';

  return (
    <>
      <div className="flex-row items-center justify-center pt-4 px-4 md:p-0 mx-auto max-w-7xl">
        {/* Header image */}
        <div className="reveal-up w-full md:h-80 mx-auto mb-2 md:mb-8">
          <div className="h-full">
            <ImageWithLoader
              src={`${BASE}images/about-us/header.jpeg`}
              alt="Sobre nós"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Bloco 1 — História */}
        <div className="flex-col md:flex-row flex text-white rounded-lg">
          <div className="h-100 md:h-200 md:w-6/10 justify-center flex items-center relative">
            <div className="absolute w-4/6 md:w-3/5 h-3/5 p-2 md:p-4 bg-white pb-6 md:pb-12 -translate-10 -rotate-3 md:-translate-24 md:-rotate-5 ">
              <img
                className="h-full w-full object-cover"
                src={`${BASE}images/about-us/cadeiras.jpg`}
              />
            </div>

            <div className="absolute w-4/6 md:w-3/5 h-3/5 p-2 md:p-4 bg-white pb-6 md:pb-12 translate-10 rotate-3 md:translate-24 md:rotate-5">
              <img
                className="h-full w-full object-cover"
                src={`${BASE}images/about-us/valores.png`}
              />
            </div>
          </div>
          <div className="md:w-4/10 md:h-200 items-center justify-center flex flex-col py-4 md:py-6 md:px-18">
            <div className="w-full justify-center text-center spalla font-extrabold text-6xl md:text-7xl text-white">
              História
            </div>
            <div className="text-justify font-extralight text-md md:text-2xl text-white mb-2 md:mb-4 px-2">
              O CINE XV, em operação desde o ano de 2004, está em constante
              evolução para acompanhar o mercado. Atualmente reúne o que há de
              mais moderno em tecnologia com som digital EX em salas 2D e 3D.
            </div>
            <div className="text-justify font-extralight text-md md:text-2xl text-white mb-2 md:mb-4 px-2">
              Nossa trajetória com a experiência acumulada aliada à incessante
              busca por inovação, refletem na satisfação proporcionada aos
              nossos clientes do início ao fim do entretenimento, que
              experimenta um serviço diferenciado e de qualidade.
            </div>
          </div>
        </div>

        {/* Bloco 2 — Salas */}
        <div className="flex-col-reverse md:flex-row flex text-white">
          <div className="md:w-4/10 md:h-200 items-center justify-center flex flex-col py-4 md:py-6 md:px-18">
            <div className="w-full justify-center text-center spalla font-extrabold text-6xl md:text-7xl text-white">
              NOSSAS SALAS
            </div>
            <div className="text-justify font-extralight text-md md:text-2xl text-white mb-2 md:mb-4 px-2">
              Preocupado com a satisfação do cliente, o CINE XV está sempre
              atento à qualidade de exibição, harmonização, higienização e
              segurança das salas.
            </div>
            <div className="text-justify font-extralight text-md md:text-2xl text-white mb-2 md:mb-4 px-2">
              Além disso, o CINE XV conta com salas projetadas com ótima
              visibilidade, com objetivo de oferecer conforto e alta tecnologia
              para o seu público com filmes marcantes de diversos países e
              culturas.
            </div>
          </div>
          <div className="h-100 md:h-200 md:w-6/10 justify-center flex items-center relative">
            <div className="absolute w-4/6 md:w-3/5 h-3/5 p-2 md:p-4 bg-white pb-6 md:pb-12 translate-10 rotate-3 md:translate-24 md:rotate-5">
              <img
                className="h-full w-full object-cover"
                src={`${BASE}images/about-us/valores.png`}
              />
            </div>

            <div className="absolute w-4/6 md:w-3/5 h-3/5 p-2 md:p-4 bg-white pb-6 md:pb-12 -translate-10 -rotate-3 md:-translate-24 md:-rotate-5 ">
              <img
                className="h-full w-full object-cover"
                src={`${BASE}images/about-us/cadeiras.jpg`}
              />
            </div>
          </div>
        </div>

        {/* Bloco 3 — Missão */}
        <div className="flex-col md:flex-row flex text-white rounded-lg">
          <div className="h-100 md:h-200 md:w-6/10 justify-center flex items-center relative">
            <div className="absolute w-4/6 md:w-3/5 h-3/5 p-2 md:p-4 bg-white pb-6 md:pb-12 -translate-10 -rotate-3 md:-translate-24 md:-rotate-5 ">
              <img
                className="h-full w-full object-cover"
                src={`${BASE}images/about-us/clientes.jpg`}
              />
            </div>

            <div className="absolute w-4/6 md:w-3/5 h-3/5 p-2 md:p-4 bg-white pb-6 md:pb-12 translate-10 rotate-3 md:translate-24 md:rotate-5">
              <img
                className="h-full w-full object-cover"
                src={`${BASE}images/about-us/clientes.jpg`}
              />
            </div>
          </div>
          <div className="md:w-4/10 md:h-200 items-center justify-center flex flex-col py-4 md:py-6 md:px-18">
            <div className="w-full justify-center text-center spalla font-extrabold text-6xl md:text-7xl text-white">
              MISSÃO
            </div>
            <div className="text-justify font-extralight text-md md:text-2xl text-white mb-2 md:mb-4 px-2">
              Potencializar para o expectador, as emoções e conhecimento
              contidos no filme, gerando satisfação no entretenimento.
            </div>

            <div className="w-full justify-center text-center spalla font-extrabold text-6xl md:text-7xl text-white">
              VISÃO
            </div>
            <div className="text-justify font-extralight text-md md:text-2xl text-white mb-2 md:mb-4 px-2">
              Ser um grupo cinematográfico de referência que gere
              desenvolvimento em diversas regiões.
            </div>

            <div className="w-full justify-center text-center spalla font-extrabold text-6xl md:text-7xl text-white">
              VALORES
            </div>
            <div className="text-justify font-extralight text-md md:text-2xl text-white mb-2 md:mb-4 px-2">
              Qualidade, Respeito, Ética, Profissionalismo e Dedicação.
            </div>
            <div className="text-justify font-extralight text-sm md:text-2xl text-white md:mb-4 px-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
