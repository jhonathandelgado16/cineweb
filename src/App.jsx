import React from 'react';
import CardMovie from './components/CardMovie';
import Carousel from './components/Carousel';
import Section from './components/Section';

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
    <div className="h-full bg-[#131313] flex-row items-center justify-center p-8">
      <Section title="Em Cartaz" movies={movies} />
      <Section title="Em Breve" movies={movies} />
    </div>
  );
};

export default App;
