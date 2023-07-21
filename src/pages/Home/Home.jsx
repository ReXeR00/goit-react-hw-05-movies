import MovieList from 'components/MovieList/MovieList';
import { HeadLine } from './Home.styled';
const Home = () => {
  return (
    <div>
      <HeadLine>Trending today</HeadLine>
      <MovieList></MovieList>
    </div>
  );
};

export default Home;
