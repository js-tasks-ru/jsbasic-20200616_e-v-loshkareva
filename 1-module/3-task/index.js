/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
 function ucFirst(str) {
   let result;
    if (str==undefined || str == '') {
     result = '';
   }
   else {

    result = (str[0].toUpperCase ()+str.substr(1,));
   }
   return result;
 }
 
