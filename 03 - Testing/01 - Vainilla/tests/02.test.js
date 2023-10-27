const obtenerPosteo = require('../Ejercicio 02');

describe('02 - AsyncRequest', () => {
  test('Si la función recibe un parámetro que no sea un número del 1 al 100, entonces debe devolver un status 404 y el valor null', async () => {
    const resultado = await obtenerPosteo('no es un número');
    expect(resultado.status).toBe(404);
    expect(resultado.data).toBe(null);
  });

  test('Si la función recibe un número del 1 al 100, entonces debe devolver un status 200 y un objeto con las propiedades userID, id, title, body', async () => {
    const resultado = await obtenerPosteo(1);
    expect(resultado.status).toBe(200);
    expect(resultado.data).toHaveProperty('userId'); // Cambiado a 'userId'
    expect(resultado.data).toHaveProperty('id');
    expect(resultado.data).toHaveProperty('title');
    expect(resultado.data).toHaveProperty('body');
  });

  // Puedes agregar más tests según tus necesidades
});
