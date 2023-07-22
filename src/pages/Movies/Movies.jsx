import SearchBar from '../../components/SearchBar/SearchBar';
import { useState } from 'react';
import { fetchMovie } from '../../services/TMDB-API';
import TrendingMovie from 'components/TrenidingMovie/TrendingMovie';

const Movie = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const FindMovie = queryMovie => {
    fetchMovie(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);

        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <main>
      <SearchBar searchMovies={FindMovie}></SearchBar>
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <TrendingMovie films={searchFilms} />}
    </main>
  );
};

export default Movie;
