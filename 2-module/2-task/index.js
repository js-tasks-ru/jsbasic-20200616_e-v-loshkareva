/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
 function isEmpty(obj) {
     for (let i in obj) {
         if (i in obj) {
             return false;
         }
     }
     return true;
 }
