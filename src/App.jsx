import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer/Footer';
import Menu from './Menu';
import SoonPage from './components/Soon/SoonPage';
import AboutUs from './pages/AboutUs';
import Project from './pages/Project';

const App = () => {
  return (
    <BrowserRouter basename="/cineweb/">
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:filme" element={<Movie />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/em-breve" element={<SoonPage />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/projeto-social" element={<Project />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
