import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, MovieLink } from './MovieList.styled';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <MovieLink to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

export default MovieList;

EditorList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
