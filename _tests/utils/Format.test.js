import { formatDate, formatRange, formatCurrency } from '../../components/utils/Format';

describe('Utils: Format', () => {
  it('should test formatDate()', () => {
    const formatedDate = formatDate('2019-08-06T03:00:00');
    const nullDate = formatDate(null);
    const undefinedDate = formatDate(undefined);

    expect(formatedDate).toBe('06/08/19');
    expect(nullDate).toBe(null);
    expect(undefinedDate).toBe(null);
  });

  it('should test formatRange', () => {
    const startDate = '2017-03-20';
    const endDate = '2018-03-30';
    const formatedDate = formatRange(startDate, endDate);

    expect(formatedDate).toBe('20 mar 2017 - 30 mar 2018');
  });

  it('should test formatCurrency()', () => {
    const formatedCurrency = formatCurrency(1500);
    const nullCurrency = formatCurrency(null);
    const undefinedCurrency = formatCurrency(undefined);

    expect(formatedCurrency).toBe('1,500.00');
    expect(nullCurrency).toBe(null);
    expect(undefinedCurrency).toBe(null);
  });
});
