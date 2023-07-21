import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  color: pink;

  :hover {
    color: orangered;
  }
`;

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <AiOutlineArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;
