import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <h1>Welcome to the Movie Directory</h1>
      <p>Explore a collection of famous directors and their iconic movies.</p>
      <Link to="/directors">View Directors</Link> | 
      <Link to="/about">Learn More About This App</Link>
    </>
  );
}

export default Home;
