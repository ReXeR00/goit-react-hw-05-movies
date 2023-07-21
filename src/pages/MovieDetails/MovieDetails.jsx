import {
  MovieContainer,
  MovieGenres,
  MovieGenresTitle,
  MovieOverview,
  MovieOverviewTitle,
  MoviePhoto,
  MovieScore,
  MovieTitle,
  ListInfo,
  LinkInfo,
} from './MovieDetails.styled';
import BackLink from '../../components/Backlink/BackLink';
import { fetchMovieDetails } from '../../services/TMDB-API';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const backLinkHref = '/';

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = () => {
      setLoading(true);
      fetchMovieDetails(movieId)
        .then(detailMovie => {
          setMovie(detailMovie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    poster_path,
    original_title,
  } = movie || {};

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <BackLink to={backLinkHref}>Go home</BackLink>
        </div>
        <MovieContainer>
          {loading && <Loader />}
          <MoviePhoto
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt={original_title}
          />
          <div>
            <MovieTitle>
              {title} ({release_date.slice(0, 4)})
            </MovieTitle>
            <MovieScore> Movie score: {popularity}</MovieScore>
            <MovieOverviewTitle>Overvoew</MovieOverviewTitle>
            <MovieOverview>{overview}</MovieOverview>
            <MovieGenresTitle>Genres</MovieGenresTitle>
            <MovieGenres>
              {movie.genres &&
                movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
            </MovieGenres>
          </div>
          <hr />
        </MovieContainer>
      </div>
      <div>
        <ListInfo>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviewies</LinkInfo>
          </li>
        </ListInfo>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
