import { Routes, NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import CanvasAnimation from '../CanvasAnimation/CanvasAnimation';
import Navbar from 'components/NavBar/NavBar';

import {  lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Loader = lazy(() => import('components/Loader/Loader'));

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: white;
    padding-right: 20px;
    text-decoration: none;
    left: 50px;
    font-size: 30px;

    &.active {
      color: orange;
    }
    &.hover {
      text-decoration: underline;
    }
  `;

  return (
    <div>
      <CanvasAnimation>
        <Navbar></Navbar>

        <nav style={{ marginBottom: '50px', marginTop: '30px' }}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/Movies">Movies</StyledLink>
        </nav>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movies" element={<Movies />} />

            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </CanvasAnimation>
    </div>
  );
};
