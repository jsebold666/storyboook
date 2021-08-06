import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../../styles/colors';
import { StyledSvg } from '../IconStyles';

const IconBase = props => {
  const {
    width,
    height,
    viewBox,
    color,
    hoverColor,
    disabledHover,
    children,
    ...otherProps
  } = props;
  return (
    <StyledSvg
      width={`${width}px`}
      height={`${height}px`}
      viewBox={viewBox ? viewBox : `0 0 ${width} ${height}`}
      hoverColor={hoverColor}
      disabledHover={disabledHover}
      {...otherProps}>
      {children}
    </StyledSvg>
  );
};

IconBase.propTypes = {
  // svg props
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,

  color: PropTypes.string,
  hoverColor: PropTypes.string,
  disabledHover: PropTypes.bool
};

IconBase.defaultProps = {
  width: 32,
  height: 32,
  color: colors['bluey-grey'],
  hoverColor: colors.periwinkle,
  disabledHover: false
};

export default IconBase;
