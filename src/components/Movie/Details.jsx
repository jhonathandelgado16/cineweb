import React, { useState } from 'react';
import MovieSection from '../MovieSection/MovieSection';

const Details = (props) => {
  const [trailerOpen, setTrailerOpen] = useState(false);

  // Extrai o ID do YouTube da URL (funciona com youtu.be e youtube.com/watch?v=)
  const getYoutubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtu\.be\/|v=)([^&\s]+)/);
    return match ? match[1] : null;
  };

  const trailerId = getYoutubeId(props.movie.trailerUrl);

  return (
    <div className="flex-col md:flex-row flex w-full max-w-7xl mx-auto text-md md:p-2 md:gap-10">
      <div className="flex-col w-full md:w-1/3 h-full">
        <div className="w-full text-white font-light text-justify p-4 md:p-2 md:block">
          {/* Botão do trailer */}
          {trailerId && (
            <button
              onClick={() => setTrailerOpen(true)}
              className="mt-3 flex items-center gap-2 bg-[#d00000] hover:bg-[#a00000] transition duration-300 text-white font-bold py-2 px-4 rounded-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Assistir Trailer
            </button>
          )}
        </div>
        <div className="w-full text-white font-light text-justify p-4 md:p-2 md:block">
          <div className="text-[#b8b8b8] border-b-1 border-white/20 pb-2 mb-2">
            {props.movie.description || 'Lorem ipsum dolor sit amet...'}
          </div>
        </div>

        <div className="hidden md:block w-full text-white font-light text-justify p-4 md:p-2 rounded-lg flex-row ">
          <div className="flex justify-between border-b-1 border-white/20 pb-2 mb-2">
            <div className="font-extrabold pb-2 w-1/4">Gênero:</div>
            <div className="text-[#b8b8b8] w-3/4 text-end">
              {props.movie.genre || 'Não informado'}
            </div>
          </div>
          <div className="flex justify-between border-b-1 border-white/20 pb-2 mb-2">
            <div className="font-extrabold pb-2 w-1/4">Direção:</div>
            <div className="text-[#b8b8b8] w-3/4 text-end">
              {props.movie.director || 'Não informado'}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="font-extrabold pb-2 w-1/4">Elenco:</div>
            <div className="text-[#b8b8b8] w-3/4 text-end">
              {props.movie.cast ||
                "Neve Campbell Courteney Cox Isabel Mayn Jasmin Savoy Brown Mason Gooding Anna Camp Joel McHale Mckenna Grace Michelle Randolph Jimmy Tatro Asa Germann Celeste O'Connor"}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3">
        <MovieSection />
      </div>

      {/* Popup do trailer */}
      {trailerOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setTrailerOpen(false)} // fecha clicando fora
        >
          <div
            className="relative w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()} // impede fechar ao clicar no vídeo
          >
            {/* Botão fechar */}
            <button
              onClick={() => setTrailerOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-[#d00000] transition"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
              title="Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
