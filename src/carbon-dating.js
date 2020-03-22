const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(string) {
  let sampleActivity = parseFloat(string);
  if (string == undefined || typeof(string) !== 'string') {
    return false;
  }

  if ((Number.isNaN(sampleActivity)) || (sampleActivity > 15) || (sampleActivity <= 0))
    return false;
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
};
