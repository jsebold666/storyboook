import React from 'react';
import PropTypes from 'prop-types';
import { Power1, TimelineLite } from 'gsap/TweenMax';
import Sparkling from '../Sparkling';
class CheckSparkling extends React.PureComponent {
  componentDidMount() {
    if (!this.props.disableFadeAnimation) {
      this.fadeInAnimation(this.svg);
    }
  }

  fadeInAnimation(node) {
    const sparkleTl = new TimelineLite();
    sparkleTl
      .from(node, 1, { opacity: '0', ease: Power1.easeOut }, `fadeIn`)
      .to(node, 1, { opacity: '1', ease: Power1.easeOut }, `fadeInFinish`);
  }

  render() {
    return (
      <svg ref={node => (this.svg = node)} width="190px" height="180px" viewBox="0 0 190 180">
        <defs>
          <rect id="checkCircle" x="59" y="45" width="72" height="72" rx="36" />
          <filter
            x="-20.8%"
            y="-12.5%"
            width="141.7%"
            height="141.7%"
            filterUnits="objectBoundingBox"
            id="checkFilter">
            <feOffset dx="0" dy="6" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.159759964 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
        </defs>
        <g id="checkGroup" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="radio">
            <use fill="black" fillOpacity="1" filter="url(#checkFilter)" xlinkHref="#checkCircle" />
            <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#checkCircle" />
          </g>

          <path
            d="M108.214519,69.3788716 C109.4059,68.1874912 111.337509,68.1874912 112.528889,69.3788716 C113.720269,70.5702519 113.720269,72.5018611 112.528889,73.6932415 L93.4238475,92.798283 C92.2324672,93.9896633 90.300858,93.9896633 89.1094776,92.798283 L79.957317,83.6461223 C78.7659367,82.454742 78.7659367,80.5231328 79.957317,79.3317524 C81.1486974,78.1403721 83.0803066,78.1403721 84.2716869,79.3317524 L91.2666626,86.3267281 L108.214519,69.3788716 Z"
            fill="#33CC99"
            fillRule="nonzero"
          />
        </g>

        <Sparkling disableAnimation={this.props.disableSparklingAnimation} delayToStart={1.5} />
      </svg>
    );
  }
}

CheckSparkling.defaultProps = {
  disableSparklingAnimation: false,
  disableFadeAnimation: false
};

CheckSparkling.propTypes = {
  disableSparklingAnimation: PropTypes.bool,
  disableFadeAnimation: PropTypes.bool
};

export default CheckSparkling;
