/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
 function checkSpam(str) {
   let arr=['1xBet','XXX'];
   let result = false;
   for ( let i=0; arr.length>i; i++) {
      if (result!=true) result= (str.toLowerCase().includes(arr[i].toLowerCase()));
      }
  return result;

 }
