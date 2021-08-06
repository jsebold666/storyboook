import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../styles/colors';
import { IconButtonContainer, IconButtonText, ContainerHoverObserver } from './IconButtonStyles';

const IconButton = props => {
  const { text, icon, color, renderAs, disabledHover, hoverColor, ...otherProps } = props;
  const IconComponent = icon;
  return (
    <ContainerHoverObserver>
      {({ isHovering }) => (
        <IconButtonContainer as={renderAs} {...otherProps}>
          <IconComponent
            isHovering={isHovering}
            color={color}
            disabledHover={disabledHover}
            hoverColor={hoverColor}
          />
          {text && (
            <IconButtonText
              isHovering={isHovering}
              color={color}
              disabledHover={props.disabledHover}
              hoverColor={hoverColor}>
              {text}
            </IconButtonText>
          )}
        </IconButtonContainer>
      )}
    </ContainerHoverObserver>
  );
};

IconButton.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.node.isRequired,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.string
};

IconButton.defaultProps = {
  color: colors['bluey-grey'],
  renderAs: 'div'
};

export default IconButton;
