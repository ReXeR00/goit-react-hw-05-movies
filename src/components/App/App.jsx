import CanvasAnimation from '../CanvasAnimation/CanvasAnimation';

export const App = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <CanvasAnimation>
        <div
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <button> Fight</button>
        </div>
      </CanvasAnimation>
    </div>
  );
};
