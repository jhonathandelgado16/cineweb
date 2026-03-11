import React from 'react';
import CardMovie from './components/CardMovie';
import Carousel from './components/Carousel';
import Section from './components/Section';
import NavBar from './components/NavBar/NavBar';
import BigCarousel from './components/BigCarousel/BigCarousel';
import Button from './components/Button';
import Card from './components/BigCarousel/Card';

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

const Home = () => {
  return (
    <>
      <BigCarousel>
        {movies.map((m) => (
          <Card key={m.title} title={m.title} img={m.big_img} />
        ))}
      </BigCarousel>
      <Section title="EM CARTAZ" movies={movies} />
      <Section title="EM BREVE" movies={movies} />
    </>
  );
};

export default Home;
