import React from 'react';
import CardMovie from './components/CardMovie';
import Carousel from './components/Carousel';

const movies = [
  { title: 'INTERSTELAR', img: '/images/poster.jpg', rating: '18' },
  { title: 'INCEPTION', img: '/images/poster1.jpg', rating: '16' },
  { title: 'TENET', img: '/images/poster3.jpg', rating: '14' },
  { title: 'DUNE', img: '/images/poster4.jpg', rating: '12' },
  { title: 'MATRIX', img: '/images/poster5.jpg', rating: '10' },
  { title: 'AVATAR', img: '/images/poster6.jpg', rating: 'L' },
];

const App = () => {
  return (
    <div className="min-h-screen bg-[#131313] flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <Carousel>
          {movies.map((m, i) => (
            <CardMovie
              key={i}
              title={m.title}
              imgSrc={m.img}
              rating={m.rating}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default App;
