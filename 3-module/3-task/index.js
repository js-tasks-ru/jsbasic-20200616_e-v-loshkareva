/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let result = str.split('-');
  for (let i in result) {
    if (i != 0) {
      result[i] = result[i][0].toUpperCase() + result[i].slice(1);
    }
  }
  result = result.join('');
  return result;
}
