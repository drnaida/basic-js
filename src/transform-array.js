module.exports = function transform(arr) {
  let result = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--discard-next') {
        i++;
      } else if (arr[i] == '--discard-prev') {
        result.pop();
      } else if (arr[i] == '--double-next') {
        result.push(arr[i + 1])
      } else if (arr[i] == '--double-prev') {
         result.push(arr[i - 1]);
      } else {
        result.push(arr[i]);
      }
    }
  } else {
    throw new Error;
  }
  return result.filter(e => e !== undefined);
};
