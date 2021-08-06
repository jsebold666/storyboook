import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import styled from 'styled-components';
import shared from '../consts/shared';

const Nav = styled.div`
  .row.row-center {
    align-items: center;
    justify-content: center;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .container {
    box-sizing: border-box;
    width: 100%;

    @media (min-width: ${shared['mobile-break-point']}) {
      max-width: 768px;
      margin: 24px auto;
    }
  }

  .flex1 {
    flex: 1 1;
  }

  .justify-between {
    justify-content: space-between !important;
  }

  .navbar__container {
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    background-image: linear-gradient(
      to right,
      ${shared['degrade-start']},
      ${shared['degrade-end']}
    );
    color: white;
    padding: 16px 0;
    align-items: center;
    display: flex;

    & .container {
      margin: 0 auto;
      padding: 0 16px;

      .navbar__icon-button {
        color: ${shared['white']};

        &:hover {
          opacity: 0.7;
        }
      }

      @media (min-width: ${shared['mobile-break-point']}) {
        padding: 0;
      }
    }

    &.transparent {
      background-image: none;
    }

    & .navbar__icon {
      &-alert {
        margin-left: 32px;
      }

      &-user {
        margin-left: 16px;
      }

      &-return {
        display: flex;
        justify-content: center;
        margin-right: 24px;
      }

      &-circle {
        width: 32px;
        height: 32px;
        opacity: 0.5;
        border: solid 4px #ffffff;
        margin-right: 16px;
        border-radius: 50%;
      }
    }

    @media (min-width: ${shared['mobile-break-point']}) {
      height: 88px;
      padding: 10px 0;
    }
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenIcon: false
    };

    this.onCloseClick = this.onCloseClick.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  onCloseClick() {
    if (this.props.onClose) {
      this.props.onClose();
    } else {
      this.props.history.push('/');
    }
  }

  previousPage() {
    this.props.onGoBackClick && this.props.onGoBackClick();
  }

  renderCloseIconIfNecessary(shouldHide) {
    return shouldHide ? <div /> : this.renderButton(<CloseIcon />, this.onCloseClick);
  }

  renderBackButtonIfNecessary(shouldRender) {
    return !shouldRender ? (
      <div style={{ width: '48px' }} />
    ) : (
      this.renderButton(<BackIcon />, this.previousPage)
    );
  }

  renderButton(icon, action) {
    return (
      <IconButton className="navbar__icon-button" onClick={action}>
        {icon}
      </IconButton>
    );
  }

  render() {
    const { isTransparent, hideCloseIcon, showBackButton, navText } = this.props;
    return (
      <Nav>
        <header className={`navbar__container ${isTransparent ? 'transparent' : ''}`}>
          <div className="container">
            <div className="grid gutters">
              <div className="row row-center flex1 justify-between">
                {this.renderBackButtonIfNecessary(showBackButton)}
                <span className="navbar__text">{navText}</span>
                {this.renderCloseIconIfNecessary(hideCloseIcon)}
              </div>
            </div>
          </div>
        </header>
      </Nav>
    );
  }
}

Navbar.defaultProps = {
  isTransparent: false,
  hideCloseIcon: false,
  showBackButton: false
};

Navbar.propTypes = {
  isTransparent: PropTypes.bool,
  navText: PropTypes.string,
  onGoBackClick: PropTypes.func,
  hideCloseIcon: PropTypes.bool,
  showBackButton: PropTypes.bool
};

export default Navbar;
