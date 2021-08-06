import React from 'react';
import PropTypes from 'prop-types';
import { Power1, TimelineLite } from 'gsap/TweenMax';
import Sparkling from '../Sparkling';
class ClockSparkling extends React.PureComponent {
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
      <svg ref={node => (this.svg = node)} width="190px" height="180px" viewBox="0 0 180 180">
        <defs>
          <rect id="clockBackground" x="0" y="0" width="72" height="72" rx="36" />
          <filter
            x="-21.5%"
            y="-11.8%"
            width="143.1%"
            height="143.1%"
            filterUnits="objectBoundingBox"
            id="clockFilter">
            <feOffset dx="0" dy="7" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.159759964 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
        </defs>
        <g fill="none" transform="translate(59.000000, 48.000000)">
          <g id="radio">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#clockFilter)"
              xlinkHref="#clockBackground"
            />
            <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#clockBackground" />
          </g>
          <polyline
            stroke="#9966FF"
            strokeWidth="6.66666667"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="44.6666667 50 32 37.6666667 42.6666667 14"
          />
        </g>

        <Sparkling
          disableAnimation={this.props.disableSparklingAnimation}
          delayToStart={1.5}
          transform="translate(-5, 0)"
        />
      </svg>
    );
  }
}

ClockSparkling.defaultProps = {
  disableSparklingAnimation: false,
  disableFadeAnimation: false
};

ClockSparkling.propTypes = {
  disableSparklingAnimation: PropTypes.bool,
  disableFadeAnimation: PropTypes.bool
};

export default ClockSparkling;
