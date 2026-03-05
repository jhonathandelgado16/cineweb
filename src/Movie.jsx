import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HeaderMovie from './components/Movie/HeaderMovie';
import Section from './components/Section';
import MovieSection from './components/MovieSection/MovieSection';
import Details from './components/Movie/Details';

const movies = [
  { title: 'INTERESTELAR', img: '/images/poster.jpg', rating: '18' },
  { title: 'INCEPTION', img: '/images/poster1.jpg', rating: '16' },
  { title: 'TENET', img: '/images/poster3.jpg', rating: '14' },
  { title: 'DUNE', img: '/images/poster4.jpg', rating: '12' },
  { title: 'MATRIX', img: '/images/poster5.jpg', rating: '10' },
  { title: 'AVATAR', img: '/images/poster6.jpg', rating: 'L' },
];

const Movie = () => {
  return (
    <>
      <HeaderMovie title="INTERESTELAR" img="/images/bigcarousel/1.jpg" />
      <Details movie={movies[0]} />
      <Section title="EM CARTAZ" movies={movies} />
    </>
  );
};

export default Movie;
