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
        <div className="font-light text-md text-white mb-4 text-justify">
          O CINE XV, em operação desde o ano de 2004, está em constante evolução
          para acompanhar o mercado. Atualmente reúne o que há de mais moderno
          em tecnologia com som digital EX em salas 2D e 3D.
        </div>
        <div className="font-light text-md text-white mb-4 text-justify">
          Nossa trajetória com a experiência acumulada aliada à incessante busca
          por inovação, refletem na satisfação proporcionada aos nossos clientes
          do início ao fim do entretenimento, que experimenta um serviço
          diferenciado e de qualidade. Preocupado com a satisfação do cliente, o
          CINE XV está sempre atento à qualidade de exibição, harmonização,
          higienização e segurança das salas.
        </div>
        <div className="font-light text-md text-white mb-4 text-justify">
          Além disso, o CINE XV conta com salas projetadas com ótima
          visibilidade, com objetivo de oferecer conforto e alta tecnologia para
          o seu público com filmes marcantes de diversos países e culturas.
        </div>

        <div className="flex-row w-full mt-8">
          <div className=" relative flex h-full w-10/10">
            <img
              className="h-120 w-full rounded-lg object-cover"
              src={`${BASE}images/about-us/missao.webp`}
            />
            <div className="absolute flex flex-col h-full w-full justify-center items-center bg-[#131313]/60">
              <div className="flex flex-col md:px-10 mb-8">
                <div className="text-white font-extrabold text-3xl ">
                  MISSÃO
                </div>
                <div className="font-light text-md text-white mb-4 text-justify">
                  Potencializar para o expectador, as emoções e conhecimento
                  contidos no filme, gerando satisfação no entretenimento.
                </div>
              </div>

              <div className="flex flex-col md:px-10 mb-8">
                <div className="text-white font-extrabold text-3xl ">VISÃO</div>
                <div className="font-light text-md text-white mb-4 text-justify">
                  Ser um grupo cinematográfico de referência que gere
                  desenvolvimento em diversas regiões.
                </div>
              </div>

              <div className="flex flex-col md:px-10 mb-8">
                <div className="text-white font-extrabold text-3xl ">
                  VALORES
                </div>
                <div className="font-light text-md text-white mb-4 text-justify">
                  Qualidade, Respeito, Ética, Profissionalismo e Dedicação.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
