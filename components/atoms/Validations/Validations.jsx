export default class Validations {
  static notWhitespaces(value) {
    if (!value || value.replace(/\s+/, '').length == 0) return 'Não pode estar em branco';
  }

  static required(value) {
    if (value === undefined || value === null || Validations.notWhitespaces(value))
      return 'Campo obrigatório';
  }
}
