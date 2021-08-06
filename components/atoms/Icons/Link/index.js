import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../../styles/colors';
import IconBorderedBase from '../IconBorderedBase';

const LinkIcon = props => {
  return (
    <IconBorderedBase {...props}>
      <g
        transform="translate(7.903904, 10.433333)"
        strokeWidth="2"
        stroke={props.color}
        fill="none">
        <path d="M8.30207708,10.7147322 C9.7515952,12.2445337 12.1021902,12.2445337 13.5517083,10.7147322 L16.8321479,7.25162182 C18.282594,5.72182025 18.282594,3.24201386 16.8321479,1.71221229 C15.3835578,0.182410719 13.0329627,0.182410719 11.5825166,1.71221229 L9.6142529,3.78949086" />
        <g transform="translate(0.000000, 5.648611)">
          <path d="M9.77057057,1.71211283 C8.32094754,0.182443871 5.97018242,0.182443871 4.52148744,1.71211283 L1.23988244,5.17492297 C-0.209740592,6.70459193 -0.209740592,9.18418335 1.23988244,10.7148316 C2.68950546,12.2445006 5.03934253,12.2445006 6.48989362,10.7148316 L8.45829979,8.63675381" />
        </g>
      </g>
    </IconBorderedBase>
  );
};

LinkIcon.propTypes = {
  color: PropTypes.string
};

LinkIcon.defaultProps = {
  color: colors['bluey-grey']
};

export default LinkIcon;
