module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNumber = Math.pow(2, disksNumber) - 1;
  let secondsNumber = turnsNumber / (turnsSpeed / 3600);
  return {
    turns: turnsNumber,
    seconds: secondsNumber
  }
}
