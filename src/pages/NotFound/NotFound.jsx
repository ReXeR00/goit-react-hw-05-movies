import {
  Titleannouncement,
  Announcement,
  Button,
  DivNotFound,
  Image404,
} from './NotFound.styled';
import error404 from './error404.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <DivNotFound>
      <Image404 src={error404} alt="Error 404 image"></Image404>
      <Titleannouncement>Sorry Page Not Found :(</Titleannouncement>
      <Announcement>Click button to run home.</Announcement>
      <Link to="/">
        <Button>GO HOME</Button>
      </Link>
    </DivNotFound>
  );
};

export default NotFound;
