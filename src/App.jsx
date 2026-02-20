import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="filme" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
