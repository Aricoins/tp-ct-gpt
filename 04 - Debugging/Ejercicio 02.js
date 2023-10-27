const getUniqueElements = (arr) => {
   let uniqueElements = [];

   if (!Array.isArray(arr)) {
      // Verificar si el argumento no es un array
      console.error('Error: Debes proporcionar un array como argumento.');
      return uniqueElements;
   }

   arr.forEach((element) => {
      if (!uniqueElements.includes(element)) {
         uniqueElements.push(element);
      }
   });

   return uniqueElements;
};

module.exports = getUniqueElements;
