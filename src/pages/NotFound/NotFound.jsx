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
      <Titleannouncement>Page Not Found :(</Titleannouncement>
      <Announcement>
        You can search for the page you want here or run to the homepage
      </Announcement>
      <Button href="">GO HOME</Button>
    </DivNotFound>
  );
};

export default NotFound;
