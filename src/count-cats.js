const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
      const flattenedArray =  matrix.flat();
      const catsCount =  flattenedArray.filter(item => item === '^^').length;
      return catsCount;
};