import { keyframes, styled } from 'styled-components';

export const dropAnimation = keyframes`
  10% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
    top: 3.78em;
    transform: rotateX(-360deg);
  }
  80% {
    opacity: 1;
    top: 3.78em;
    transform: rotateX(-360deg);
  }
  90% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    top: 6.94em;
  }
`;

export const WrapLoader = styled.div`
  text-align: center;

  font-family: 'Arial Narrow', sans-serif;
  font-weight: 100;
  font-size: 1.3em;
  color: #a3e1f0;
`;

export const LetterSpan = styled.span`
  position: relative;
  top: 0.63em;
  display: inline-block;
  text-transform: uppercase;
  opacity: 0;
  transform: rotateX(-90deg);

  animation: ${dropAnimation} 1.2s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
`;
