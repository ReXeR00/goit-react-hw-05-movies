import React from 'react';
import {
  WrapLoader,
  Loader,
  WrapText,
  Text,
  LoaderText,
} from './Loader.styled';

const LoaderComponent = () => {
  return (
    <WrapLoader>
      <Loader>
        {[...Array(4)].map((_, index) => (
          <div className="box" key={index}></div>
        ))}
      </Loader>
      <WrapText>
        <Text>
          {['L', 'O', 'A', 'D', 'I', 'N', 'G', '...'].map((val, index) => (
            <span key={index}>{val}</span>
          ))}
        </Text>
      </WrapText>
      <LoaderText>wait please</LoaderText>
    </WrapLoader>
  );
};

export default LoaderComponent;
