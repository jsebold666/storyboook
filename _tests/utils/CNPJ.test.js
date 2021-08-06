import { is14DigitNumber } from '../../components/utils/CNPJ';
import { isValid } from '../../components/utils/CNPJ';
import { strip } from '../../components/utils/CNPJ';

describe('CNPJ', () => {
  it('should test is14DigitNumber', () => {
    expect(is14DigitNumber('08889601000109')).toBe(true);
    expect(is14DigitNumber('088')).toBe(false);
    expect(is14DigitNumber('08889601000109999')).toBe(false);
  });

  it('should test isValid', () => {
    expect(isValid('08889601000109')).toBe(true);
    expect(isValid('00000000000000')).toBe(false);
    expect(isValid('!@#$')).toBe(false);
  });

  it('should test strip', () => {
    expect(strip('08889601000109      ')).toBe('08889601000109');
    expect(strip('   08889601000109')).toBe('08889601000109');
    expect(strip('   08889601000109      ')).toBe('08889601000109');
  });
});
