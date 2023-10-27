const esPalindromo = require('../Ejercicio 01');

describe('01 - JavaScript', () => {
  test('La función debe devolver true si el string ingresado es un palíndromo', () => {
    expect(esPalindromo('Anita lava la tina')).toBe(true);
  });

  test('La función debe devolver false si el string ingresado no es un palíndromo', () => {
    expect(esPalindromo('Hola mundo')).toBe(false);
  });

  test('Si el string ingresado está vacío debe devolver true', () => {
    expect(esPalindromo('')).toBe(true);
  });

  test('Si el string es palíndromo, aunque esté escrito todo con mayúsculas, debe devolver true', () => {
    expect(esPalindromo('RECONOCER')).toBe(true);
  });

  test('Si el valor ingresado a la función no es de tipo string, debe devolver un error que diga "Se esperaba una cadena de texto como argumento"', () => {
    expect(() => esPalindromo(123)).toThrowError('Se esperaba una cadena de texto como argumento');
  });
});
