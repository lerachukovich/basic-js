const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
     throw new Error('It is not an array!');
  }

  let result = [];
  let arrayLength = arr.length;
  let i = 0;
  if ((arr[i] === '--discard-prev' ) || (arr[i] === '--double-prev')) {
    i++;
  }
  if ((arr[arrayLength-1] === '--discard-next') || (arr[arrayLength-1] === '--double-next')) {
    arrayLength--;
  }

  while ( i < arrayLength) {
    switch (arr[i])
    {
      case '--discard-next':
        i+=2;
        if ((arr[i] === '--discard-prev') || (arr[i] === '--double-prev')) {
          i++;
        }
        break;

      case '--discard-prev':
        result.splice(result.length - 1,1);
        i++;
        break;

      case '--double-next':
        i++;
        result.push(arr[i]);
        break;

      case '--double-prev':
        result.push(arr[i-1]);
        i++;
        break;

      default:
        result.push(arr[i]);
        i++;
        break;
    }
  }
  return result;
};
