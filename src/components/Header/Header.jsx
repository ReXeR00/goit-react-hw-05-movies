import { MainLogo } from './Header.styled';
import findYourMovieLogo from './findYourMovieLogo.png';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '50px',
      }}
    >
      <MainLogo src={findYourMovieLogo} />
    </header>
  );
};

export default Header;
