import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Button } from './BackLink.styled';

const BackLink = () => {
  const location = useLocation();
  return (
    <Link to={location.state?.from ?? '/'}>
      <Button type="button">
        <AiOutlineArrowLeft size="24" /> GO BACK
      </Button>
    </Link>
  );
};

export default BackLink;
