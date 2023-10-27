const findLargestWord = (sentence) => {
   let words = sentence.split(' ');
   let largestWord = '';

   // Si solo hay una palabra, devolver esa palabra
   if (words.length === 1) {
      return words[0];
   }

   words.forEach((word) => {
      if (word.length >= largestWord.length) {
         largestWord = word;
      }
   });

   return largestWord;
};

module.exports = findLargestWord;
