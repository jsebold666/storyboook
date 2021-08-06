/* globals mount */
import React from 'react';
import BusinessSummary from '../../components/atoms/BusinessSummary';

describe('Expect <BusinessSummary>', () => {
  it('to render', () => {
    const props = {
      totalValue: 1,
      anualChange: -2,
      monthlyChange: 3,
      labels: ['PRÊMIO R$', 'Total Ano', 'Ano passado', 'Mês passado'],
      onChange: () => {}
    };

    const wrapper = mount(<BusinessSummary {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
