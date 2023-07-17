import { Routes, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import CanvasAnimation from '../CanvasAnimation/CanvasAnimation';
import Header from 'components/Header/Header';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
// import { lazy } from 'react';

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
        <Header></Header>

        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/Movies">Movies</StyledLink>
          {/* <StyledLink to="TV-Shows"></StyledLink>
          <StyledLink to="People"></StyledLink>
          <StyledLink to="Trending"></StyledLink> */}
        </nav>

        <Routes>
          <Route path="/goit-react-hw-05-movies" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CanvasAnimation>
    </div>
  );
};
