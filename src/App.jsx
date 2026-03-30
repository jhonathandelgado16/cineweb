import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer/Footer';
import Menu from './Menu';
import ComingSoon from './ComingSoon';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:filme" element={<Movie />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/em-breve" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
