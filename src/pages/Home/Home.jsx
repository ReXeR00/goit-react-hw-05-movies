import TrendingMovie from '../../components/TrenidingMovie/TrendingMovie';
import { HeadLine } from './Home.styled';
const Home = () => {
  return (
    <div>
      <HeadLine>Trending today</HeadLine>
      <TrendingMovie></TrendingMovie>
    </div>
  );
};

export default Home;
