import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../../styles/colors';
import { StyledSvg } from '../IconStyles';

const PdfIcon = props => {
  const { color, hoverColor, disabledHover, children, ...otherProps } = props;
  return (
    <StyledSvg
      width="35px"
      height="39px"
      viewBox="0 0 35 39"
      hoverColor={hoverColor}
      disabledHover={disabledHover}
      {...otherProps}>
      <path
        fill="none"
        stroke={props.color}
        strokeWidth="1.7"
        d="M3.558 1h19.61a2.54 2.54 0 0 1 2.166 1.251l6.821 7.048A2.662 2.662 0 0 1 33.4 11.57v23.786c0 1.46-1.145 2.643-2.558 2.643H3.558C2.145 38 1 36.817 1 35.357V3.643C1 2.183 2.145 1 3.558 1z"
      />
      <text
        fill={props.color}
        fontFamily="Rubik-Medium, Rubik"
        fontSize="13"
        fontWeight="500"
        letterSpacing="-.26"
        transform="translate(1 1)">
        <tspan x="5.722" y="26.125">
          pdf
        </tspan>
      </text>
    </StyledSvg>
  );
};

PdfIcon.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  disabledHover: PropTypes.bool
};

PdfIcon.defaultProps = {
  color: colors['bluey-grey'],
  hoverColor: colors.periwinkle,
  disabledHover: false
};

export default PdfIcon;
