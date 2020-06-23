/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
 function checkSpam(str) {
   let arr=['1xBet','XXX'];
   let result;
   for ( let i=0; arr.length>i; i++) {
      result= (str.toLowerCase().includes(arr[i].toLowerCase()));
   if (result==true) break;
   }
  return result;

 }
