import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DirectorContainer from './pages/DirectorContainer';
import DirectorForm from './pages/DirectorForm';
import DirectorCard from './pages/DirectorCard';
import MovieForm from './pages/MovieForm';
import MovieCard from './pages/MovieCard';
import NavBar from './components/NavBar';
import DirectorList from './pages/DirectorList';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/directors" element={<DirectorContainer />}>
          <Route index element={<DirectorList />} />
          <Route path="/directors/new" element={<DirectorForm />} />
          <Route path="/directors/:id" element={<DirectorCard />}>
            <Route path="movies/new" element={<MovieForm />} />
            <Route path="movies/:movieId" element={<MovieCard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
