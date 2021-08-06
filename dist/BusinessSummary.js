import styled from 'styled-components';
import React from 'react';

var shared = {};

/* Primary Colors */
shared['periwinkle'] = '#9966ff';
shared['tealish'] = '#33cccc';
shared['degrade-start'] = '#ab64f5';
shared['degrade-end'] = '#8d85ee';
shared['pale-grey'] = '#f1f5f7';
shared['white'] = '#fff';
/* Secondary Colors */
shared['slate'] = '#4a5365';
shared['bluish-grey'] = '#859099';
shared['bluey-grey'] = '#acbec7';
shared['cloudy-blue'] = '#cfdae1';
shared['light-greyish'] = '#e0e7ec';
/* Terciary Colors */
shared['greenish-teal'] = '#33cc99';
shared['pale-orange'] = '#ff9966';
shared['periwinkle-blue'] = '#9999ff';
shared['bright-light-blue'] = '#33ccff';
shared['sun-yellow'] = '#ffcc33';
shared['salmon'] = '#ff6666';
shared['orchid'] = '#cc66cc';
shared['windows-blue'] = '#3399cc';
/* Default Colors */
shared['primary-color'] = shared['periwinkle'];
shared['secondary-color'] = shared['tealish'];
shared['grey'] = shared['bluish-grey'];
shared['dark-grey'] = shared['slate'];
shared['light-grey'] = shared['pale-grey'];
shared['success'] = shared['greenish-teal'];
shared['alert'] = shared['salmon'];
shared['warning'] = shared['sun-yellow'];
shared['background'] = shared['pale-grey'];
shared['medium-font-size'] = '14px';
shared['medium-line-height'] = '1.29';
shared['small-font-size'] = '12px';
shared['small-font-height'] = '1.5';
/* spaces */
shared['mobile-break-point'] = '1024px';

shared['sizes-mobile'] = '(sm: 1024) !default';
shared['sizes-desktop'] = '(md: 1280, lg: 1600px) !default';

//** Number of max columns in the grid
shared['grid-max-columns'] = '12 !default';
shared['grid-gutter-width'] = '32px !default'; // left + right

var UpIcon = function UpIcon(props) {
  return React.createElement(
    'svg',
    props,
    React.createElement('path', {
      d: 'M1.5 8.5l5.793-5.793a1 1 0 0 1 1.414 0L14.5 8.5m-6.5 7v-13',
      fill: 'none',
      stroke: '#3C9',
      strokeLinecap: 'round',
      strokeWidth: '3'
    })
  );
};

UpIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '17',
  viewBox: '0 0 16 17'
};

var DownIcon = function DownIcon(props) {
  return React.createElement(
    'svg',
    props,
    React.createElement('path', {
      d: 'M14.5 8.5l-5.793 5.793a1 1 0 0 1-1.414 0L1.5 8.5m6.5-7v13',
      fill: 'none',
      stroke: '#F66',
      strokeLinecap: 'round',
      strokeWidth: '3'
    })
  );
};

DownIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '17',
  viewBox: '0 0 16 17'
};


var fontSize = 16;

var Wrapper = styled.div.withConfig({
  displayName: 'BusinessSummary__Wrapper',
  componentId: 'sc-1ce3iu1-0'
})(['display:flex;justify-content:space-around;margin-top:20px;text-align:left;div{align-self:center;}.subtitle{font-size:12px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:', ';}.upper-title{font-size:12px;font-weight:500;font-style:normal;font-stretch:normal;line-height:2;letter-spacing:normal;color:', ';}.number{font-size:', 'px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.25;letter-spacing:normal;color:', ';}.up-or-down-icon{height:', 'px;padding-right:12px;}'], shared['bluish-grey'], shared['bluish-grey'], fontSize, shared['slate'], fontSize);

function BusinessSummary(props) {
  return React.createElement(
    Wrapper,
    null,
    React.createElement(SummaryItem, {
      uppperTitle: props.labels[0],
      value: props.totalValue,
      subtitle: props.labels[1],
      isCurrency: true
    }),
    React.createElement(SummaryItem, { uppperTitle: '', value: props.anualChange, subtitle: props.labels[2] }),
    React.createElement(SummaryItem, { uppperTitle: '', value: props.monthlyChange, subtitle: props.labels[3] })
  );
}

function SummaryItem(props) {
  var value = props.value;

  var formatedValue = props.isCurrency ? brCurrency(value) : brNumber(value) + ' %';
  var leftValueIcon = props.isCurrency ? null : renderIcon(value);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'span',
      { className: 'upper-title' },
      props.uppperTitle
    ),
    React.createElement('br', null),
    React.createElement(
      'span',
      { className: 'number' },
      leftValueIcon,
      React.createElement(
        'span',
        null,
        formatedValue
      )
    ),
    React.createElement('br', null),
    React.createElement(
      'span',
      { className: 'subtitle' },
      props.subtitle
    )
  );
}

function renderIcon(value) {
  var convertedValue = parseFloat(value);
  var icon = convertedValue >= 0 ? React.createElement(UpIcon, null) : React.createElement(DownIcon, null);
  return React.createElement(
    'span',
    { className: 'up-or-down-icon' },
    icon
  );
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

export default BusinessSummary;
//# sourceMappingURL=BusinessSummary.js.map
