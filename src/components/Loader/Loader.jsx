import React from 'react';
import { WrapLoader, LetterSpan } from './Loader.styled';

const Loader = () => {
  return (
    <WrapLoader>
      <h1>
        <LetterSpan delay={1.2}>L</LetterSpan>
        <LetterSpan delay={1.3}>o</LetterSpan>
        <LetterSpan delay={1.4}>a</LetterSpan>
        <LetterSpan delay={1.5}>d</LetterSpan>
        <LetterSpan delay={1.6}>i</LetterSpan>
        <LetterSpan delay={1.7}>n</LetterSpan>
        <LetterSpan delay={1.8}>g</LetterSpan>
        <LetterSpan delay={1.9}>.</LetterSpan>
        <LetterSpan delay={2}>.</LetterSpan>
        <LetterSpan delay={2.1}>.</LetterSpan>
      </h1>
    </WrapLoader>
  );
};

export default Loader;
