import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieCard = () => {
  const { movieId } = useParams();
  const { directorId } = useOutletContext();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/directors/${directorId}/movies/${movieId}`)
      .then((r) => {
        if (!r.ok) throw new Error('Movie not found');
        return r.json();
      })
      .then(setMovie)
      .catch(() => navigate('/not-found'));
  }, [directorId, movieId, navigate]);

  if (!movie) return <h2>Movie not found.</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(', ')}</p>
    </div>
  );
};

export default MovieCard;
