/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
// Add your code here

function getMinMax(str) {
  let result = str;
  let i = 0;
  while (i !== -1) {
    i = result.indexOf(',');
    if (i !== -1) result = result.slice(0, i) + ' ' + result.slice(i + 1, result.length);
  }
  result = result.split(' ');
  let min, max;
  result.forEach(function(val) {

    if (!isNaN(Number(val)) && val != '') {
      if (min == undefined) min = Number(val);
      if (max == undefined) max = Number(val);
      min = Math.min(min, Number(val));
      max = Math.max(max, Number(val));
    }
  });

  result = {
    min: min,
    max: max,
  };
  return result;
}
