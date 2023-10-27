function buscarPalabra(texto, palabra) {
   if (typeof texto !== 'string' || typeof palabra !== 'string' || palabra === '') {
     return [];
   }
 
   const palabrasEnTexto = texto.split(' ');
   const indices = [];
 
   palabrasEnTexto.forEach((palabraEnTexto, indice) => {
     const palabraNormalizada = palabraEnTexto.toLowerCase();
     const palabraBuscadaNormalizada = palabra.toLowerCase();
 
     if (palabraNormalizada.includes(palabraBuscadaNormalizada)) {
       indices.push(indice);
     }
   });
 
   return indices;
 }
 
 module.exports = buscarPalabra;
 