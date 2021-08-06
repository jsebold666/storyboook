import CpfCnpj from 'cpf_cnpj';

export const is14DigitNumber = cnpj => {
  return !!cnpj && cnpj.replace(/[^0-9]/g, '').length === 14;
};

export const isValid = cnpj => {
  return CpfCnpj.CNPJ.isValid(cnpj);
};

export const strip = cnpj => {
  return CpfCnpj.CNPJ.strip(cnpj);
};

export const isCNPJFormat = cnpj => {
  return cnpj && cnpj.match(/^[\d\.\/-]+$/);
};
