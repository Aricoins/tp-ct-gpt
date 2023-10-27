// Ejercicio 02.js

const axios = require('axios');

async function obtenerPosteo(postId) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (err) {
    if (err.response) {
      // Si hay una respuesta, significa que el servidor respondió con un código de estado.
      console.error(err.response.status, err.response.data);
      return {
        status: err.response.status,
        data: null,
      };
    } else {
      // Si no hay respuesta, se maneja el error de otra manera.
      console.error(err.message);
      return {
        status: null,
        data: null,
      };
    }
  }
}

module.exports = obtenerPosteo;
