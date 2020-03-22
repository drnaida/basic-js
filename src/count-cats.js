module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(item => {
    item.forEach(i => {
      if (i == '^^') {
        count++;
      }
    });
  });
  return count;
};
