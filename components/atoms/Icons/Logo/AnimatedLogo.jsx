import React, { PureComponent } from 'react';
import { Elastic, Power1, TimelineLite } from 'gsap/TweenMax';
import { default as Logo } from './DefaultLogo';

class AnimatedLogo extends PureComponent {
  componentDidMount() {
    if (this.logo) {
      this.animate();
    }
  }

  animate() {
    const letters = this.logo.querySelectorAll('path#J, path#U, path#N, path#T, path#O');
    const seguros = this.logo.querySelectorAll('g#seguros');
    const circles = this.logo.querySelectorAll('g#circles');

    const timeline = new TimelineLite();
    timeline.delay(2);

    for (const [letterIndex, letter] of letters.entries()) {
      const delay = (letterIndex % 10) * 0.25;
      timeline
        .from(letter, 1.5, { opacity: 0, y: 100, ease: Power1.easeOut }, `lettersStart+=${delay}`)
        .to(letter, 1.5, { opacity: 1, y: 0, ease: Power1.easeOut }, `lettersFinish+=${delay}`);
    }

    timeline
      .add('seguros', 2)
      .add('circles', 2.5)
      .from(seguros, 1, { opacity: 0, x: -50 }, 'seguros')
      .to(seguros, 1, { opacity: 1, x: 0 }, 'seguros')
      .from(
        circles,
        2,
        { scale: 0, transformOrigin: 'center center', ease: Elastic.easeOut },
        'circles'
      )
      .to(
        circles,
        2,
        { scale: 1, transformOrigin: 'center center', ease: Elastic.easeOut },
        'circles'
      );

    timeline.timeScale(2);
  }

  render() {
    return <Logo innerRef={node => (this.logo = node)} />;
  }
}

export default AnimatedLogo;
