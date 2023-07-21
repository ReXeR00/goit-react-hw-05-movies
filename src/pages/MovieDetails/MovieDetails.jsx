import {
  MovieContainer,
  MovieGenres,
  MovieGenresTitle,
  MovieOverview,
  MovieOverviewTitle,
  MoviePhoto,
  MovieScore,
  MovieTitle,
} from './MovieDetails.styled';
import BackLink from '../../components/Backlink/BackLink';

const MovieDetails = () => {
  const backLinkHref = '/';

  return (
    <div>
      <MovieContainer>
        <BackLink to={backLinkHref}>Go home</BackLink>
        <MoviePhoto />
        <MovieTitle></MovieTitle>
        <MovieScore></MovieScore>
        <MovieOverviewTitle></MovieOverviewTitle>
        <MovieOverview></MovieOverview>
        <MovieGenresTitle></MovieGenresTitle>
        <MovieGenres></MovieGenres>
      </MovieContainer>
    </div>
  );
};

export default MovieDetails;
