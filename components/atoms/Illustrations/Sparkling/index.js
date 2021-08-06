import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Elastic, Power1, TimelineLite } from 'gsap/TweenMax';

class Sparkling extends PureComponent {
  componentDidMount() {
    if (!this.props.disableAnimation) {
      this.animateAll();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.disableAnimation !== this.props.disableAnimation &&
      !this.props.disableAnimation
    ) {
      this.animateAll();
    }
  }

  animateAll() {
    if (this.circleGroup && this.crossGroup) {
      const circles = this.circleGroup.querySelectorAll('path, circle');
      this.elasticAnimation(circles, this.props.delayToStart);

      const crosses = this.crossGroup.querySelectorAll('path');
      this.elasticAnimation(crosses, this.props.delayToStart);
    }
  }

  elasticAnimation(nodes, delayToStart = 0) {
    const sparkleTl = new TimelineLite({
      repeat: -1,
      yoyo: true,
      onComplete: function() {
        this.restart();
      }
    });

    for (const [nodeIndex, node] of nodes.entries()) {
      const delay = (nodeIndex % 10) * 0.5;
      sparkleTl
        .delay(delayToStart)
        .to(
          node,
          1,
          { scale: 0, transformOrigin: 'center center', ease: Power1.easeOut },
          `sparkle+=${delay}`
        )
        .to(
          node,
          1,
          { scale: 1, transformOrigin: 'center center', ease: Elastic.easeOut },
          `sparkleShow+=${delay}`
        );
    }

    sparkleTl.timeScale(2);
  }

  render() {
    const { disableAnimation, delayToStart, ...otherProps } = this.props;
    return (
      <Fragment>
        <g {...otherProps}>
          <g id="crossGroup" ref={node => (this.crossGroup = node)}>
            <path
              d="M135.897894,45.9403459 C135.897894,44.8399294 136.796714,43.9478655 137.89915,43.9478655 L139.947866,43.9478655 L139.947866,41.8991497 C139.947866,40.7938865 140.836004,39.8978936 141.940346,39.8978936 L140.269655,39.8978936 C141.370071,39.8978936 142.262135,40.7967136 142.262135,41.8991497 L142.262135,43.9478655 L144.310851,43.9478655 C145.416114,43.9478655 146.312107,44.836004 146.312107,45.9403459 L146.312107,44.2696548 C146.312107,45.3700714 145.413287,46.2621352 144.310851,46.2621352 L142.262135,46.2621352 L142.262135,48.310851 C142.262135,49.4161143 141.373997,50.3121072 140.269655,50.3121072 L141.940346,50.3121072 C140.839929,50.3121072 139.947866,49.4132871 139.947866,48.310851 L139.947866,46.2621352 L137.89915,46.2621352 C136.793886,46.2621352 135.897894,45.3739968 135.897894,44.2696548 L135.897894,45.9403459 Z"
              fill="#D8D8D8"
              transform="translate(141.105000, 45.105000) rotate(-259.000000) translate(-141.105000, -45.105000) "
            />
            <path
              d="M145.897894,114.940346 C145.897894,113.839929 146.796714,112.947866 147.89915,112.947866 L149.947866,112.947866 L149.947866,110.89915 C149.947866,109.793886 150.836004,108.897894 151.940346,108.897894 L150.269655,108.897894 C151.370071,108.897894 152.262135,109.796714 152.262135,110.89915 L152.262135,112.947866 L154.310851,112.947866 C155.416114,112.947866 156.312107,113.836004 156.312107,114.940346 L156.312107,113.269655 C156.312107,114.370071 155.413287,115.262135 154.310851,115.262135 L152.262135,115.262135 L152.262135,117.310851 C152.262135,118.416114 151.373997,119.312107 150.269655,119.312107 L151.940346,119.312107 C150.839929,119.312107 149.947866,118.413287 149.947866,117.310851 L149.947866,115.262135 L147.89915,115.262135 C146.793886,115.262135 145.897894,114.373997 145.897894,113.269655 L145.897894,114.940346 Z"
              fill="#9999FF"
              transform="translate(151.105000, 114.105000) rotate(-259.000000) translate(-151.105000, -114.105000) "
            />
            <path
              d="M23.9059334,128.948386 C23.9059334,127.847969 24.8047534,126.955905 25.9071895,126.955905 L27.9559053,126.955905 L27.9559053,124.90719 C27.9559053,123.801926 28.8440437,122.905933 29.9483857,122.905933 L28.2776946,122.905933 C29.3781111,122.905933 30.270175,123.804753 30.270175,124.90719 L30.270175,126.955905 L32.3188908,126.955905 C33.424154,126.955905 34.3201469,127.844044 34.3201469,128.948386 L34.3201469,127.277695 C34.3201469,128.378111 33.4213269,129.270175 32.3188908,129.270175 L30.270175,129.270175 L30.270175,131.318891 C30.270175,132.424154 29.3820366,133.320147 28.2776946,133.320147 L29.9483857,133.320147 C28.8479692,133.320147 27.9559053,132.421327 27.9559053,131.318891 L27.9559053,129.270175 L25.9071895,129.270175 C24.8019263,129.270175 23.9059334,128.382037 23.9059334,127.277695 L23.9059334,128.948386 Z"
              fill="#9999FF"
              transform="translate(29.113040, 128.113040) rotate(-300.000000) translate(-29.113040, -128.113040) "
            />
          </g>

          <g id="circleGroup" ref={node => (this.circleGroup = node)}>
            <circle fill="#FF9966" cx="120.5" cy="155.5" r="4.5" />
            <circle fill="#FFCC33" cx="69" cy="170" r="8" />
            <circle fill="#FF9966" cx="33" cy="44" r="7" />

            <path
              d="M179.956454,53.4476827 C175.830169,52.1707582 171.350318,53.6873066 168.848389,57.2080572 C166.346459,60.7288078 166.387988,65.4579306 168.951361,68.9342064 C171.514734,72.4104822 176.020528,73.8481342 180.123751,72.4989523 C184.226975,71.1497705 187.000137,67.3187236 186.999976,62.9996375 C187.009628,58.6128366 184.150332,54.7352505 179.956454,53.4476827 Z"
              fill="#42C1C7"
            />
          </g>

          <g id="staticGroup">
            <circle fill="#D8D8D8" cx="104.5" cy="5" r="4.5" />
            <circle fill="#F1F5F7" cx="5" cy="85" r="5" />
            <circle fill="#1ED1C9" cx="163" cy="138" r="2" />
            <circle fill="#1ED1C9" cx="70" cy="29" r="2" />
            <circle fill="#1ED1C9" cx="40" cy="90" r="2" />
          </g>
        </g>
      </Fragment>
    );
  }
}

Sparkling.defaultProps = {
  disableAnimation: false,
  delayToStart: 0
};

Sparkling.propTypes = {
  disableAnimation: PropTypes.bool,
  delayToStart: PropTypes.number
};

export default Sparkling;
