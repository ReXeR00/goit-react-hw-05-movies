import { Routes, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import CanvasAnimation from '../CanvasAnimation/CanvasAnimation';
import Navbar from 'components/NavBar/NavBar';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import NotFound from 'pages/NotFound/NotFound';
import Loader from 'components/Loader/Loader';
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
        <Navbar></Navbar>
        <Loader></Loader>

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
