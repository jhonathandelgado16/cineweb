import React from 'react';
import CardMovie from '../CardMovie';
import Carousel from '../Carousel';
import Section from '../Section';
import NavBar from '../NavBar/NavBar';
import BigCarousel from '../BigCarousel/BigCarousel';
import Button from '../Button';
import Card from '../BigCarousel/Card';
import CardSoon from './CardSoon';

const BASE = './';
const moviesSoon = [
  {
    title: 'Star Wars: O Mandaloriano e Grogu',
    big_img: `${BASE}images/bigcarousel/mandaloriano.webp`,
    img: `${BASE}images/mandaloriano.webp`,
    description:
      'Dirigido por Jon Favreau, Star Wars: O Mandaloriano e Grogu é um novo filme do universo de Star Wars, que acompanha o caçador de recompensas solitário, o Mandaloriano Din Djarin (Pedro Pascal) e seu aprendiz Grogu, embarcando em uma nova e emocionante aventura. A trama dará continuidade aos acontecimentos vistos na série The Mandalorian sob o contexto da recente queda do Império e, enquanto a Nova República luta para estabelecer as fundações do governo baseadas na luta da Rebelião, o lendário caçador de recompensas Mandaloriano Din Djarin (Pedro Pascal) e seu jovem aprendiz Grogu entram em uma missão para achar os esconderijos dos senhores da guerra Imperiais espalhados pela galáxia.',
    genre: 'Aventura, Fantasia, Ficção Científica',
    director: 'Jon Favreau',
    cast: 'Pedro Pascal, Brendan Wayne, Lateef Crowder',
    rating: 'L',
  },
  {
    title: 'O Diabo Veste Prada 2',
    big_img: `${BASE}images/bigcarousel/prada.webp`,
    img: `${BASE}images/prada.webp`,
    description:
      'A continuação tão esperada do já clássico O Diabo Veste Prada. A trama acompanha Miranda Prestly num momento de mudanças na moda e na indústria de publicações e revistas. Lidando com o colapso do jornalismo, Miranda precisa enfrentar ainda mais um obstáculo: sua antiga secretária Emily, que, agora, é uma executiva de alto escalão numa marca de luxo, tomando as decisões publicitárias da grife e, por isso, entrando no caminho de Miranda.',
    genre: 'Comédia, Drama',
    director: 'David Frankel',
    cast: 'Meryl Streep, Anne Hathaway, Emily Blunt',
    rating: 'L',
  },
  {
    title: 'Maldição Da Múmia',
    big_img: `${BASE}images/bigcarousel/mumia.webp`,
    img: `${BASE}images/mumia.webp`,
    description:
      'Em Maldição Da Múmia, a filha de um jornalista desaparece num deserto sem deixar rastros, deixando a família dilacerada e em luto. Até que, oito anos mais tarde, a jovem garota reaparece, deixando todos chocados. O problema é que esse encontro aparentemente feliz transforma-se em um pesadelo de proporções gigantes.',
    genre: 'Suspense, Terror',
    director: 'Lee Cronin',
    cast: 'Jack Reynor, Laia Costa, Veronica Falcón',
    rating: '18',
  },
  {
    title: 'Michael',
    big_img: `${BASE}images/bigcarousel/michael.webp`,
    img: `${BASE}images/michael.webp`,
    description:
      'Michael é uma cinebiografia musical sobre o rei do pop Michael Jackson. O longa retrata a vida e o legado do cantor (Jaafar Jackson), desde a descoberta de seu espetacular talento como líder do Jackson Five até o impacto cultural de sua visão artística ímpar. Para além da música, este drama biográfico traça as ambições criativas de um homem que buscou ativamente se tornar um dos maiores artistas do mundo, destacando os passos dados por Jackson fora dos palcos. Performances icônicas de sua carreira solo, ainda, compõem esse retrato íntimo e nunca antes visto do artista.',
    genre: 'Biopic, Drama, Musical',
    director: 'Antoine Fuqua',
    cast: 'Jaafar Jackson, Colman Domingo, Nia Long',
    rating: 'L',
  },
  {
    title: 'Todo Mundo em Pânico 6',
    big_img: `${BASE}images/bigcarousel/todomundo6.webp`,
    img: `${BASE}images/todomundo6.webp`,
    description:
      'Em Todo Mundo em Pânico 6, Shorty (Marlon Wayans), Ray (Shawn Wayans), Cindy (Anna Faris) e Brenda (Hall) estão de volta na mira do assassino mascarado. Vinte seis anos após escaparem, o grupo se vê envolvido em mais uma trama repleta de ironia. Nenhum remake, prequel, requel, spin-off e sequência estará a salvo.',
    genre: 'Comédia, Terror',
    director: 'Michael Tiddes',
    cast: 'Marlon Wayans, Shawn Wayans, Anna Faris',
    rating: '18',
  },
];

const SoonPage = () => {
  return (
    <>
      {/* <div className="flex-col text-white md:flex-row flex w-full max-w-7xl mx-auto text-md mx-4 px-4 md:p-2 md:gap-10 font-extrabold text-3xl justify-center mb-4 mt-4">
        EM BREVE NO CINE XV
      </div> */}
      {moviesSoon.map((m) => (
        <CardSoon movie={m} />
      ))}
    </>
  );
};

export default SoonPage;
