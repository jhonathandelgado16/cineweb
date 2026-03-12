import React, { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import HeaderMovie from './components/Movie/HeaderMovie';
import Section from './components/Section';
import MovieSection from './components/MovieSection/MovieSection';
import Details from './components/Movie/Details';
import { useParams } from 'react-router-dom';

const Movie = () => {
  const info = useParams();

  const movies = [
    {
      title: 'INTERESTELAR',
      big_img: '/images/bigcarousel/1.jpg',
      img: '/images/poster.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      genre: 'Não informado',
      director: 'Não informado',
      cast: 'Não informado',
      rating: '10',
    },
    {
      title: 'INCEPTION',
      big_img: '/images/bigcarousel/2.webp',
      img: '/images/poster1.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      genre: 'Não informado',
      director: 'Não informado',
      cast: 'Não informado',
      rating: '12',
    },
    {
      title: 'TENET',
      big_img: '/images/bigcarousel/4.webp',
      img: '/images/poster3.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      genre: 'Não informado',
      director: 'Não informado',
      cast: 'Não informado',
      rating: '14',
    },
    {
      title: 'DUNE',
      big_img: '/images/bigcarousel/3.jpg',
      img: '/images/poster4.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      genre: 'Não informado',
      director: 'Não informado',
      cast: 'Não informado',
      rating: '10',
    },
    {
      title: 'MATRIX',
      big_img: '/images/bigcarousel/5.jpg',
      img: '/images/poster5.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      genre: 'Não informado',
      director: 'Não informado',
      cast: 'Não informado',
      rating: '12',
    },
    {
      title: 'AVATAR',
      big_img: '/images/bigcarousel/6.webp',
      img: '/images/poster6.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      genre: 'Não informado',
      director: 'Não informado',
      cast: 'Não informado',
      rating: 'L',
    },
  ];

  const movie = movies[info.filme];

  useEffect(() => {});

  return (
    <>
      <HeaderMovie movie={movie} />
      <Details movie={movie} />
      <Section title="EM CARTAZ" movies={movies} />
    </>
  );
};

export default Movie;
