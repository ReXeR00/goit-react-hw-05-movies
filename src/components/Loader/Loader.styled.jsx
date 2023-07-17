import { styled, keyframes } from 'styled-components';

// Fonts & Typography
// Import fonts from Google Fonts if needed

// Colors
export const white = '#fff';
export const black = '#000';
export const palette = ['#4185F3', '#33A753', '#FABB04', '#E94234'];

// Loader Settings
export const dim = '20rem';
export const fadeStart = 0.1;
export const fadeEnd = 1;
export const speed = '4s';
export const easing = 'ease-out';
export const type = 'normal';
export const letterDim = '40px';
export const letterSize = '2em';
const letterEasing = 'ease-in'; // Add the appropriate value here
const letterSpeed = '2s';

// Animation keyframes
export const lightMe1 = keyframes`
  0% {
    opacity: ${fadeStart};
  }
  25% {
    opacity: ${fadeEnd};
  }
  100% {
    opacity: ${fadeEnd};
  }
`;

export const lightMe2 = keyframes`
  0% {
    opacity: ${fadeStart};
  }
  25% {
    opacity: ${fadeStart};
  }
  50% {
    opacity: ${fadeEnd};
  }
  100% {
    opacity: ${fadeEnd};
  }
`;

export const lightMe3 = keyframes`
  0% {
    opacity: ${fadeStart};
  }
  50% {
    opacity: ${fadeStart};
  }
  75% {
    opacity: ${fadeEnd};
  }
  100% {
    opacity: ${fadeEnd};
  }
`;

export const lightMe4 = keyframes`
  0% {
    opacity: ${fadeStart};
  }
  75% {
    opacity: ${fadeStart};
  }
  100% {
    opacity: ${fadeEnd};
  }
`;

export const slider = keyframes`
  0% {
    transform: translateY(0);
  }
  10.5% {
    transform: translateY(0);
  }
  // ... Add the rest of the keyframes here
`;

export const blink = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 0.75;
  }
`;

// Styled components
export const WrapLoader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${black};
`;

export const Loader = styled.div`
  position: relative;
  width: ${dim};
  height: ${dim};
  &::before {
    z-index: 1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${dim} / 2.3;
    height: ${dim} / 2.3;
    background: ${black};
    border-radius: 50%;
  }

  .box {
    position: absolute;
    width: ${dim} / 2;
    height: ${dim} / 2;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      opacity: ${fadeStart};
    }
    &:nth-child(1) {
      top: 0;
      left: 0;
      &::before {
        top: 50%;
        left: 50%;
        background: ${palette[0]};
        animation: ${lightMe1} ${speed} ${easing} infinite ${type};
      }
    }
    &:nth-child(2) {
      top: 0;
      right: 0;
      &::before {
        top: 50%;
        right: 50%;
        background: ${palette[1]};
        animation: ${lightMe2} ${speed} ${easing} infinite ${type};
      }
    }
    // ... Add the rest of the styles for .box and their respective animations
  }
`;

export const WrapText = styled.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${letterDim};
  height: ${letterDim};
  overflow: hidden;
`;

export const Text = styled.div`
  position: relative;
  width: ${letterDim};
  height: ${letterDim};
  line-height: ${letterDim};
  animation: ${slider} ${letterSpeed} ${letterEasing} infinite;

  span {
    display: block;
    width: ${letterDim};
    height: ${letterDim};
    line-height: ${letterDim};
    text-align: center;
    font-size: ${letterSize};
    color: ${white};
  }
`;

export const LoaderText = styled.div`
  color: ${white};
  transform: translateY(-2rem);
  letter-spacing: 6px;
  opacity: 0.2;
  animation: ${blink} ${speed} / 4 ${easing} infinite alternate;
`;
