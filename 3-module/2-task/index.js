/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
 function filterRange(arr, a, b) {
 let resultArr=[];
 resultArr= arr.filter(item => item>=a && item<=b);
 return resultArr;
 //console.log(arr.filter(item => item>=a && item<=b));
 }
