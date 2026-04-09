import React from 'react';
import CardMovie from './components/CardMovie';
import Carousel from './components/Carousel';
import Section from './components/Section';
import NavBar from './components/NavBar/NavBar';
import BigCarousel from './components/BigCarousel/BigCarousel';
import Button from './components/Button';
import Card from './components/BigCarousel/Card';
import ComingSoon from './components/Soon/ComingSoon';

const BASE = './';
const movies = [
  {
    title: 'Super Mario Galaxy: O Filme',
    big_img: `${BASE}images/bigcarousel/mario.webp`,
    img: `${BASE}images/mario.webp`,
    description:
      'Uma nova aventura leva Mario a enfrentar um inédito e ameaçador super vilão. Em Super Mario Galaxy: O Filme, o bigodudo encanador italiano e seus aliados embarcam numa aventura galáctica repleta de ação e momentos emocionantes depois de salvar o Reino dos Cogumelos.',
    genre: 'Animação, Aventura, Ação, Família, Fantasia',
    director: 'Aaron Horvath, Michael Jelenic',
    cast: 'Chris Pratt, Anya Taylor-Joy, Charlie Day',
    rating: 'L',
    trailerUrl: 'https://www.youtube.com/watch?v=BDyTQmUd_aw',
  },
  {
    title: 'Eles Vão Te Matar',
    big_img: `${BASE}images/bigcarousel/elesvao.webp`,
    img: `${BASE}images/elesvao.webp`,
    description:
      'Eles Vão Te Matar acompanha uma mulher, que trabalha como empregada doméstica em Nova York, mas terá que correr contra o tempo para sobreviver. Ao notar que a cidade estava envolvida em um grande mistério, ela terá que passar uma noite no Virgil, o misterioso e mortal esconderijo de um doentio culto demoníaco. Com uma única oportunidade, ela terá que vencer a batalha para tentar não se tornar oferenda para os membros desse grupo.',
    genre: 'Ação, Comédia, Terror',
    director: 'Kirill Sokolov',
    cast: "Zazie Beetz, Myha'la Herrold, Tom Felton",
    rating: '18',
    trailerUrl: 'https://www.youtube.com/watch?v=BDyTQmUd_aw',
  },
  {
    title: 'Crepúsculo',
    big_img: `${BASE}images/bigcarousel/crepusculo.webp`,
    img: `${BASE}images/crepusculo.webp`,
    description:
      'Isabella Swan (Kristen Stewart) e seu pai, Charlie (Billy Burke), mudaram-se recentemente. No novo colégio ela logo conhece Edward Cullen (Robert Pattinson), um jovem admirado por todas as garotas locais e que mantém uma aura de mistério em torno de si. Eles aos poucos se apaixonam, mas Edward sabe que isto põe a vida de Isabella em risco.',
    genre: 'Fantasia, Romance',
    director: 'Catherine Hardwicke',
    cast: 'Kristen Stewart, Robert Pattinson, Taylor Lautner',
    rating: '12',
    trailerUrl: 'https://www.youtube.com/watch?v=BDyTQmUd_aw',
  },
  {
    title: 'Devoradores de Estrelas',
    big_img: `${BASE}images/bigcarousel/devoradores.webp`,
    img: `${BASE}images/devoradores.webp`,
    description:
      'Devoradores de Estrelas acompanha a jornada inesquecível de um professor de ciências do ensino fundamental chamado Ryland Grace (Ryan Gosling). Um dia, Ryland acorda em uma espaçonave a anos-luz do planeta Terra. Sem memória alguma de quem é ou como foi parar ali, o professor se encontra numa situação inexplicável. Aos poucos, porém, suas lembranças voltam e ele recorda que foi recrutado para uma missão especial chamada Projeto Fim do Mundo na qual ele foi enviado a 11,9 anos-luz da Terra para investigar o motivo pelo qual o Sol está morrendo na Via Láctea. Ryland precisará recorrer aos seus conhecimentos científicos para resolver esse enigma o mais rápido possível e impedir a extinção da humanidade. O que, porém, parecia ser apenas uma trajetória solitária se transforma em uma viagem em companhia de uma amizade inesperada.',
    genre: 'Aventura, Ação, Ficção Científica',
    director: 'Phil Lord, Christopher Miller',
    cast: 'Ryan Gosling, Sandra Hüller, Milana Vayntrub',
    rating: '14',
    trailerUrl: 'https://www.youtube.com/watch?v=BDyTQmUd_aw',
  },
  {
    title: 'Pânico 7',
    big_img: `${BASE}images/bigcarousel/5.jpg`,
    img: `${BASE}images/poster4.jpg`,
    description:
      'Um novo assassino Ghostface surge na tranquila cidade onde Sidney Prescott construiu uma nova vida. Seus medos mais sombrios se concretizam quando sua filha se torna o próximo alvo.',
    genre: 'Suspense, Terror',
    director: 'Kevin Williamson',
    cast: 'Neve Campbell, Courteney Cox, Isabel May',
    rating: '18',
    trailerUrl: 'https://www.youtube.com/watch?v=BDyTQmUd_aw',
  },
  {
    title: 'Uma Segunda Chance',
    big_img: `${BASE}images/bigcarousel/segundachance.webp`,
    img: `${BASE}images/segundachance.webp`,
    description:
      'Em Uma Segunda Chance, Kenna Rowan (Maika Monroe) é uma jovem que, no passado, cometeu um erro que a coloca atrás das grades. Sete anos mais tarde, agora como ex-detenta, ela tenta reconstruir a vida, retornando à sua cidade natal em Wyoming. Sem oportunidades, ela passa a enfrentar a dura realidade de um mundo marcado pelo preconceito enquanto tenta se aproximar da filha pequena Diem que nunca a conheceu. Continuamente rejeitada pelos avós de Diem, que se recusam a deixar Kenna se reconectar com a filha, a jovem encontra consolo e uma compaixão inesperada em Ledger Ward, ex-jogador da NFL e dono do bar mais famoso da região. À medida que se aproximam, um romance secreto e profundo se desenvolve, colocando os dois em perigo. Kenna, então, precisa lidar com os traumas do passado, buscando se perdoar e se permitindo viver um amor capaz de curar as maiores dores de um coração partido.',
    genre: 'Drama, Romance',
    director: 'Vanessa Caswill',
    cast: 'Maika Monroe, Tyriq Withers, Rudy Pankow',
    rating: '16',
    trailerUrl: 'https://www.youtube.com/watch?v=BDyTQmUd_aw',
  },
  {
    title: 'Cara de Um, Focinho de Outro',
    big_img: `${BASE}images/bigcarousel/focinho.webp`,
    img: `${BASE}images/focinho.webp`,
    description:
      'Cientistas descobrem uma maneira de transferir a consciência humana para animais robóticos. Mabel usa a nova tecnologia para desvendar mistérios do mundo animal que superam tudo o que ela jamais poderia ter imaginado.',
    genre: 'Animação, Aventura, Comédia',
    director: 'Daniel Chong',
    cast: 'Piper Curda, Bobby Moynihan, Melissa Villaseñor',
    rating: 'L',
    trailerUrl: 'https://www.youtube.com/watch?v=BDyTQmUd_aw',
  },
];

const Home = () => {
  return (
    <>
      <BigCarousel>
        {movies.map((m, i) => (
          <Card id={i} key={i} movie={m} />
        ))}
      </BigCarousel>
      <Section title="EM CARTAZ" movies={movies} />
      <ComingSoon />
    </>
  );
};

export default Home;
