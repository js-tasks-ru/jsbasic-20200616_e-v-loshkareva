/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
 function ucFirst(str) {
   let result;
    if (str==undefined || str == '') {
     result = str;
   }
   else {

    result = (str[0].toUpperCase ()+str.slice(1));
   }
   return result;
 }
