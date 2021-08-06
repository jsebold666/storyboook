import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import shared from '../consts/shared';

import UpIcon from '../../static/images/arrow-percent-up.svg';
import DownIcon from '../../static/images/arrow-percent-down.svg';

const fontSize = 16;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  text-align: left;

  div {
    align-self: center;
  }

  .subtitle {
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: ${shared['bluish-grey']};
  }

  .upper-title {
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 2;
    letter-spacing: normal;
    color: ${shared['bluish-grey']};
  }

  .number {
    font-size: ${fontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: ${shared['slate']};
  }

  .up-or-down-icon {
    height: ${fontSize}px;
    padding-right: 12px;
  }
`;

export default function BusinessSummary(props) {
  return (
    <Wrapper>
      <SummaryItem
        uppperTitle={props.labels[0]}
        value={props.totalValue}
        subtitle={props.labels[1]}
        isCurrency
      />
      <SummaryItem uppperTitle="" value={props.anualChange} subtitle={props.labels[2]} />
      <SummaryItem uppperTitle="" value={props.monthlyChange} subtitle={props.labels[3]} />
    </Wrapper>
  );
}

function SummaryItem(props) {
  const { value } = props;
  const formatedValue = props.isCurrency ? brCurrency(value) : `${brNumber(value)} %`;
  const leftValueIcon = props.isCurrency ? null : renderIcon(value);
  return (
    <div>
      <span className="upper-title">{props.uppperTitle}</span>
      <br />
      <span className="number">
        {leftValueIcon}
        <span>{formatedValue}</span>
      </span>
      <br />
      <span className="subtitle">{props.subtitle}</span>
    </div>
  );
}

function renderIcon(value) {
  const convertedValue = parseFloat(value);
  const icon = convertedValue >= 0 ? <UpIcon /> : <DownIcon />;
  return <span className="up-or-down-icon">{icon}</span>;
}

function brCurrency(value) {
  if (value >= 1e9) {
    return brNumber(value / 1e9) + ' bi';
  } else if (value >= 1e6) {
    return brNumber(value / 1e6) + ' mi';
  } else if (value >= 1e3) {
    return brNumber(value / 1e3) + ' mil';
  }
  return value;
}

function brNumber(value) {
  if (typeof value === 'number') {
    return value.toFixed(2).replace('.', ',');
  } else if (typeof value === 'string') {
    return brNumber(parseFloat(value));
  }
  return 'N/A';
}
BusinessSummary.propTypes = {
  totalValue: PropTypes.number.isRequired,
  anualChange: PropTypes.number.isRequired,
  monthlyChange: PropTypes.number.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired
};
