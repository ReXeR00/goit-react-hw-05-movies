import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { fetchMovie } from '../../services/TMDB-API';
import MovieList from '../../components/MovieList/MovieList';
import { Warning } from './Movies.styled';

const Movie = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const findMovie = queryMovie => {
    fetchMovie(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);

        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log('This is searchFilms: ', searchFilms);
  }, [searchFilms]);
  return (
    <main>
      <SearchBar searchMovies={findMovie}></SearchBar>
      {noMoviesText && (
        <Warning>
          There is no movies with this request. Please, try again
        </Warning>
      )}
      {searchFilms.length > 0 && <MovieList films={searchFilms} />}
    </main>
  );
};

export default Movie;
