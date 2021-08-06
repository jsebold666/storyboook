import React from 'react';
import { Spinner, G, Circle1, Circle2, Circle3 } from './LoadingJuntoStyles';

const LoadingJunto = () => {
  return (
    <Spinner>
      <svg id="animatedLogo" width="130px" height="130px" viewBox="0 0 130 130">
        <G>
          <Circle1 />
          <Circle2 />
          <Circle3 />
        </G>
      </svg>
    </Spinner>
  );
};

export default LoadingJunto;
