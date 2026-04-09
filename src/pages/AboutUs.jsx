import React, { useEffect, useRef } from 'react';

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

const AboutUs = () => {
  const BASE = './';

  const headerRef = useScrollReveal();
  const img1Ref = useScrollReveal();
  const text1Ref = useScrollReveal();
  const img2Ref = useScrollReveal();
  const text2Ref = useScrollReveal();
  const img3Ref = useScrollReveal();
  const text3Ref = useScrollReveal();

  return (
    <>
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-up.revealed,
        .reveal-left.revealed,
        .reveal-right.revealed {
          opacity: 1;
          transform: translate(0, 0);
        }
        .reveal-left.delay-1 { transition-delay: 0.15s; }
        .reveal-left.delay-2 { transition-delay: 0.30s; }
        .reveal-right.delay-1 { transition-delay: 0.15s; }
        .reveal-right.delay-2 { transition-delay: 0.30s; }
      `}</style>

      <div className="flex-row items-center justify-center pt-4 px-4 md:p-0 mx-auto max-w-7xl">
        {/* Header image */}
        <div
          ref={headerRef}
          className="reveal-up w-full h-40 md:h-80 mx-auto mb-2 md:mb-8"
        >
          <div className="h-full">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={`${BASE}images/about-us/header.jpeg`}
            />
          </div>
        </div>

        {/* Bloco 1 — História */}
        <div className="flex-col md:flex-row flex h-100vh text-white rounded-lg">
          <div
            ref={img1Ref}
            className="reveal-left md:h-140 md:w-6/10 justify-end"
          >
            <img
              className="h-full w-full object-cover md:object-right"
              src={`${BASE}images/about-us/valores.png`}
            />
          </div>
          <div
            ref={text1Ref}
            className="reveal-right md:w-4/10 bg-[#0d0d0d] items-center justify-center flex flex-col py-6"
          >
            <div className="w-full justify-start courier-prime-700 font-extrabold text-4xl md:text-6xl text-white p-2 px-4">
              História
            </div>
            <div className="courier-prime-regular font-extralight text-xs md:text-sm text-white md:mb-4 px-4 ">
              O CINE XV, em operação desde o ano de 2004, está em constante
              evolução para acompanhar o mercado. Atualmente reúne o que há de
              mais moderno em tecnologia com som digital EX em salas 2D e 3D.
            </div>
            <div className="courier-prime-regular font-extralight text-xs md:text-sm text-white md:mb-4 px-4">
              Nossa trajetória com a experiência acumulada aliada à incessante
              busca por inovação, refletem na satisfação proporcionada aos
              nossos clientes do início ao fim do entretenimento, que
              experimenta um serviço diferenciado e de qualidade.
            </div>
          </div>
        </div>

        {/* Bloco 2 — Salas */}
        <div className="flex-col-reverse md:flex-row flex h-100vh text-white">
          <div
            ref={text2Ref}
            className="reveal-left md:w-4/10 bg-[#0d0d0d] items-center justify-center flex flex-col py-6"
          >
            <div className="w-full justify-start courier-prime-700 font-extrabold text-4xl md:text-6xl text-white p-2 px-4">
              Salas
            </div>
            <div className="courier-prime-regular font-extralight text-xs md:text-sm text-white md:mb-4 px-4">
              Preocupado com a satisfação do cliente, o CINE XV está sempre
              atento à qualidade de exibição, harmonização, higienização e
              segurança das salas.
            </div>
            <div className="courier-prime-regular font-extralight text-xs md:text-sm text-white md:mb-4 px-4">
              Além disso, o CINE XV conta com salas projetadas com ótima
              visibilidade, com objetivo de oferecer conforto e alta tecnologia
              para o seu público com filmes marcantes de diversos países e
              culturas.
            </div>
          </div>
          <div
            ref={img2Ref}
            className="reveal-right md:h-140 md:w-6/10 justify-end"
          >
            <img
              className="h-full w-full object-cover md:object-right"
              src={`${BASE}images/about-us/cadeiras.jpg`}
            />
          </div>
        </div>

        {/* Bloco 3 — Missão */}
        <div className="flex-col md:flex-row flex h-100vh text-white">
          <div
            ref={img3Ref}
            className="reveal-right md:h-140 md:w-6/10 justify-end"
          >
            <img
              className="h-full w-full object-cover md:object-right"
              src={`${BASE}images/about-us/clientes.jpg`}
            />
          </div>
          <div
            ref={text3Ref}
            className="reveal-left md:w-4/10 bg-[#0d0d0d] items-center justify-center flex flex-col py-6"
          >
            <div className="w-full justify-start courier-prime-700 font-extrabold text-4xl md:text-6xl text-white p-2 px-4">
              Missão
            </div>
            <div className="courier-prime-regular font-extralight text-xs md:text-sm text-white md:mb-4 px-4">
              Potencializar para o expectador, as emoções e conhecimento
              contidos no filme, gerando satisfação no entretenimento.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
