import React from 'react';
import CardMovie from './components/CardMovie';
import Carousel from './components/Carousel';
import Section from './components/Section';
import NavBar from './components/NavBar/NavBar';
import BigCarousel from './components/BigCarousel/BigCarousel';
import Button from './components/Button';
import Card from './components/BigCarousel/Card';

const movies = [
  { title: 'INTERESTELAR', img: '/images/poster.jpg', rating: '18' },
  { title: 'INCEPTION', img: '/images/poster1.jpg', rating: '16' },
  { title: 'TENET', img: '/images/poster3.jpg', rating: '14' },
  { title: 'DUNE', img: '/images/poster4.jpg', rating: '12' },
  { title: 'MATRIX', img: '/images/poster5.jpg', rating: '10' },
  { title: 'AVATAR', img: '/images/poster6.jpg', rating: 'L' },
];

const bigMovies = [
  { title: 'INTERESTELAR', img: '/images/bigcarousel/1.jpg' },
  { title: 'INCEPTION', img: '/images/bigcarousel/2.webp' },
  { title: 'DUNE', img: '/images/bigcarousel/3.jpg' },
];

const App = () => {
  return (
    <>
      <NavBar />
      <div className="h-full bg-[#131313] flex-row items-center justify-center p-8 mx-auto">
        <BigCarousel>
          {bigMovies.map((m) => (
            <Card key={m.title} title={m.title} img={m.img} />
          ))}
        </BigCarousel>
        <Section title="Em Cartaz" movies={movies} />
        <Section title="Em Breve" movies={movies} />
      </div>
    </>
  );
};

export default App;
