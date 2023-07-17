import { MainLogo, Header, Container } from './NavBar.styled';
import findYourMovieLogo from './findYourMovieLogo.png';

const Navbar = () => {
  return (
    <Container>
      <Header>
        <MainLogo src={findYourMovieLogo} />
      </Header>
    </Container>
  );
};

export default Navbar;
