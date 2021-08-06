import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../../styles/colors';
import IconBase from '../IconBase';
import { StyledSvgBorder } from '../IconStyles';

const IconBorderedBase = props => {
  const { color, hoverColor, disabledHover, children, ...otherProps } = props;
  return (
    <IconBase
      width={35}
      height={39}
      hoverColor={hoverColor}
      disabledHover={disabledHover}
      {...otherProps}>
      <StyledSvgBorder
        color={props.color}
        d="M29.8421035,0 L2.08981722,0.035502639 C0.953647782,0 -0.00162915465,1.37703984 2.08605832e-06,2.30835978 L2.0860602e-06,34.3571429 C2.0860602e-06,35.8167526 1.14521042,37 2.55789649,37 L29.8421035,37 C31.2547895,37 32.3999979,35.8167526 32.3999979,34.3571429 L32.3999979,2.64285714 C32.3999979,1.18324745 31.2547895,0 29.8421035,0 Z"
      />
      {children}
    </IconBase>
  );
};

IconBorderedBase.propTypes = {
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  disabledHover: PropTypes.bool
};

IconBorderedBase.defaultProps = {
  color: colors['bluey-grey'],
  hoverColor: colors.periwinkle,
  disabledHover: false
};

export default IconBorderedBase;
