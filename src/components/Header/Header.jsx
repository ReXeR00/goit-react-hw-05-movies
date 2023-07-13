import { MainLogo } from './Header.styled';
import findYourMovieLogo from './findYourMovieLogo.png';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'center' }}>
      <MainLogo  src={findYourMovieLogo} />
    </header>
  );
};

export default Header;
