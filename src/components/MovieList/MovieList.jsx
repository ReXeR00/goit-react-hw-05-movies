import { List, ListElement } from './MovieList.styled';
import { useEffect, useState } from 'react';
import Movie from 'pages/Movies/Movies';
import { fetchTrending } from '../../services/TMDB-API';
import { Link } from 'react-router-dom';

const MovieList = () => {
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

export default MovieList;
