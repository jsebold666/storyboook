import styled from 'styled-components';

export const Spinner = styled.div`
  position: relative;
  position: relative;
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 1.5s linear 0.8s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    33.33%,
    66.64% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const G = styled.g`
  transform: translate(15px, 35px) scale(3.3);
`;

export const Circle1 = styled.path.attrs({
  d:
    'M15.4314607,0 C13.3240442,8.07461464e-05 11.5465252,1.5918564 11.2853933,3.71282051 C11.2629237,3.88834268 11.2507674,4.06506499 11.2489888,4.24205128 C11.2608795,6.51553536 13.0394117,8.37446967 15.2795943,8.45486854 C17.5197769,8.53526741 19.4234089,6.80848386 19.5937079,4.54153846 C19.5937079,4.44307692 19.5937079,4.34051282 19.5937079,4.24205128 C19.5937348,1.90721848 17.733474,0.0112902938 15.4314607,1.16601885e-14 Z',
  fill: '#7769AF'
})`
  transform: translateY(-10px);
  animation: moveFirst 1.5s ease-in-out 0.3s infinite;

  @keyframes moveFirst {
    0% {
      transform: translateY(0px);
    }

    33.33%,
    66.64% {
      transform: translateY(-7px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export const Circle2 = styled.path.attrs({
  d:
    'M19.5977528,4.54153846 C16.8371258,3.67500483 13.8399505,4.70414962 12.1660734,7.09336589 C10.4921963,9.48258216 10.5199803,12.6918118 12.2349656,15.0508471 C13.9499508,17.4098823 16.9644823,18.3854872 19.7096807,17.469919 C22.4548791,16.5543508 24.3102202,13.9545644 24.3101124,11.0235897 C24.3165699,8.04666313 22.4036023,5.41529473 19.5977528,4.54153846 Z',
  fill: '#42C1C7'
})`
  transform: translate(10px, 10px);
  animation: moveSecond 1.5s ease-in-out 0.3s infinite;

  @keyframes moveSecond {
    0% {
      transform: translate(0px, 0px);
    }

    33.33%,
    66.64% {
      transform: translate(7px, 3px);
    }

    100% {
      transform: translate(0px, 0px);
    }
  }
`;

export const Circle3 = styled.path.attrs({
  d:
    'M17.494382,7.92615385 C17.2076081,6.60170421 16.4466037,5.43224223 15.3586517,4.64410256 C14.446899,3.97821929 13.3513965,3.62076984 12.2278652,3.6225641 C11.9131949,3.62384542 11.5992208,3.65267033 11.2894382,3.70871795 C8.59328287,4.18645792 6.67867567,6.63851258 6.83794232,9.40978876 C6.99720896,12.1810649 9.17973727,14.390899 11.9123596,14.5476923 C12.0175281,14.5476923 12.1186517,14.5476923 12.2278652,14.5476923 C13.8596505,14.5452625 15.4025683,13.7934588 16.4242361,12.5029645 C17.445904,11.2124702 17.8363997,9.5221305 17.4862921,7.90564103 L17.494382,7.92615385 Z',
  fill: '#9B95C9'
})`
  transform: translateX(-10px);
  animation: moveThird 1.5s ease-in-out 0.3s infinite;

  @keyframes moveThird {
    0% {
      transform: translateX(0px);
    }

    33.33%,
    66.64% {
      transform: translateX(-7px);
    }

    100% {
      transform: translateX(0px);
    }
  }
`;
