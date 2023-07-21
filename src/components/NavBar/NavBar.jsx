import { MainLogo, Header, Container } from './NavBar.styled';
import findYourMovieLogo from './findYourMovieLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <Header>
        <Link to="/">
          <MainLogo src={findYourMovieLogo} alt="Logo" />
        </Link>
      </Header>
    </Container>
  );
};

export default Navbar;
