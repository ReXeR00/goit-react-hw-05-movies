import CanvasAnimation from '../CanvasAnimation/CanvasAnimation';
import Header from 'components/Header/Header';

export const App = () => {
  return (
    <div>
      <CanvasAnimation>
        <div>
          <Header></Header>
        </div>
      </CanvasAnimation>
    </div>
  );
};
