import { styled } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;

  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  color: pink;
  cursor: pointer;

  background: transparent;
  border: none;

  :hover {
    color: orangered;
  }
`;
