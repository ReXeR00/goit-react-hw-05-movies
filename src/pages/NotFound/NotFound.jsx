import {
  Titleannouncement,
  Announcement,
  Button,
  DivNotFound,
  Image404,
} from './NotFound.styled';
import error404 from './error404.png';

const NotFound = () => {
  return (
    <DivNotFound>
      <Image404 src={error404} alt="Error 404 image"></Image404>
      <Titleannouncement>Sorry Page Not Found :(</Titleannouncement>
      <Announcement>
      Click button to run home.
      </Announcement>
      <Button href="">GO HOME</Button>
    </DivNotFound>
  );
};

export default NotFound;
