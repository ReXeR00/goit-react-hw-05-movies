import { Routes, NavLink, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import CanvasAnimation from '../CanvasAnimation/CanvasAnimation';
import Header from 'components/Header/Header';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: black;

    &.active {
      color: orange;
    }
  `;
  return (
    <div>
      <CanvasAnimation>
        <nav>
          <Header></Header>
          <StyledLink></StyledLink>
          <StyledLink></StyledLink>
          <StyledLink></StyledLink>
        </nav>
      </CanvasAnimation>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
