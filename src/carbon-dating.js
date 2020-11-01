const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity === undefined || typeof sampleActivity !== "string" || sampleActivity <= 9000) {
    return false;
  } else if (Number(sampleActivity) !== 'Number') {
    return false;
  }
  else {
    return Math.ceil(Number(Math.log2(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)));
  }
};