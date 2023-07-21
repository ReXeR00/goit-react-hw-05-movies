import { styled } from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
`;

export const ListElement = styled.li`
  font-size: 14px;
  padding-bottom: 20px;
  a {
    color: pink;
    text-decoration: none;
  }

  &.active {
    color: pink;
  }
`;
