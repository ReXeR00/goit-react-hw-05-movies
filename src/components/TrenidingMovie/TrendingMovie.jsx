import { List, ListElement } from './TrendingMovie.styled';
import { useEffect, useState } from 'react';
import { fetchTrending } from '../../services/TMDB-API';
import { Link } from 'react-router-dom';

const TrendingMovie = () => {
  const [trendingMovies, setTrendingMovie] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(trendingMovies => {
        setTrendingMovie(trendingMovies);
      })
      .catch(error => {
        console.error('Error fetching trending movies:', error);
      });
  });

  return (
    <div>
      <List>
        {trendingMovies.map(movie => (
          <ListElement key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </ListElement>
        ))}
      </List>
    </div>
  );
};

export default TrendingMovie;
