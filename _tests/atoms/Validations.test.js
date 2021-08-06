/* globals mount */
import Validations from '../../components/atoms/Validations';

describe('Expect <Validations>', () => {
  it('to render', () => {
    expect(Validations.required('')).toBe('Campo obrigatório');
    expect(Validations.required(null)).toBe('Campo obrigatório');
    expect(Validations.required(undefined)).toBe('Campo obrigatório');
    expect(Validations.required('123')).toBe(undefined);
  });
});
