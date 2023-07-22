import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  margin: 20px;
  border: solid gray 1px;
`;

export const MoviePhoto = styled.img``;
export const MovieTitle = styled.h1`
  color: white;
`;

export const MovieScore = styled.a`
  color: white;
`;

export const MovieOverviewTitle = styled.h2`
  color: white;
`;

export const MovieOverview = styled.a`
  color: white;
`;

export const MovieGenresTitle = styled.h2`
  color: white;
`;
export const MovieGenres = styled.ul`
  color: white;
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: white;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: red;

  &:hover {
    color: tomato;
  }
`;
