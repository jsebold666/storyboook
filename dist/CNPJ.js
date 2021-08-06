import CpfCnpj from 'cpf_cnpj';

var is14DigitNumber = function is14DigitNumber(cnpj) {
  return !!cnpj && cnpj.replace(/[^0-9]/g, '').length === 14;
};

var isValid = function isValid(cnpj) {
  return CpfCnpj.CNPJ.isValid(cnpj);
};

var strip = function strip(cnpj) {
  return CpfCnpj.CNPJ.strip(cnpj);
};

var isCNPJFormat = function isCNPJFormat(cnpj) {
  return cnpj && cnpj.match(/^[\d\.\/-]+$/);
};

export { is14DigitNumber, isValid, strip, isCNPJFormat };
//# sourceMappingURL=CNPJ.js.map
